import type { Metadata } from 'next';
import ContactPageClient from '@/components/contact/ContactPageClient';
import SiteFooter from '@/components/layout/SiteFooter';
import { SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Luis Carranza, LLC — a Delaware-registered software company. Email, legal address, and direct project inquiry form.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Luis Carranza, LLC',
    description:
      'Get in touch with Luis Carranza, LLC. Email, legal address, and direct inquiry form.',
    url: `${SITE.url}/contact`,
  },
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE.url}/contact#page`,
    url: `${SITE.url}/contact`,
    name: 'Contact — Luis Carranza, LLC',
    mainEntity: { '@id': `${SITE.url}#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactPageClient />
      <SiteFooter />
    </>
  );
}
