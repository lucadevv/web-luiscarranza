'use client';

import Link from 'next/link';
import LCMark from '@/components/ui/LCMark';
import { useI18n } from '@/providers/I18nProvider';

type Props = {
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  author?: string;
};

export default function PostHeaderClient({
  title,
  description,
  date,
  readingMinutes,
  author,
}: Props) {
  const { lang } = useI18n();

  const labels = {
    en: {
      back: 'All posts',
      readingTime: (m: number) => `${m} min read`,
    },
    es: {
      back: 'Todas las publicaciones',
      readingTime: (m: number) => `${m} min de lectura`,
    },
  }[lang];

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(lang === 'es' ? 'es-419' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

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
            className="inline-flex items-center no-underline hover:opacity-70 transition-opacity duration-150 ease-out-strong"
            style={{ color: 'var(--color-fg)' }}
          >
            <LCMark title="Luis Carranza, LLC" style={{ width: '36px', height: 'auto' }} />
          </Link>
          <Link
            href="/blog"
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
            {labels.back}
          </Link>
        </nav>
      </header>

      <section
        className="w-full"
        style={{
          background: 'var(--color-bg)',
          paddingTop: 'clamp(64px, 9vw, 120px)',
          paddingBottom: 'clamp(40px, 5vw, 64px)',
          paddingInline: 'clamp(24px, 5vw, 120px)',
        }}
      >
        <div className="mx-auto max-w-[760px]">
          <div
            className="flex items-center gap-3 flex-wrap"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '-0.005em',
              color: 'var(--color-fg-3)',
              marginBottom: 'var(--space-fluid-md)',
            }}
          >
            <time dateTime={date}>{formatDate(date)}</time>
            <span aria-hidden="true">·</span>
            <span>{labels.readingTime(readingMinutes)}</span>
            {author && (
              <>
                <span aria-hidden="true">·</span>
                <span>{author}</span>
              </>
            )}
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: 'var(--color-fg)',
              marginBottom: 'var(--space-fluid-md)',
              textWrap: 'balance',
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)',
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: '-0.012em',
              color: 'var(--color-fg-2)',
            }}
          >
            {description}
          </p>
        </div>
      </section>
    </>
  );
}
