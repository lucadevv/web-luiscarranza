'use client';

import Link from 'next/link';
import { useI18n } from '@/providers/I18nProvider';
import LCMark from '@/components/ui/LCMark';
import { LinkedInIcon, GitHubIcon } from '@/components/ui/SocialIcons';
import { SITE } from '@/lib/seo';
import { trackEvent } from '@/lib/firebase';

const eyebrowStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '12.5px',
  fontWeight: 500,
  letterSpacing: '-0.005em',
  color: 'var(--color-fg-3)',
};

const linkStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '13.5px',
  fontWeight: 400,
  letterSpacing: '-0.005em',
  color: 'var(--color-fg-2)',
  textDecoration: 'none',
  display: 'inline-block',
  paddingBlock: '4px',
};

const fineLinkStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '12px',
  fontWeight: 400,
  letterSpacing: '-0.005em',
  color: 'var(--color-fg-3)',
  textDecoration: 'none',
};

export default function SiteFooter() {
  const { t } = useI18n();
  const { footer, nav } = t;

  const navLinks = [
    { href: '/#services', label: nav.services, section: 'services' },
    { href: '/#process', label: nav.process, section: 'process' },
    { href: '/#principles', label: nav.principles, section: 'principles' },
    { href: '/#about', label: nav.about, section: 'about' },
    { href: '/#faq', label: nav.faq, section: 'faq' },
    { href: '/blog', label: nav.blog, section: 'blog' },
    { href: '/#contact', label: nav.contact, section: 'contact' },
  ];

  return (
    <footer
      style={{
        background: 'var(--color-bg-alt)',
        color: 'var(--color-fg)',
        paddingTop: 'clamp(64px, 8vw, 96px)',
        paddingBottom: 'clamp(32px, 4vw, 48px)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="w-full" style={{ paddingInline: 'clamp(24px, 5vw, 120px)' }}>
        <div
          className="grid grid-cols-12 max-[768px]:grid-cols-1"
          style={{ gap: 'var(--space-fluid-xl)' }}
        >
          <div className="col-span-4 max-[768px]:col-span-full">
            <div
              style={{
                color: 'var(--color-fg)',
                marginBottom: '14px',
                lineHeight: 1,
              }}
            >
              <LCMark style={{ width: '44px', height: 'auto' }} />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13.5px',
                fontWeight: 400,
                lineHeight: 1.55,
                letterSpacing: '-0.005em',
                color: 'var(--color-fg-2)',
                maxWidth: '280px',
                marginBottom: '20px',
              }}
            >
              {footer.tagline}
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-block hover:underline underline-offset-[3px]"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13.5px',
                fontWeight: 400,
                letterSpacing: '-0.005em',
                color: 'var(--color-accent)',
                textDecoration: 'none',
                paddingBlock: '4px',
                paddingInline: '2px',
                marginLeft: '-2px',
              }}
            >
              {SITE.email}
            </a>

            <div
              className="flex items-center gap-4 mt-5"
              aria-label={footer.followUs}
            >
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                onClick={() =>
                  trackEvent('outbound_click', {
                    destination: 'linkedin',
                    url: SITE.social.linkedin,
                  })
                }
                className="inline-flex items-center justify-center hover:opacity-70 active:scale-[0.96] transition-[opacity,transform] duration-150 ease-out-strong"
                style={{
                  color: 'var(--color-fg-2)',
                  padding: '6px',
                  margin: '-6px',
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
                    url: SITE.social.github,
                  })
                }
                className="inline-flex items-center justify-center hover:opacity-70 active:scale-[0.96] transition-[opacity,transform] duration-150 ease-out-strong"
                style={{
                  color: 'var(--color-fg-2)',
                  padding: '6px',
                  margin: '-6px',
                }}
              >
                <GitHubIcon style={{ width: '20px', height: '20px' }} />
              </a>
            </div>
          </div>

          <div className="col-span-2 col-start-6 max-[768px]:col-span-full max-[768px]:col-start-1">
            <div className="mb-4" style={eyebrowStyle}>
              {footer.navTitle}
            </div>
            <ul className="flex flex-col gap-3 list-none">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() =>
                      trackEvent('nav_click', {
                        section: item.section,
                        from: 'footer',
                      })
                    }
                    className="hover:opacity-60 transition-opacity duration-150 ease-out-strong"
                    style={linkStyle}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-4 col-start-9 max-[768px]:col-span-full max-[768px]:col-start-1">
            <div className="mb-4" style={eyebrowStyle}>
              {footer.legalTitle}
            </div>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-5 list-none max-[480px]:grid-cols-1">
              {footer.legal.map((item) => (
                <li key={item.label}>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '-0.005em',
                      color: 'var(--color-fg-3)',
                      marginBottom: '3px',
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '12.5px',
                      fontWeight: 500,
                      letterSpacing: '-0.008em',
                      color: 'var(--color-fg)',
                      lineHeight: 1.3,
                      marginBottom: '2px',
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11.5px',
                      fontWeight: 400,
                      letterSpacing: '-0.003em',
                      color: 'var(--color-fg-2)',
                      lineHeight: 1.38,
                    }}
                  >
                    {item.sub}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-16 pt-7 flex items-center justify-between flex-wrap gap-3 max-[640px]:mt-12 max-[640px]:flex-col max-[640px]:items-start"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: 400,
              letterSpacing: '-0.005em',
              color: 'var(--color-fg-3)',
            }}
          >
            {footer.copyright}
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/privacy"
              className="hover:opacity-70 transition-opacity duration-150 ease-out-strong"
              style={fineLinkStyle}
            >
              {footer.privacyLink}
            </Link>
            <span
              aria-hidden="true"
              style={{ color: 'var(--color-fg-3)', opacity: 0.5 }}
            >
              ·
            </span>
            <Link
              href="/terms"
              className="hover:opacity-70 transition-opacity duration-150 ease-out-strong"
              style={fineLinkStyle}
            >
              {footer.termsLink}
            </Link>
            <span
              aria-hidden="true"
              style={{ color: 'var(--color-fg-3)', opacity: 0.5 }}
            >
              ·
            </span>
            <span style={fineLinkStyle}>{footer.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
