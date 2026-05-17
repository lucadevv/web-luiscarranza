import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteFooter from '@/components/layout/SiteFooter';
import PostHeaderClient from '@/components/blog/PostHeaderClient';
import PostBody from '@/components/blog/PostBody';
import { getAllSlugs, getPost } from '@/lib/blog';
import { SITE } from '@/lib/seo';

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = (await getPost(slug, 'en')) ?? (await getPost(slug, 'es'));
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE.url}/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPost({ params }: Params) {
  const { slug } = await params;

  // Try English first; fallback to Spanish if not present
  const post = (await getPost(slug, 'en')) ?? (await getPost(slug, 'es'));
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author ?? SITE.founder.name,
    },
    publisher: { '@id': `${SITE.url}#organization` },
    mainEntityOfPage: `${SITE.url}/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PostHeaderClient
        title={post.title}
        description={post.description}
        date={post.date}
        readingMinutes={post.readingMinutes}
        author={post.author}
      />
      <article
        className="w-full"
        style={{
          background: 'var(--color-bg)',
          color: 'var(--color-fg)',
          paddingTop: 'clamp(24px, 3vw, 40px)',
          paddingBottom: 'clamp(80px, 12vw, 160px)',
          paddingInline: 'clamp(24px, 5vw, 120px)',
        }}
      >
        <div className="mx-auto max-w-[760px]">
          <PostBody content={post.content} />
        </div>
      </article>
      <SiteFooter />
    </>
  );
}
