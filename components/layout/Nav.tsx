'use client';

import { useEffect, useState } from 'react';
import { useI18n } from '@/providers/I18nProvider';
import LangToggle from '@/components/ui/LangToggle';
import LCMark from '@/components/ui/LCMark';
import { trackEvent } from '@/lib/firebase';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close on Esc
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const navItems = [
    { href: '#services', label: t.nav.services, section: 'services' },
    { href: '#process', label: t.nav.process, section: 'process' },
    { href: '#principles', label: t.nav.principles, section: 'principles' },
    { href: '#about', label: t.nav.about, section: 'about' },
    { href: '#contact', label: t.nav.contact, section: 'contact' },
  ];

  const closeMenu = () => setMenuOpen(false);

  const openMobileMenu = () => {
    trackEvent('mobile_menu_open');
    setMenuOpen(true);
  };

  const handleNavClick = (section: string, from: 'desktop_nav' | 'mobile_menu') => {
    trackEvent('nav_click', { section, from });
    if (from === 'mobile_menu') closeMenu();
  };

  const handleHomeClick = (from: 'desktop_nav' | 'mobile_menu') => {
    trackEvent('home_click', { from });
    if (from === 'mobile_menu') closeMenu();
  };

  return (
    <>
      <header
        data-scrolled={scrolled || undefined}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled
            ? 'color-mix(in oklch, var(--color-bg) 78%, transparent)'
            : 'transparent',
          backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid var(--color-border)'
            : '1px solid transparent',
          transition:
            'background-color 280ms var(--ease-out-strong), backdrop-filter 280ms var(--ease-out-strong), border-color 280ms var(--ease-out-strong)',
        }}
      >
        <nav
          className="w-full h-12 grid grid-cols-3 items-center"
          style={{ paddingInline: 'clamp(20px, 4vw, 80px)' }}
        >
          <div className="flex justify-start">
            <a
              href="#hero"
              aria-label={t.nav.homeAriaLabel}
              onClick={() => handleHomeClick('desktop_nav')}
              className="inline-flex items-center no-underline hover:opacity-70 transition-opacity duration-150 ease-out-strong"
              style={{ color: 'var(--color-fg)' }}
            >
              <LCMark
                title={t.nav.homeAriaLabel}
                style={{ width: '36px', height: 'auto' }}
              />
            </a>
          </div>

          <div className="flex justify-center">
            <ul className="flex items-center gap-1 list-none max-[640px]:hidden">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.section, 'desktop_nav')}
                    className="inline-block text-[12.5px] font-normal tracking-[-0.005em] no-underline hover:opacity-70 transition-opacity duration-150 ease-out-strong"
                    style={{
                      color: 'var(--color-fg)',
                      fontFamily: 'var(--font-sans)',
                      padding: '8px 12px',
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end items-center gap-3">
            <div className="max-[640px]:hidden">
              <LangToggle />
            </div>
            <button
              type="button"
              onClick={openMobileMenu}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="hidden max-[640px]:inline-flex items-center justify-center hover:opacity-70 active:scale-[0.96] transition-[opacity,transform] duration-150 ease-out-strong"
              style={{
                color: 'var(--color-fg)',
                background: 'transparent',
                border: 'none',
                padding: '8px',
                margin: '-8px',
                cursor: 'pointer',
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.homeAriaLabel}
          className="fixed inset-0 z-[100] flex flex-col"
          style={{
            background: 'var(--color-bg)',
            animation: 'lc-rise 240ms var(--ease-out-strong) both',
          }}
        >
          <div
            className="w-full h-12 grid grid-cols-3 items-center shrink-0"
            style={{ paddingInline: 'clamp(20px, 4vw, 80px)' }}
          >
            <div className="flex justify-start">
              <a
                href="#hero"
                aria-label={t.nav.homeAriaLabel}
                onClick={() => handleHomeClick('mobile_menu')}
                className="inline-flex items-center no-underline"
                style={{ color: 'var(--color-fg)' }}
              >
                <LCMark
                  title={t.nav.homeAriaLabel}
                  style={{ width: '36px', height: 'auto' }}
                />
              </a>
            </div>
            <div />
            <div className="flex justify-end">
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="inline-flex items-center justify-center hover:opacity-70 active:scale-[0.96] transition-[opacity,transform] duration-150 ease-out-strong"
                style={{
                  color: 'var(--color-fg)',
                  background: 'transparent',
                  border: 'none',
                  padding: '8px',
                  margin: '-8px',
                  cursor: 'pointer',
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          <nav
            className="flex-1 flex flex-col items-center justify-center"
            style={{
              paddingInline: 'clamp(24px, 5vw, 80px)',
              paddingBottom: 'clamp(48px, 12vw, 96px)',
            }}
          >
            <ul className="flex flex-col items-center gap-1 list-none w-full">
              {navItems.map((item, index) => (
                <li
                  key={item.href}
                  className="w-full"
                  style={{
                    animation: `lc-rise 520ms ${120 + index * 60}ms var(--ease-out-strong) both`,
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.section, 'mobile_menu')}
                    className="block text-center no-underline hover:opacity-70 active:opacity-50 transition-opacity duration-150 ease-out-strong"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(1.75rem, 7vw, 2.5rem)',
                      fontWeight: 500,
                      letterSpacing: '-0.025em',
                      lineHeight: 1.2,
                      color: 'var(--color-fg)',
                      paddingBlock: '12px',
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div
              className="mt-12"
              style={{
                animation: `lc-rise 520ms ${120 + navItems.length * 60}ms var(--ease-out-strong) both`,
              }}
            >
              <LangToggle />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
