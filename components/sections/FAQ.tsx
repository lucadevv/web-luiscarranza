'use client';

import { useI18n } from '@/providers/I18nProvider';
import Reveal from '@/components/ui/Reveal';
import { trackEvent } from '@/lib/firebase';

export default function FAQ() {
  const { t } = useI18n();
  const { faq } = t;

  return (
    <section
      id="faq"
      style={{
        background: 'var(--color-bg)',
        color: 'var(--color-fg)',
        paddingTop: 'clamp(96px, 12vw, 160px)',
        paddingBottom: 'clamp(96px, 12vw, 160px)',
      }}
    >
      <div className="w-full" style={{ paddingInline: 'clamp(24px, 5vw, 120px)' }}>
        <Reveal>
          <header
            className="text-center"
            style={{ marginBottom: 'var(--space-fluid-2xl)' }}
          >
            <div
              className="mb-5 max-[640px]:mb-3"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '-0.005em',
                color: 'var(--color-fg-2)',
              }}
            >
              {faq.eyebrow}
            </div>
            <h2
              className="mx-auto max-w-[800px]"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)',
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                color: 'var(--color-fg)',
              }}
            >
              {faq.headline}
            </h2>
          </header>
        </Reveal>

        <div className="mx-auto max-w-[820px]">
          <div
            aria-hidden="true"
            style={{ height: '1px', background: 'var(--color-border)' }}
          />
          {faq.items.map((item, index) => (
            <Reveal key={index} delay={index * 50}>
              <details
                className="faq-item group"
                style={{
                  borderBottom: '1px solid var(--color-border)',
                }}
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) {
                    trackEvent('faq_open', {
                      index,
                      question: item.question,
                    });
                  }
                }}
              >
                <summary
                  className="faq-summary"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '24px',
                    cursor: 'pointer',
                    paddingTop: 'clamp(20px, 2.5vw, 28px)',
                    paddingBottom: 'clamp(20px, 2.5vw, 28px)',
                    listStyle: 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                      fontWeight: 500,
                      lineHeight: 1.4,
                      letterSpacing: '-0.014em',
                      color: 'var(--color-fg)',
                      flex: 1,
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="faq-chevron"
                    style={{
                      flexShrink: 0,
                      color: 'var(--color-fg-3)',
                      transition: 'transform 200ms var(--ease-out-strong), color 200ms var(--ease-out-strong)',
                      marginTop: '6px',
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 6L8 11L13 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>
                <div
                  style={{
                    paddingBottom: 'clamp(20px, 2.5vw, 28px)',
                    paddingRight: '40px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(0.9375rem, 1.3vw, 1.0625rem)',
                      fontWeight: 400,
                      lineHeight: 1.6,
                      letterSpacing: '-0.011em',
                      color: 'var(--color-fg-2)',
                      maxWidth: '680px',
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
