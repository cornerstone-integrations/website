import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

export type BlogFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  published: boolean;
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

function normalizeFrontmatter(data: Record<string, unknown>): BlogFrontmatter {
  return {
    title: String(data.title || 'Untitled'),
    date: String(data.date || ''),
    description: String(data.description || ''),
    tags: Array.isArray(data.tags) ? data.tags.map((tag) => String(tag)) : [],
    published: Boolean(data.published),
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = await fs.readdir(BLOG_DIR);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, '');
        const raw = await fs.readFile(path.join(BLOG_DIR, file), 'utf-8');
        const parsed = matter(raw);

        return {
          slug,
          frontmatter: normalizeFrontmatter(parsed.data),
          content: parsed.content,
        };
      }),
  );

  return posts.sort((a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date));
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.frontmatter.published);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const raw = await fs.readFile(path.join(BLOG_DIR, `${slug}.mdx`), 'utf-8');
    const parsed = matter(raw);
    const frontmatter = normalizeFrontmatter(parsed.data);

    if (!frontmatter.published) {
      return null;
    }

    return {
      slug,
      frontmatter,
      content: parsed.content,
    };
  } catch {
    return null;
  }
}
