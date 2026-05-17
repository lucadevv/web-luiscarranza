'use client';

import { useI18n } from '@/providers/I18nProvider';
import type { Language } from '@/lib/i18n';
import { trackEvent } from '@/lib/firebase';

const options: Language[] = ['en', 'es'];

export default function LangToggle() {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.langToggle.switchTo}
      className="inline-flex items-center"
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '12px',
        fontWeight: 500,
        letterSpacing: '-0.005em',
        lineHeight: 1,
      }}
    >
      {options.map((option, index) => {
        const isActive = option === lang;
        return (
          <span key={option} className="inline-flex items-center">
            {index > 0 && (
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-block',
                  width: '1px',
                  height: '11px',
                  margin: '0 8px',
                  background: 'var(--color-border-strong)',
                }}
              />
            )}
            <button
              type="button"
              onClick={() => {
                if (option !== lang) {
                  trackEvent('language_toggle', { from: lang, to: option });
                }
                setLang(option);
              }}
              aria-pressed={isActive}
              className="hover:opacity-100 active:scale-[0.96] transition-[opacity,transform] duration-150 ease-out-strong"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: isActive ? 'default' : 'pointer',
                padding: '6px 8px',
                color: isActive ? 'var(--color-fg)' : 'var(--color-fg-3)',
                opacity: isActive ? 1 : 0.72,
                textTransform: 'uppercase',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                fontWeight: 'inherit',
                letterSpacing: '0.04em',
                lineHeight: 1,
              }}
            >
              {option}
            </button>
          </span>
        );
      })}
    </div>
  );
}
