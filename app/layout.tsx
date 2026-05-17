import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { I18nProvider } from '@/providers/I18nProvider';
import CookieBanner from '@/components/ui/CookieBanner';
import './globals.css';

const siteDescription =
  'Delaware-registered software company building digital solutions for enterprises, startups, and governments worldwide.';

export const metadata: Metadata = {
  metadataBase: new URL('https://luiscarranza.com'),
  title: {
    default: 'Luis Carranza, LLC',
    template: '%s | Luis Carranza, LLC',
  },
  description: siteDescription,
  keywords: [
    'software development',
    'Delaware LLC',
    'Next.js',
    'cloud architecture',
    'AI',
    'SaaS',
    'enterprise software',
    'digital transformation',
    'product engineering',
  ],
  authors: [{ name: 'Luis Ivan Carranza Saldaña' }],
  creator: 'Luis Carranza, LLC',
  publisher: 'Luis Carranza, LLC',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luiscarranza.com',
    siteName: 'Luis Carranza, LLC',
    title: 'Luis Carranza, LLC',
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luis Carranza, LLC',
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'es-419': '/',
      'x-default': '/',
    },
  },
  category: 'technology',
  applicationName: 'Luis Carranza, LLC',
  referrer: 'origin-when-cross-origin',
  verification: {
    // Add these after registering in Search Console / Bing Webmaster
    // google: 'your-google-verification-code',
    // other: { 'msvalidate.01': 'your-bing-verification-code' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://firebaseinstallations.googleapis.com" />
      </head>
      <body>
        <a href="#hero" className="skip-link">
          Skip to content
        </a>
        <I18nProvider>
          {children}
          <CookieBanner />
        </I18nProvider>
        <div aria-hidden="true" className="grain-overlay" />
      </body>
    </html>
  );
}
