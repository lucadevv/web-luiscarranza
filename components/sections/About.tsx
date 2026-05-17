'use client';

import Link from 'next/link';
import LCMonogram from '@/components/ui/LCMonogram';
import Reveal from '@/components/ui/Reveal';
import { useI18n } from '@/providers/I18nProvider';
import { trackEvent } from '@/lib/firebase';

export default function About() {
  const { t } = useI18n();
  const { about } = t;

  return (
    <section
      id="about"
      style={{
        background: 'var(--color-bg)',
        color: 'var(--color-fg)',
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
            {about.eyebrow}
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
            {about.headline}
          </h2>
        </header>
        </Reveal>

        <Reveal delay={120}>
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-[360px] max-[640px]:max-w-[280px] mx-auto">
            <LCMonogram
              photoSrc="/founder.jpg"
              photoAlt="Luis Ivan Carranza Saldaña"
            />
          </div>

          <div
            className="mt-5"
            style={{
              marginBottom: 'var(--space-fluid-xl)',
              fontFamily: 'var(--font-sans)',
              fontSize: '13.5px',
              fontWeight: 500,
              letterSpacing: '-0.005em',
              color: 'var(--color-fg-2)',
            }}
          >
            {about.caption}
          </div>

          <div className="max-w-[780px] mx-auto">
            {about.paragraphs.map((paragraph, index) => {
              const isLead = index === 0;
              return (
                <p
                  key={index}
                  style={{
                    marginBottom:
                      index < about.paragraphs.length - 1
                        ? 'var(--space-fluid-md)'
                        : undefined,
                    fontFamily: 'var(--font-sans)',
                    fontSize: isLead
                      ? 'clamp(1.25rem, 2vw, 1.625rem)'
                      : 'clamp(1rem, 1.4vw, 1.1875rem)',
                    fontWeight: isLead ? 500 : 400,
                    lineHeight: isLead ? 1.32 : 1.55,
                    letterSpacing: isLead ? '-0.018em' : '-0.011em',
                    color: isLead ? 'var(--color-fg)' : 'var(--color-fg-2)',
                  }}
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div style={{ marginTop: 'var(--space-fluid-xl)' }}>
            <Link
              href="/about"
              onClick={() =>
                trackEvent('nav_click', { section: 'about_page', from: 'home_about_section' })
              }
              className="group inline-flex items-center gap-[3px] no-underline"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-accent)',
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '-0.011em',
              }}
            >
              <span className="group-hover:underline underline-offset-[3px]">
                {about.readMore}
              </span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 ease-out-strong group-hover:translate-x-[3px]"
                style={{ display: 'inline-block', fontSize: '17px', lineHeight: 1 }}
              >
                ›
              </span>
            </Link>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
