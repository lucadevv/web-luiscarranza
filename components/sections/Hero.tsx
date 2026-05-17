'use client';

import { useI18n } from '@/providers/I18nProvider';
import TechStack from '@/components/sections/TechStack';
import { trackEvent } from '@/lib/firebase';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center px-6 max-[640px]:px-4"
      style={{
        background: 'var(--color-bg)',
        color: 'var(--color-fg)',
        minHeight: '100svh',
        paddingTop: 'clamp(140px, 18vw, 220px)',
        paddingBottom: 'clamp(96px, 12vw, 160px)',
      }}
    >
      <div
        className="max-w-[1320px] w-full text-center"
        style={{ paddingInline: 'clamp(8px, 2vw, 32px)' }}
      >
        <h1
          className="font-semibold"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(2.75rem, 8.5vw, 6.75rem)',
            lineHeight: 1.06,
            letterSpacing: '-0.025em',
            color: 'var(--color-fg)',
            fontFeatureSettings: '"ss01", "cv11"',
            marginBottom: 'clamp(1.5rem, 2.6vw, 2.25rem)',
            animation: 'lc-rise 700ms var(--ease-out-strong) both',
          }}
        >
          {t.hero.headline}
        </h1>

        <p
          className="mx-auto max-w-[640px]"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.125rem, 1.8vw, 1.4375rem)',
            lineHeight: 1.5,
            letterSpacing: '-0.012em',
            color: 'var(--color-fg-2)',
            fontWeight: 400,
            marginBottom: 'clamp(2.75rem, 5vw, 4.5rem)',
            animation: 'lc-rise 700ms 80ms var(--ease-out-strong) both',
          }}
        >
          {t.hero.subtitle}
        </p>

        <div
          className="flex items-center justify-center flex-wrap"
          style={{
            gap: 'clamp(1.5rem, 2.5vw, 2rem)',
            animation: 'lc-rise 700ms 160ms var(--ease-out-strong) both',
          }}
        >
          <a
            href="#contact"
            onClick={() =>
              trackEvent('cta_click', { location: 'hero', label: 'start_project' })
            }
            className="inline-flex items-center justify-center rounded-full no-underline whitespace-nowrap bg-accent hover:bg-accent-hover active:scale-[0.98] transition-[transform,background-color] duration-200 ease-out-strong"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-fg-on-dark)',
              fontSize: '17px',
              fontWeight: 400,
              padding: '11px 22px',
            }}
          >
            {t.hero.ctaPrimary}
          </a>

          <a
            href="#services"
            onClick={() =>
              trackEvent('cta_click', {
                location: 'hero',
                label: 'explore_services',
              })
            }
            className="group inline-flex items-center gap-[3px] no-underline"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-accent)',
              fontSize: '17px',
              fontWeight: 400,
            }}
          >
            <span className="group-hover:underline underline-offset-[3px]">
              {t.hero.ctaSecondary}
            </span>
            <span
              aria-hidden="true"
              className="transition-transform duration-200 ease-out-strong group-hover:translate-x-[3px]"
              style={{
                display: 'inline-block',
                fontSize: '18px',
                lineHeight: 1,
                marginTop: '1px',
              }}
            >
              ›
            </span>
          </a>
        </div>

        <TechStack />
      </div>

      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute left-1/2 -translate-x-1/2 hover:opacity-100 transition-opacity duration-200 ease-out-strong"
        style={{
          bottom: 'clamp(28px, 4vw, 56px)',
          color: 'var(--color-fg-2)',
          animation: 'lc-drift 2400ms ease-in-out infinite',
          opacity: 0.6,
        }}
      >
        <svg
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M3 8 L9 14 L15 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
