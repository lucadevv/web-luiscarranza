import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      className="relative flex items-center justify-center"
      style={{
        background: 'var(--color-bg)',
        color: 'var(--color-fg)',
        minHeight: '100svh',
        paddingInline: 'clamp(24px, 5vw, 120px)',
      }}
    >
      <div className="w-full max-w-[720px] text-center">
        <div
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(5rem, 14vw, 11rem)',
            fontWeight: 600,
            lineHeight: 0.9,
            letterSpacing: '-0.05em',
            color: 'var(--color-fg-3)',
            marginBottom: 'var(--space-fluid-md)',
          }}
        >
          404
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'var(--color-fg)',
            marginBottom: 'var(--space-fluid-md)',
          }}
        >
          Page not found.
        </h1>

        <p
          className="mx-auto"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 1.4vw, 1.1875rem)',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-0.011em',
            color: 'var(--color-fg-2)',
            maxWidth: '480px',
            marginBottom: 'var(--space-fluid-xl)',
          }}
        >
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full no-underline whitespace-nowrap bg-accent hover:bg-accent-hover active:scale-[0.98] transition-[transform,background-color] duration-200 ease-out-strong"
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-fg-on-dark)',
            fontSize: '17px',
            fontWeight: 400,
            padding: '11px 22px',
          }}
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
