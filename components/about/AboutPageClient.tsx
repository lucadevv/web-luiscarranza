'use client';

import Image from 'next/image';
import Link from 'next/link';
import LCMark from '@/components/ui/LCMark';
import Reveal from '@/components/ui/Reveal';
import { useI18n } from '@/providers/I18nProvider';
import { trackEvent } from '@/lib/firebase';

export default function AboutPageClient() {
  const { t } = useI18n();
  const page = t.aboutPage;

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
            aria-label="Luis Carranza, LLC"
            className="inline-flex items-center no-underline hover:opacity-70 transition-opacity duration-150 ease-out-strong"
            style={{ color: 'var(--color-fg)' }}
          >
            <LCMark title="Luis Carranza, LLC" style={{ width: '36px', height: 'auto' }} />
          </Link>
          <Link
            href="/"
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
            {t.langToggle.switchTo === 'Switch language' ? 'Home' : 'Inicio'}
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section
        className="w-full"
        style={{
          background: 'var(--color-bg)',
          color: 'var(--color-fg)',
          paddingTop: 'clamp(96px, 12vw, 160px)',
          paddingBottom: 'clamp(64px, 9vw, 120px)',
          paddingInline: 'clamp(24px, 5vw, 120px)',
        }}
      >
        <div className="mx-auto max-w-[860px] text-center">
          <Reveal>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '-0.005em',
                color: 'var(--color-fg-2)',
                marginBottom: 'var(--space-fluid-md)',
              }}
            >
              {page.eyebrow}
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2.5rem, 6.5vw, 5rem)',
                fontWeight: 600,
                lineHeight: 1.04,
                letterSpacing: '-0.045em',
                color: 'var(--color-fg)',
                marginBottom: 'var(--space-fluid-xl)',
              }}
            >
              {page.headline}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p
              className="mx-auto"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.125rem, 1.8vw, 1.4375rem)',
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: '-0.012em',
                color: 'var(--color-fg-2)',
                maxWidth: '720px',
              }}
            >
              {page.leadParagraph}
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section
        className="w-full"
        style={{
          background: 'var(--color-bg)',
          color: 'var(--color-fg)',
          paddingTop: 'clamp(48px, 6vw, 80px)',
          paddingBottom: 'clamp(96px, 12vw, 160px)',
          paddingInline: 'clamp(24px, 5vw, 120px)',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <h2
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.875rem, 3.6vw, 2.75rem)',
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--color-fg)',
                marginBottom: 'var(--space-fluid-xl)',
              }}
            >
              {page.intro.heading}
            </h2>
          </Reveal>

          <div>
            {page.intro.body.map((paragraph, i) => (
              <Reveal key={i} delay={i * 60}>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(1.0625rem, 1.5vw, 1.1875rem)',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    letterSpacing: '-0.011em',
                    color: 'var(--color-fg-2)',
                    marginBottom: i < page.intro.body.length - 1 ? 'var(--space-fluid-md)' : 0,
                  }}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER — dark band */}
      <section
        className="w-full"
        style={{
          background: 'var(--color-bg-dark)',
          color: 'var(--color-fg-on-dark)',
          paddingTop: 'clamp(96px, 12vw, 160px)',
          paddingBottom: 'clamp(96px, 12vw, 160px)',
          paddingInline: 'clamp(24px, 5vw, 120px)',
        }}
      >
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-12 gap-10 max-[900px]:grid-cols-1 max-[900px]:gap-12 items-center">
            <Reveal className="col-span-5 max-[900px]:col-span-full">
              <div className="mx-auto" style={{ maxWidth: '400px' }}>
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    aspectRatio: '1 / 1',
                    background: 'var(--color-fg-2-on-dark)',
                  }}
                >
                  <Image
                    src="/founder.jpg"
                    alt={page.founder.name}
                    fill
                    sizes="(max-width: 900px) 400px, 500px"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13.5px',
                    fontWeight: 500,
                    letterSpacing: '-0.005em',
                    color: 'var(--color-fg-2-on-dark)',
                  }}
                >
                  {page.founder.caption}
                </p>
              </div>
            </Reveal>

            <Reveal className="col-span-7 max-[900px]:col-span-full" delay={120}>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '-0.005em',
                  color: 'var(--color-accent)',
                  marginBottom: 'var(--space-fluid-sm)',
                }}
              >
                {page.founder.eyebrow}
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1.875rem, 3.6vw, 2.75rem)',
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: 'var(--color-fg-on-dark)',
                  marginBottom: 'var(--space-fluid-xs)',
                }}
              >
                {page.founder.name}
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  fontWeight: 500,
                  letterSpacing: '-0.008em',
                  color: 'var(--color-fg-2-on-dark)',
                  marginBottom: 'var(--space-fluid-lg)',
                }}
              >
                {page.founder.title}
              </p>
              {page.founder.bio.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    letterSpacing: '-0.011em',
                    color: 'var(--color-fg-2-on-dark)',
                    marginBottom: i < page.founder.bio.length - 1 ? 'var(--space-fluid-md)' : 0,
                  }}
                >
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* STORY / TIMELINE */}
      <section
        className="w-full"
        style={{
          background: 'var(--color-bg)',
          color: 'var(--color-fg)',
          paddingTop: 'clamp(96px, 12vw, 160px)',
          paddingBottom: 'clamp(96px, 12vw, 160px)',
          paddingInline: 'clamp(24px, 5vw, 120px)',
        }}
      >
        <div className="mx-auto max-w-[860px]">
          <Reveal>
            <header
              className="text-center"
              style={{ marginBottom: 'var(--space-fluid-2xl)' }}
            >
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
                {page.story.eyebrow}
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: '-0.035em',
                  color: 'var(--color-fg)',
                }}
              >
                {page.story.heading}
              </h2>
            </header>
          </Reveal>

          <div
            aria-hidden="true"
            style={{ height: '1px', background: 'var(--color-border)' }}
          />

          {page.story.chapters.map((chapter, i) => (
            <Reveal key={i} delay={i * 60}>
              <article
                className="grid grid-cols-12 gap-6 max-[640px]:grid-cols-1"
                style={{
                  paddingTop: 'clamp(40px, 5vw, 64px)',
                  paddingBottom: 'clamp(40px, 5vw, 64px)',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                <div className="col-span-3 max-[640px]:col-span-full">
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      color: 'var(--color-accent)',
                      lineHeight: 1,
                    }}
                  >
                    {chapter.year}
                  </div>
                </div>
                <div className="col-span-9 max-[640px]:col-span-full">
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
                      fontWeight: 600,
                      lineHeight: 1.2,
                      letterSpacing: '-0.025em',
                      color: 'var(--color-fg)',
                      marginBottom: 'var(--space-fluid-sm)',
                    }}
                  >
                    {chapter.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
                      fontWeight: 400,
                      lineHeight: 1.6,
                      letterSpacing: '-0.011em',
                      color: 'var(--color-fg-2)',
                    }}
                  >
                    {chapter.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section
        className="w-full"
        style={{
          background: 'var(--color-bg-alt)',
          color: 'var(--color-fg)',
          paddingTop: 'clamp(96px, 12vw, 160px)',
          paddingBottom: 'clamp(96px, 12vw, 160px)',
          paddingInline: 'clamp(24px, 5vw, 120px)',
        }}
      >
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <header
              className="text-center"
              style={{ marginBottom: 'var(--space-fluid-2xl)' }}
            >
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
                {page.values.eyebrow}
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: '-0.035em',
                  color: 'var(--color-fg)',
                }}
              >
                {page.values.heading}
              </h2>
            </header>
          </Reveal>

          <div
            className="grid grid-cols-2 max-[768px]:grid-cols-1"
            style={{ gap: 'var(--space-fluid-2xl)' }}
          >
            {page.values.items.map((value, i) => (
              <Reveal key={i} delay={i * 50}>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
                      fontWeight: 600,
                      lineHeight: 1.2,
                      letterSpacing: '-0.025em',
                      color: 'var(--color-fg)',
                      marginBottom: 'var(--space-fluid-sm)',
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
                      fontWeight: 400,
                      lineHeight: 1.6,
                      letterSpacing: '-0.011em',
                      color: 'var(--color-fg-2)',
                    }}
                  >
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section
        className="w-full"
        style={{
          background: 'var(--color-bg-dark)',
          color: 'var(--color-fg-on-dark)',
          paddingTop: 'clamp(120px, 16vw, 200px)',
          paddingBottom: 'clamp(120px, 16vw, 200px)',
          paddingInline: 'clamp(24px, 5vw, 120px)',
        }}
      >
        <div className="mx-auto max-w-[820px] text-center">
          <Reveal>
            <h2
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                fontWeight: 600,
                lineHeight: 1.02,
                letterSpacing: '-0.045em',
                color: 'var(--color-fg-on-dark)',
                marginBottom: 'var(--space-fluid-lg)',
              }}
            >
              {page.closing.heading}
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p
              className="mx-auto"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)',
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: '-0.012em',
                color: 'var(--color-fg-2-on-dark)',
                maxWidth: '600px',
                marginBottom: 'var(--space-fluid-xl)',
              }}
            >
              {page.closing.body}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <Link
              href="/#contact"
              onClick={() =>
                trackEvent('cta_click', {
                  location: 'about_page_closing',
                  label: 'start_conversation',
                })
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
              {page.closing.cta}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
