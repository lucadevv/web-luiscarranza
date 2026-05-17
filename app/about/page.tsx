import type { Metadata } from 'next';
import AboutPageClient from '@/components/about/AboutPageClient';
import SiteFooter from '@/components/layout/SiteFooter';
import { SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story of Luis Carranza, LLC — a Delaware software company engineering systems for businesses, startups, and governments. Founded by Luis Ivan Carranza Saldaña.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Luis Carranza, LLC',
    description:
      'A Delaware software company engineering systems for businesses, startups, and governments. Founded by Luis Ivan Carranza Saldaña.',
    url: `${SITE.url}/about`,
  },
};

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE.url}/about#page`,
    url: `${SITE.url}/about`,
    name: 'About — Luis Carranza, LLC',
    mainEntity: { '@id': `${SITE.url}#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutPageClient />
      <SiteFooter />
    </>
  );
}
