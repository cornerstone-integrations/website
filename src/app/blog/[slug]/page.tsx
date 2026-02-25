import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getPublishedPosts } from '@/lib/mdx';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: `/blog/${slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white py-20">
      <div className="prose prose-slate mx-auto max-w-3xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-accent">{new Date(post.frontmatter.date).toLocaleDateString()}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-navy">{post.frontmatter.title}</h1>
        <p className="text-lg text-slate">{post.frontmatter.description}</p>
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
