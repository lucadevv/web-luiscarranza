import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import SiteFooter from '@/components/layout/SiteFooter';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms governing the use of luiscarranza.com and services provided by Luis Carranza, LLC.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service | Luis Carranza, LLC',
    description:
      'Terms governing the use of luiscarranza.com and services provided by Luis Carranza, LLC.',
    url: 'https://luiscarranza.com/terms',
  },
};

export default function Terms() {
  return (
    <>
      <LegalPage type="terms" />
      <SiteFooter />
    </>
  );
}
