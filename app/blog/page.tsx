import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import BlogIndexClient from '@/components/blog/BlogIndexClient';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Notes on software craft, engineering practice, and building digital systems at Luis Carranza, LLC.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Luis Carranza, LLC',
    description:
      'Notes on software craft, engineering practice, and building digital systems.',
    url: 'https://luiscarranza.com/blog',
  },
};

export default async function BlogIndex() {
  const [enPosts, esPosts] = await Promise.all([
    getAllPosts('en'),
    getAllPosts('es'),
  ]);

  return (
    <>
      <BlogIndexClient postsByLang={{ en: enPosts, es: esPosts }} />
      <SiteFooter />
    </>
  );
}
