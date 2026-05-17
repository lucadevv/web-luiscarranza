import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getClientIp, rateLimit } from '@/lib/rateLimit';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

const ALLOWED_ORIGINS = new Set([
  'https://luiscarranza.com',
  'https://www.luiscarranza.com',
  'http://localhost:3005',
  'http://localhost:3000',
]);

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return true;
  return ALLOWED_ORIGINS.has(origin);
}

type Payload = {
  email?: string;
  // honeypot — bots fill it
  website?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  // 1. Origin check
  if (!isAllowedOrigin(request.headers.get('origin'))) {
    return NextResponse.json({ error: 'Origin not allowed' }, { status: 403 });
  }

  // 2. Rate limit: 3 signups per IP per hour (more aggressive — subscribe is high-spam-target)
  const ip = getClientIp(request);
  const rl = rateLimit(`subscribe:${ip}`, { limit: 3, windowMs: 60 * 60 * 1000 });
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

  // Honeypot — silently accept bot submissions
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: 'invalid_email' },
      { status: 422 },
    );
  }

  // If misconfigured, log and respond gracefully (dev mode)
  if (!RESEND_API_KEY || !AUDIENCE_ID) {
    console.warn(
      '[subscribe] RESEND_API_KEY or RESEND_AUDIENCE_ID not set — submission received but not stored.',
    );
    console.info('[subscribe] payload:', { email });
    return NextResponse.json({ ok: true, mode: 'dev' });
  }

  try {
    const resend = new Resend(RESEND_API_KEY);
    const result = await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    });

    if (result.error) {
      // Treat "already exists" as success — idempotent UX
      const message = result.error.message?.toLowerCase() ?? '';
      if (message.includes('already') || message.includes('exists')) {
        return NextResponse.json({ ok: true, status: 'already_subscribed' });
      }
      console.error('[subscribe] resend error:', result.error);
      return NextResponse.json(
        { error: 'subscribe_failed' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (err) {
    console.error('[subscribe] unexpected error:', err);
    return NextResponse.json(
      { error: 'unexpected_error' },
      { status: 500 },
    );
  }
}
