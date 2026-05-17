'use client';

import Link from 'next/link';
import LCMark from '@/components/ui/LCMark';
import { useI18n } from '@/providers/I18nProvider';
import type { PostSummary } from '@/lib/blog';

type Props = {
  postsByLang: Record<'en' | 'es', PostSummary[]>;
};

export default function BlogIndexClient({ postsByLang }: Props) {
  const { lang } = useI18n();
  const posts = postsByLang[lang];

  const labels = {
    en: {
      eyebrow: 'Blog',
      headline: 'Notes on software craft.',
      empty: 'No posts yet. Soon.',
      readingTime: (m: number) => `${m} min read`,
      back: 'Back to home',
    },
    es: {
      eyebrow: 'Blog',
      headline: 'Notas sobre el oficio del software.',
      empty: 'Aún no hay publicaciones. Pronto.',
      readingTime: (m: number) => `${m} min de lectura`,
      back: 'Volver al inicio',
    },
  }[lang];

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString(lang === 'es' ? 'es-419' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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
            aria-label={labels.back}
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
            {labels.back}
          </Link>
        </nav>
      </header>

      <main
        className="w-full"
        style={{
          background: 'var(--color-bg)',
          color: 'var(--color-fg)',
          paddingTop: 'clamp(64px, 9vw, 120px)',
          paddingBottom: 'clamp(80px, 12vw, 160px)',
          paddingInline: 'clamp(24px, 5vw, 120px)',
          minHeight: '60vh',
        }}
      >
        <div className="mx-auto max-w-[820px]">
          <header
            style={{
              marginBottom: 'var(--space-fluid-2xl)',
              textAlign: 'center',
            }}
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
              {labels.eyebrow}
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                color: 'var(--color-fg)',
              }}
            >
              {labels.headline}
            </h1>
          </header>

          {posts.length === 0 ? (
            <p
              className="text-center"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.4vw, 1.1875rem)',
                color: 'var(--color-fg-2)',
              }}
            >
              {labels.empty}
            </p>
          ) : (
            <ul className="list-none flex flex-col">
              {posts.map((post, index) => (
                <li
                  key={post.slug}
                  style={{
                    borderTop: index === 0 ? '1px solid var(--color-border)' : 'none',
                    borderBottom: '1px solid var(--color-border)',
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block no-underline hover:opacity-80 transition-opacity duration-150 ease-out-strong"
                    style={{
                      paddingTop: 'clamp(28px, 3.5vw, 40px)',
                      paddingBottom: 'clamp(28px, 3.5vw, 40px)',
                      color: 'inherit',
                    }}
                  >
                    <div
                      className="flex items-center gap-3 flex-wrap"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '12.5px',
                        fontWeight: 500,
                        letterSpacing: '-0.005em',
                        color: 'var(--color-fg-3)',
                        marginBottom: '10px',
                      }}
                    >
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{labels.readingTime(post.readingMinutes)}</span>
                    </div>
                    <h2
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'clamp(1.5rem, 2.6vw, 2.125rem)',
                        fontWeight: 600,
                        lineHeight: 1.15,
                        letterSpacing: '-0.025em',
                        color: 'var(--color-fg)',
                        marginBottom: '10px',
                      }}
                    >
                      {post.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'clamp(0.9375rem, 1.3vw, 1.0625rem)',
                        lineHeight: 1.55,
                        letterSpacing: '-0.008em',
                        color: 'var(--color-fg-2)',
                      }}
                    >
                      {post.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}
