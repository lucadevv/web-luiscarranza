'use client';

import { useI18n } from '@/providers/I18nProvider';
import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/components/ui/ContactForm';

export default function Contact() {
  const { t } = useI18n();
  const { contact } = t;

  return (
    <section
      id="contact"
      style={{
        background: 'var(--color-bg-dark)',
        color: 'var(--color-fg-on-dark)',
        paddingTop: 'clamp(120px, 16vw, 200px)',
        paddingBottom: 'clamp(120px, 16vw, 200px)',
      }}
    >
      <div
        className="w-full text-center"
        style={{ paddingInline: 'clamp(24px, 5vw, 120px)' }}
      >
        <Reveal>
          <h2
            className="mx-auto mb-6 max-[640px]:mb-4"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(3rem, 9vw, 7.5rem)',
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: '-0.045em',
              color: 'var(--color-fg-on-dark)',
              maxWidth: '900px',
            }}
          >
            {contact.headline}
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p
            className="mx-auto max-[640px]:mb-8"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.0625rem, 1.7vw, 1.375rem)',
              fontWeight: 400,
              lineHeight: 1.42,
              letterSpacing: '-0.012em',
              color: 'var(--color-fg-2-on-dark)',
              maxWidth: '560px',
              marginBottom: 'clamp(2.75rem, 5vw, 4.5rem)',
            }}
          >
            {contact.subtitle}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
