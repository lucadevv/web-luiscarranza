'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useI18n } from '@/providers/I18nProvider';
import { initAnalytics, trackEvent } from '@/lib/firebase';

const CONSENT_KEY = 'lc-cookie-consent';

type Consent = 'unknown' | 'accepted' | 'rejected';

export default function CookieBanner() {
  const { t } = useI18n();
  const [consent, setConsent] = useState<Consent>('unknown');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = window.localStorage.getItem(CONSENT_KEY);
      if (stored === 'accepted' || stored === 'rejected') {
        setConsent(stored);
        if (stored === 'accepted') {
          void initAnalytics();
        }
      }
    } catch {
      /* localStorage might be disabled */
    }
  }, []);

  function persist(next: 'accepted' | 'rejected') {
    setConsent(next);
    try {
      window.localStorage.setItem(CONSENT_KEY, next);
    } catch {
      /* ignore */
    }
    if (next === 'accepted') {
      void initAnalytics().then(() => {
        // Fired after analytics is ready so the event is captured
        trackEvent('cookie_consent', { decision: 'accept' });
      });
    }
    // If rejected, we deliberately do not track (would be hypocritical)
  }

  if (!mounted) return null;
  if (consent !== 'unknown') return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed z-[90]"
      style={{
        bottom: 'clamp(16px, 3vw, 28px)',
        left: 'clamp(16px, 3vw, 28px)',
        right: 'clamp(16px, 3vw, 28px)',
        maxWidth: '720px',
        marginInline: 'auto',
        background: 'var(--color-bg-dark)',
        color: 'var(--color-fg-on-dark)',
        borderRadius: '16px',
        padding: 'clamp(16px, 2.2vw, 22px)',
        boxShadow:
          '0 10px 30px -10px rgba(0, 0, 0, 0.25), 0 4px 12px -4px rgba(0, 0, 0, 0.12)',
        animation: 'lc-rise 360ms var(--ease-out-strong) both',
        animationDelay: '600ms',
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13.5px',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-0.008em',
            color: 'var(--color-fg-on-dark)',
            flex: 1,
          }}
        >
          {t.cookies.message}{' '}
          <Link
            href="/privacy"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity duration-150"
            style={{ color: 'var(--color-fg-on-dark)' }}
          >
            {t.cookies.learnMore}
          </Link>
          .
        </p>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => persist('rejected')}
            className="hover:opacity-70 active:scale-[0.97] transition-[opacity,transform] duration-150 ease-out-strong"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '-0.005em',
              color: 'var(--color-fg-2-on-dark)',
              background: 'transparent',
              border: '1px solid var(--color-border-on-dark)',
              padding: '8px 14px',
              borderRadius: '999px',
              cursor: 'pointer',
            }}
          >
            {t.cookies.reject}
          </button>
          <button
            type="button"
            onClick={() => persist('accepted')}
            className="bg-accent hover:bg-accent-hover active:scale-[0.97] transition-[background-color,transform] duration-150 ease-out-strong"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '-0.005em',
              color: 'var(--color-fg-on-dark)',
              border: 'none',
              padding: '8px 14px',
              borderRadius: '999px',
              cursor: 'pointer',
            }}
          >
            {t.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
