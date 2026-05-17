'use client';

import Link from 'next/link';
import LCMark from '@/components/ui/LCMark';
import { useI18n } from '@/providers/I18nProvider';
import { privacy, terms } from '@/lib/legal';
import { trackEvent } from '@/lib/firebase';

type Props = {
  type: 'privacy' | 'terms';
};

export default function LegalPage({ type }: Props) {
  const { lang } = useI18n();
  const doc = type === 'privacy' ? privacy[lang] : terms[lang];
  const backLabel = lang === 'es' ? 'Volver al inicio' : 'Back to home';

  return (
    <>
      <header
        className="w-full"
        style={{
          background: 'var(--color-bg)',
          paddingTop: 'clamp(24px, 4vw, 36px)',
          paddingBottom: 'clamp(24px, 4vw, 36px)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <nav
          className="w-full flex items-center justify-between"
          style={{ paddingInline: 'clamp(24px, 5vw, 120px)' }}
        >
          <Link
            href="/"
            aria-label={backLabel}
            onClick={() => trackEvent('home_click', { from: `legal_${type}` })}
            className="inline-flex items-center no-underline hover:opacity-70 transition-opacity duration-150 ease-out-strong"
            style={{ color: 'var(--color-fg)' }}
          >
            <LCMark title="Luis Carranza, LLC" style={{ width: '36px', height: 'auto' }} />
          </Link>

          <Link
            href="/"
            onClick={() => trackEvent('home_click', { from: `legal_${type}_back` })}
            className="inline-flex items-center gap-1.5 no-underline hover:opacity-70 transition-opacity duration-150 ease-out-strong"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13.5px',
              fontWeight: 500,
              letterSpacing: '-0.008em',
              color: 'var(--color-fg-2)',
            }}
          >
            <span aria-hidden="true">←</span>
            {backLabel}
          </Link>
        </nav>
      </header>

      <article
        className="w-full"
        style={{
          background: 'var(--color-bg)',
          color: 'var(--color-fg)',
          paddingTop: 'clamp(64px, 9vw, 120px)',
          paddingBottom: 'clamp(80px, 12vw, 160px)',
          paddingInline: 'clamp(24px, 5vw, 120px)',
        }}
      >
        <div className="mx-auto max-w-[760px]">
          <header className="mb-12 max-[640px]:mb-9">
            <h1
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                fontWeight: 600,
                lineHeight: 1.06,
                letterSpacing: '-0.035em',
                color: 'var(--color-fg)',
                marginBottom: 'var(--space-fluid-sm)',
              }}
            >
              {doc.title}
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '-0.005em',
                color: 'var(--color-fg-3)',
              }}
            >
              {doc.lastUpdated}
            </p>
          </header>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.0625rem, 1.5vw, 1.1875rem)',
              fontWeight: 400,
              lineHeight: 1.55,
              letterSpacing: '-0.011em',
              color: 'var(--color-fg-2)',
              marginBottom: 'var(--space-fluid-2xl)',
            }}
          >
            {doc.intro}
          </p>

          <div>
            {doc.sections.map((section) => (
              <section
                key={section.heading}
                style={{
                  marginBottom: 'var(--space-fluid-xl)',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                    fontWeight: 600,
                    lineHeight: 1.25,
                    letterSpacing: '-0.02em',
                    color: 'var(--color-fg)',
                    marginBottom: 'var(--space-fluid-md)',
                  }}
                >
                  {section.heading}
                </h2>
                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(0.9375rem, 1.3vw, 1rem)',
                      fontWeight: 400,
                      lineHeight: 1.65,
                      letterSpacing: '-0.008em',
                      color: 'var(--color-fg-2)',
                      marginBottom: i < section.body.length - 1 ? '12px' : 0,
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <section
            style={{
              borderTop: '1px solid var(--color-border)',
              paddingTop: 'var(--space-fluid-xl)',
              marginTop: 'var(--space-fluid-xl)',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                fontWeight: 600,
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                color: 'var(--color-fg)',
                marginBottom: 'var(--space-fluid-md)',
              }}
            >
              {doc.contactBlock.heading}
            </h2>
            <address
              style={{
                fontStyle: 'normal',
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.9375rem, 1.3vw, 1rem)',
                fontWeight: 400,
                lineHeight: 1.75,
                letterSpacing: '-0.008em',
                color: 'var(--color-fg-2)',
              }}
            >
              {doc.contactBlock.lines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </address>
          </section>
        </div>
      </article>
    </>
  );
}
