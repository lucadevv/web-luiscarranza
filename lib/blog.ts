import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { Language } from './i18n';

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  author?: string;
  tags?: string[];
};

export type PostSummary = PostFrontmatter & {
  slug: string;
  lang: Language;
  readingMinutes: number;
};

export type Post = PostSummary & {
  content: string;
};

const CONTENT_ROOT = path.join(process.cwd(), 'content', 'blog');

function langDir(lang: Language) {
  return path.join(CONTENT_ROOT, lang);
}

async function readMarkdown(filePath: string) {
  const raw = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  return { data: data as PostFrontmatter, content, readingMinutes: Math.max(1, Math.round(stats.minutes)) };
}

async function listFiles(dir: string) {
  try {
    const files = await fs.readdir(dir);
    return files.filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));
  } catch {
    return [];
  }
}

export async function getAllPosts(lang: Language): Promise<PostSummary[]> {
  const dir = langDir(lang);
  const files = await listFiles(dir);

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.(mdx|md)$/, '');
      const { data, readingMinutes } = await readMarkdown(path.join(dir, file));
      return {
        slug,
        lang,
        readingMinutes,
        ...data,
      } satisfies PostSummary;
    }),
  );

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string, lang: Language): Promise<Post | null> {
  const dir = langDir(lang);
  const variants = [`${slug}.mdx`, `${slug}.md`];

  for (const filename of variants) {
    try {
      const { data, content, readingMinutes } = await readMarkdown(path.join(dir, filename));
      return {
        slug,
        lang,
        readingMinutes,
        content,
        ...data,
      };
    } catch {
      continue;
    }
  }

  return null;
}

export async function getAllSlugs(): Promise<Array<{ slug: string }>> {
  const slugs = new Set<string>();
  for (const lang of ['en', 'es'] as const) {
    const files = await listFiles(langDir(lang));
    files.forEach((f) => slugs.add(f.replace(/\.(mdx|md)$/, '')));
  }
  return Array.from(slugs).map((slug) => ({ slug }));
}
