'use client';

import { useI18n } from '@/providers/I18nProvider';
import Reveal from '@/components/ui/Reveal';

export default function Principles() {
  const { t } = useI18n();
  const { principles } = t;

  return (
    <section
      id="principles"
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
              {principles.eyebrow}
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
              {principles.headline}
            </h2>
          </header>
        </Reveal>

        <div
          aria-hidden="true"
          style={{ height: '1px', background: 'var(--color-border)' }}
        />

        {principles.items.map((item, index) => (
          <Reveal key={item.number} delay={index * 60}>
            <article
              className="text-center"
              style={{
                paddingTop: 'clamp(56px, 7vw, 96px)',
                paddingBottom: 'clamp(56px, 7vw, 96px)',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <div
                aria-hidden="true"
                className="mb-5 max-[640px]:mb-4"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '-0.005em',
                  color: 'var(--color-accent)',
                }}
              >
                {item.number}
              </div>

              <h3
                className="mx-auto mb-5 max-w-[760px] max-[640px]:mb-4"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1.75rem, 3.6vw, 3rem)',
                  fontWeight: 600,
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  color: 'var(--color-fg)',
                }}
              >
                {item.headline}
              </h3>

              <p
                className="mx-auto max-w-[640px]"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1rem, 1.4vw, 1.1875rem)',
                  fontWeight: 400,
                  lineHeight: 1.5,
                  letterSpacing: '-0.011em',
                  color: 'var(--color-fg-2)',
                }}
              >
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
