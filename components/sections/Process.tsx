'use client';

import { useI18n } from '@/providers/I18nProvider';
import Reveal from '@/components/ui/Reveal';

export default function Process() {
  const { t } = useI18n();
  const { process } = t;

  return (
    <section
      id="process"
      style={{
        background: 'var(--color-bg-dark)',
        color: 'var(--color-fg-on-dark)',
        paddingTop: 'clamp(96px, 12vw, 160px)',
        paddingBottom: 'clamp(96px, 12vw, 160px)',
      }}
    >
      <div className="w-full" style={{ paddingInline: 'clamp(24px, 5vw, 120px)' }}>
        <Reveal>
        <header className="text-center" style={{ marginBottom: 'var(--space-fluid-2xl)' }}>
          <div
            className="mb-5 max-[640px]:mb-3"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '-0.005em',
              color: 'var(--color-fg-2-on-dark)',
            }}
          >
            {process.eyebrow}
          </div>
          <h2
            className="mx-auto max-w-[800px]"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)',
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              color: 'var(--color-fg-on-dark)',
            }}
          >
            {process.headline}
          </h2>
        </header>
        </Reveal>

        <div
          aria-hidden="true"
          style={{ height: '1px', background: 'var(--color-border-on-dark)' }}
        />

        <div
          className="grid grid-cols-3 max-[768px]:grid-cols-1"
          style={{
            gap: 'var(--space-fluid-xl)',
            marginTop: 'var(--space-fluid-2xl)',
          }}
        >
          {process.steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
            <article className="text-center">
              <div
                aria-hidden="true"
                className="mb-7 max-[640px]:mb-4"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                  fontWeight: 600,
                  lineHeight: 0.85,
                  letterSpacing: '-0.05em',
                  color: 'var(--color-fg-2-on-dark)',
                }}
              >
                {step.number}
              </div>

              <div
                className="mb-3 max-[640px]:mb-2"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '-0.005em',
                  color: 'var(--color-accent)',
                }}
              >
                {step.name}
              </div>

              <h3
                className="mb-4 max-[640px]:mb-3"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1.375rem, 2.2vw, 1.75rem)',
                  fontWeight: 600,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  color: 'var(--color-fg-on-dark)',
                }}
              >
                {step.headline}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15.5px',
                  fontWeight: 400,
                  lineHeight: 1.55,
                  letterSpacing: '-0.008em',
                  color: 'var(--color-fg-2-on-dark)',
                }}
              >
                {step.body}
              </p>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
