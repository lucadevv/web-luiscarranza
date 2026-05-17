'use client';

import Link from 'next/link';
import LCMark from '@/components/ui/LCMark';
import ContactForm from '@/components/ui/ContactForm';
import { LinkedInIcon, GitHubIcon } from '@/components/ui/SocialIcons';
import { useI18n } from '@/providers/I18nProvider';
import { SITE } from '@/lib/seo';
import { trackEvent } from '@/lib/firebase';

export default function ContactPageClient() {
  const { t } = useI18n();
  const page = t.contactPage;

  return (
    <>
      {/* HEADER */}
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
            onClick={() => trackEvent('home_click', { from: 'contact_page' })}
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
            {page.back}
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section
        className="w-full"
        style={{
          background: 'var(--color-bg)',
          color: 'var(--color-fg)',
          paddingTop: 'clamp(64px, 9vw, 120px)',
          paddingBottom: 'clamp(40px, 6vw, 80px)',
          paddingInline: 'clamp(24px, 5vw, 120px)',
        }}
      >
        <div className="mx-auto max-w-[820px]">
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
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: '-0.04em',
              color: 'var(--color-fg)',
              marginBottom: 'var(--space-fluid-lg)',
            }}
          >
            {page.headline}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)',
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: '-0.012em',
              color: 'var(--color-fg-2)',
              maxWidth: '680px',
            }}
          >
            {page.lead}
          </p>
        </div>
      </section>

      {/* INFO BLOCKS — 2-col grid on desktop, single col on mobile */}
      <section
        className="w-full"
        style={{
          background: 'var(--color-bg)',
          paddingTop: 'clamp(48px, 6vw, 80px)',
          paddingBottom: 'clamp(48px, 6vw, 80px)',
          paddingInline: 'clamp(24px, 5vw, 120px)',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div className="mx-auto max-w-[820px]">
          <div
            className="grid grid-cols-2 max-[640px]:grid-cols-1"
            style={{ gap: 'var(--space-fluid-xl)' }}
          >
            {/* Direct */}
            <article>
              <h2 style={blockHeadingStyle}>{page.sections.direct.title}</h2>
              <p style={blockBodyStyle}>
                <a
                  href={`mailto:${SITE.email}`}
                  onClick={() =>
                    trackEvent('cta_click', {
                      location: 'contact_page',
                      label: 'email_direct',
                    })
                  }
                  className="hover:underline underline-offset-[3px]"
                  style={{
                    color: 'var(--color-accent)',
                    textDecoration: 'none',
                  }}
                >
                  {SITE.email}
                </a>
                <span style={{ display: 'block', marginTop: '6px' }}>
                  {page.sections.direct.body.replace(SITE.email, '').replace(/^[^a-zA-ZáéíóúÁÉÍÓÚñÑ]+/, '')}
                </span>
              </p>
            </article>

            {/* Phone */}
            <article>
              <h2 style={blockHeadingStyle}>{page.sections.phone.title}</h2>
              <p style={blockBodyStyle}>
                <a
                  href={`tel:${SITE.phoneE164}`}
                  onClick={() =>
                    trackEvent('cta_click', {
                      location: 'contact_page',
                      label: 'phone_call',
                    })
                  }
                  className="hover:underline underline-offset-[3px]"
                  style={{
                    color: 'var(--color-accent)',
                    textDecoration: 'none',
                  }}
                >
                  {SITE.phone}
                </a>
                <span style={{ display: 'block', marginTop: '6px' }}>
                  {page.sections.phone.body.replace(SITE.phone, '').replace(/^[^a-zA-ZáéíóúÁÉÍÓÚñÑ]+/, '')}
                </span>
              </p>
            </article>

            {/* Response times */}
            <article>
              <h2 style={blockHeadingStyle}>{page.sections.response.title}</h2>
              <p style={blockBodyStyle}>{page.sections.response.body}</p>
            </article>

            {/* Social */}
            <article>
              <h2 style={blockHeadingStyle}>{page.sections.social.title}</h2>
              <p style={blockBodyStyle}>{page.sections.social.body}</p>
              <div className="flex items-center gap-3 mt-3">
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  onClick={() =>
                    trackEvent('outbound_click', {
                      destination: 'linkedin',
                      from: 'contact_page',
                    })
                  }
                  className="inline-flex items-center justify-center hover:opacity-70 active:scale-[0.96] transition-[opacity,transform] duration-150 ease-out-strong"
                  style={{
                    color: 'var(--color-fg-2)',
                    padding: '4px',
                    margin: '-4px',
                  }}
                >
                  <LinkedInIcon style={{ width: '20px', height: '20px' }} />
                </a>
                <a
                  href={SITE.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  onClick={() =>
                    trackEvent('outbound_click', {
                      destination: 'github',
                      from: 'contact_page',
                    })
                  }
                  className="inline-flex items-center justify-center hover:opacity-70 active:scale-[0.96] transition-[opacity,transform] duration-150 ease-out-strong"
                  style={{
                    color: 'var(--color-fg-2)',
                    padding: '4px',
                    margin: '-4px',
                  }}
                >
                  <GitHubIcon style={{ width: '20px', height: '20px' }} />
                </a>
              </div>
            </article>

            {/* Legal entity */}
            <article>
              <h2 style={blockHeadingStyle}>{page.sections.legal.title}</h2>
              <dl
                className="grid grid-cols-1 gap-y-2 mt-2"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13.5px',
                  fontWeight: 400,
                  lineHeight: 1.5,
                  letterSpacing: '-0.008em',
                  color: 'var(--color-fg-2)',
                }}
              >
                {page.sections.legal.rows.map((row) => (
                  <div key={row.label}>
                    <dt
                      style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        letterSpacing: '-0.003em',
                        color: 'var(--color-fg-3)',
                        marginBottom: '1px',
                      }}
                    >
                      {row.label}
                    </dt>
                    <dd
                      style={{
                        fontWeight: 500,
                        color: 'var(--color-fg)',
                      }}
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section
        id="form"
        className="w-full"
        style={{
          background: 'var(--color-bg-dark)',
          color: 'var(--color-fg-on-dark)',
          paddingTop: 'clamp(96px, 12vw, 160px)',
          paddingBottom: 'clamp(96px, 12vw, 160px)',
          paddingInline: 'clamp(24px, 5vw, 120px)',
        }}
      >
        <div className="mx-auto max-w-[680px] text-center">
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--color-fg-on-dark)',
              marginBottom: 'var(--space-fluid-2xl)',
            }}
          >
            {page.formHeading}
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

const blockHeadingStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'clamp(1.125rem, 1.7vw, 1.375rem)',
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: '-0.02em',
  color: 'var(--color-fg)',
  marginBottom: 'var(--space-fluid-sm)',
} as const;

const blockBodyStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'clamp(0.9375rem, 1.3vw, 1rem)',
  fontWeight: 400,
  lineHeight: 1.55,
  letterSpacing: '-0.008em',
  color: 'var(--color-fg-2)',
} as const;
