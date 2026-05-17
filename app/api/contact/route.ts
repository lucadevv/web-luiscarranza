import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getClientIp, rateLimit } from '@/lib/rateLimit';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'no-reply@luiscarranza.com';
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'contact@luiscarranza.com';

// Allowed origins for cross-origin requests. In production add prod URL.
const ALLOWED_ORIGINS = new Set([
  'https://luiscarranza.com',
  'https://www.luiscarranza.com',
  'http://localhost:3005',
  'http://localhost:3000',
]);

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return true; // same-origin requests omit Origin header — allow
  return ALLOWED_ORIGINS.has(origin);
}

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  // honeypot field — bots fill it
  website?: string;
};

function validate(body: Payload) {
  const errors: Record<string, string> = {};
  if (!body.name || body.name.trim().length < 2) {
    errors.name = 'Name is too short';
  }
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.email = 'Invalid email address';
  }
  if (!body.message || body.message.trim().length < 10) {
    errors.message = 'Message is too short';
  }
  return errors;
}

export async function POST(request: Request) {
  // 1. Origin check
  if (!isAllowedOrigin(request.headers.get('origin'))) {
    return NextResponse.json({ error: 'Origin not allowed' }, { status: 403 });
  }

  // 2. Rate limit: 5 submissions per IP per 10 minutes
  const ip = getClientIp(request);
  const rl = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 10 * 60 * 1000 });
  if (!rl.ok) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      {
        status: 429,
        headers: { 'Retry-After': String(rl.retryAfterSeconds) },
      },
    );
  }

  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot — silently accept bot submissions but do nothing
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const errors = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // If RESEND_API_KEY is not set (dev or misconfig), log and respond gracefully
  if (!RESEND_API_KEY) {
    console.warn(
      '[contact] RESEND_API_KEY not set — submission received but no email sent.',
    );
    console.info('[contact] payload:', {
      name: body.name,
      email: body.email,
      message: body.message?.slice(0, 200),
    });
    return NextResponse.json({ ok: true, mode: 'dev' });
  }

  try {
    const resend = new Resend(RESEND_API_KEY);
    const result = await resend.emails.send({
      from: `Luis Carranza, LLC <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: body.email!,
      subject: `New inquiry from ${body.name}`,
      text: [
        `Name: ${body.name}`,
        `Email: ${body.email}`,
        '',
        body.message,
      ].join('\n'),
    });

    if (result.error) {
      console.error('[contact] resend error:', result.error);
      return NextResponse.json(
        { error: 'Failed to send. Please email contact@luiscarranza.com directly.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (err) {
    console.error('[contact] unexpected error:', err);
    return NextResponse.json(
      { error: 'Unexpected error. Please try again later.' },
      { status: 500 },
    );
  }
}
