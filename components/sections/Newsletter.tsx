'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useI18n } from '@/providers/I18nProvider';
import Reveal from '@/components/ui/Reveal';
import { trackEvent } from '@/lib/firebase';

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'invalid';

export default function Newsletter() {
  const { t } = useI18n();
  const n = t.newsletter;

  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('invalid');
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), website }),
      });

      if (!res.ok) {
        setStatus('error');
        trackEvent('newsletter_signup', { status: 'error', code: res.status });
        return;
      }

      const data = await res.json().catch(() => ({}));
      setStatus('success');
      trackEvent('newsletter_signup', {
        status: data.status === 'already_subscribed' ? 'already_subscribed' : 'success',
      });
      setEmail('');
    } catch {
      setStatus('error');
      trackEvent('newsletter_signup', { status: 'error', code: 'network' });
    }
  }

  return (
    <section
      id="newsletter"
      style={{
        background: 'var(--color-bg-alt)',
        color: 'var(--color-fg)',
        paddingTop: 'clamp(96px, 12vw, 160px)',
        paddingBottom: 'clamp(96px, 12vw, 160px)',
        paddingInline: 'clamp(24px, 5vw, 120px)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="mx-auto max-w-[680px] text-center">
        <Reveal>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '-0.005em',
              color: 'var(--color-fg-2)',
              marginBottom: 'var(--space-fluid-sm)',
            }}
          >
            {n.eyebrow}
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              color: 'var(--color-fg)',
              marginBottom: 'var(--space-fluid-md)',
            }}
          >
            {n.headline}
          </h2>
          <p
            className="mx-auto"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: '-0.011em',
              color: 'var(--color-fg-2)',
              maxWidth: '520px',
              marginBottom: 'var(--space-fluid-xl)',
            }}
          >
            {n.description}
          </p>
        </Reveal>

        <Reveal delay={120}>
          {status === 'success' ? (
            <div
              role="status"
              aria-live="polite"
              className="mx-auto"
              style={{
                maxWidth: '520px',
                padding: 'clamp(20px, 2.5vw, 28px)',
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '14px',
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.9375rem, 1.3vw, 1rem)',
                fontWeight: 500,
                lineHeight: 1.5,
                letterSpacing: '-0.008em',
                color: 'var(--color-fg)',
              }}
            >
              {n.success}
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="mx-auto"
              style={{ maxWidth: '520px' }}
            >
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  width: '1px',
                  height: '1px',
                  opacity: 0,
                }}
              />

              <div
                className="flex gap-2 max-[520px]:flex-col"
                style={{
                  background: 'var(--color-bg)',
                  border: `1px solid ${status === 'invalid' ? '#ff8a78' : 'var(--color-border)'}`,
                  borderRadius: '14px',
                  padding: '6px',
                  transition: 'border-color 160ms var(--ease-out-strong)',
                }}
              >
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'invalid' || status === 'error') setStatus('idle');
                  }}
                  placeholder={n.emailPlaceholder}
                  disabled={status === 'submitting'}
                  aria-label={n.emailPlaceholder}
                  aria-invalid={status === 'invalid'}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    padding: '12px 14px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '15.5px',
                    fontWeight: 400,
                    letterSpacing: '-0.011em',
                    color: 'var(--color-fg)',
                    minWidth: 0,
                  }}
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-accent hover:bg-accent-hover active:scale-[0.98] transition-[transform,background-color,opacity] duration-200 ease-out-strong disabled:opacity-60"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-fg-on-dark)',
                    fontSize: '15px',
                    fontWeight: 500,
                    letterSpacing: '-0.011em',
                    padding: '11px 22px',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: status === 'submitting' ? 'wait' : 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {status === 'submitting' ? n.submitting : n.submit}
                </button>
              </div>

              {(status === 'invalid' || status === 'error') && (
                <div
                  role="alert"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 400,
                    letterSpacing: '-0.005em',
                    color: '#ff8a78',
                    marginTop: 'var(--space-fluid-sm)',
                    textAlign: 'left',
                    paddingLeft: '8px',
                  }}
                >
                  {status === 'invalid' ? n.invalidEmail : n.error}
                </div>
              )}
            </form>
          )}

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '12.5px',
              fontWeight: 400,
              letterSpacing: '-0.005em',
              color: 'var(--color-fg-3)',
              marginTop: 'var(--space-fluid-md)',
            }}
          >
            {n.privacyNote}{' '}
            <Link
              href="/privacy"
              className="hover:underline underline-offset-[3px]"
              style={{ color: 'var(--color-fg-2)' }}
            >
              {t.cookies.learnMore}
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
