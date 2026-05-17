'use client';

import { useI18n } from '@/providers/I18nProvider';
import Reveal from '@/components/ui/Reveal';

export default function Services() {
  const { t } = useI18n();
  const { services } = t;

  return (
    <section
      id="services"
      className="relative"
      style={{
        background: 'var(--color-bg)',
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
              color: 'var(--color-fg-2)',
            }}
          >
            {services.eyebrow}
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
            {services.headline}
          </h2>
        </header>
        </Reveal>

        <div
          aria-hidden="true"
          style={{ height: '1px', background: 'var(--color-border)' }}
        />

        {services.features.map((feature, index) => (
          <Reveal key={feature.number} delay={index * 60}>
          <article
            className="text-center"
            style={{
              paddingTop: 'clamp(72px, 9vw, 120px)',
              paddingBottom: 'clamp(72px, 9vw, 120px)',
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            <div
              aria-hidden="true"
              className="mb-6 max-[640px]:mb-4"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2.25rem, 4.5vw, 4rem)',
                fontWeight: 600,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                color: 'var(--color-fg-3)',
              }}
            >
              {feature.number}
            </div>

            <div
              className="mb-4 max-[640px]:mb-3"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '-0.005em',
                color: 'var(--color-accent)',
              }}
            >
              {feature.eyebrow}
            </div>

            <h3
              className="mx-auto mb-6 max-w-[760px] max-[640px]:mb-4"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.75rem, 3.6vw, 3rem)',
                fontWeight: 600,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: 'var(--color-fg)',
              }}
            >
              {feature.headline}
            </h3>

            <p
              className="mx-auto mb-8 max-w-[680px] max-[640px]:mb-6"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.4vw, 1.1875rem)',
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: '-0.011em',
                color: 'var(--color-fg-2)',
              }}
            >
              {feature.body}
            </p>

            <ul
              className="flex flex-wrap items-baseline justify-center list-none mx-auto max-w-[760px]"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13.5px',
                fontWeight: 400,
                letterSpacing: '-0.005em',
                color: 'var(--color-fg-2)',
              }}
            >
              {feature.stack.map((item, i) => (
                <li
                  key={item}
                  className="inline-flex items-center"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {item}
                  {i < feature.stack.length - 1 && (
                    <span
                      aria-hidden="true"
                      style={{
                        margin: '0 12px',
                        color: 'var(--color-fg-3)',
                      }}
                    >
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
