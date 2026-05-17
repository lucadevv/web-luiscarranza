'use client';

import { useState, type FormEvent } from 'react';
import { useI18n } from '@/providers/I18nProvider';
import { trackEvent } from '@/lib/firebase';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const { t } = useI18n();
  const form = t.contact.form;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, website }),
      });

      if (!res.ok) {
        setStatus('error');
        trackEvent('contact_form_submit', { status: 'error', code: res.status });
        return;
      }

      setStatus('success');
      trackEvent('contact_form_submit', { status: 'success' });
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
      trackEvent('contact_form_submit', { status: 'error', code: 'network' });
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid var(--color-border-on-dark)',
    borderRadius: '12px',
    padding: '14px 16px',
    fontFamily: 'var(--font-sans)',
    fontSize: '15.5px',
    fontWeight: 400,
    letterSpacing: '-0.011em',
    color: 'var(--color-fg-on-dark)',
    outline: 'none',
    transition: 'border-color 180ms var(--ease-out-strong), background-color 180ms var(--ease-out-strong)',
  } as const;

  const labelStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.04em',
    textTransform: 'uppercase' as const,
    color: 'var(--color-fg-2-on-dark)',
    marginBottom: '8px',
    display: 'block',
  };

  if (status === 'success') {
    return (
      <div
        className="mx-auto"
        style={{
          maxWidth: '560px',
          textAlign: 'center',
          padding: 'clamp(32px, 4vw, 48px)',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid var(--color-border-on-dark)',
          borderRadius: '20px',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: '48px',
            height: '48px',
            margin: '0 auto 20px',
            borderRadius: '50%',
            background: 'var(--color-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 1.4vw, 1.1875rem)',
            fontWeight: 400,
            lineHeight: 1.5,
            color: 'var(--color-fg-on-dark)',
          }}
        >
          {form.success}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="mx-auto"
      style={{ maxWidth: '560px', width: '100%', textAlign: 'left' }}
    >
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          opacity: 0,
        }}
      />

      <div style={{ marginBottom: 'var(--space-fluid-md)' }}>
        <label htmlFor="contact-name" style={labelStyle}>
          {form.nameLabel}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={form.namePlaceholder}
          disabled={status === 'sending'}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: 'var(--space-fluid-md)' }}>
        <label htmlFor="contact-email" style={labelStyle}>
          {form.emailLabel}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={form.emailPlaceholder}
          disabled={status === 'sending'}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: 'var(--space-fluid-lg)' }}>
        <label htmlFor="contact-message" style={labelStyle}>
          {form.messageLabel}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={form.messagePlaceholder}
          disabled={status === 'sending'}
          style={{
            ...inputStyle,
            resize: 'vertical',
            minHeight: '120px',
            fontFamily: 'var(--font-sans)',
          }}
        />
      </div>

      {status === 'error' && (
        <div
          role="alert"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13.5px',
            fontWeight: 400,
            letterSpacing: '-0.005em',
            color: '#ff8a78',
            marginBottom: 'var(--space-fluid-md)',
            lineHeight: 1.5,
          }}
        >
          {form.error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-accent hover:bg-accent-hover active:scale-[0.98] transition-[transform,background-color,opacity] duration-200 ease-out-strong disabled:opacity-60"
        style={{
          width: '100%',
          fontFamily: 'var(--font-sans)',
          color: 'var(--color-fg-on-dark)',
          fontSize: '17px',
          fontWeight: 500,
          letterSpacing: '-0.014em',
          padding: '14px 22px',
          borderRadius: '999px',
          border: 'none',
          cursor: status === 'sending' ? 'wait' : 'pointer',
        }}
      >
        {status === 'sending' ? form.sending : form.send}
      </button>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '12.5px',
          fontWeight: 400,
          letterSpacing: '-0.005em',
          color: 'var(--color-fg-3)',
          marginTop: 'var(--space-fluid-md)',
          textAlign: 'center',
        }}
      >
        {form.alternative}
      </p>
    </form>
  );
}
