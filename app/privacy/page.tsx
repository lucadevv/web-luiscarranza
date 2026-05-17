import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import SiteFooter from '@/components/layout/SiteFooter';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Luis Carranza, LLC collects, uses, and protects your data.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | Luis Carranza, LLC',
    description:
      'How Luis Carranza, LLC collects, uses, and protects your data.',
    url: 'https://luiscarranza.com/privacy',
  },
};

export default function Privacy() {
  return (
    <>
      <LegalPage type="privacy" />
      <SiteFooter />
    </>
  );
}
