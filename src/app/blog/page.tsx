import type { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on systems integration, process automation, and practical software delivery.',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-4xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-accent">Blog</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy">Insights and field notes</h1>
        <p className="mt-4 text-slate">This section is ready, but intentionally hidden at launch until the first published article is live.</p>

        <div className="mt-10 space-y-6">
          {posts.length === 0 ? (
            <div className="rounded-xl border border-gray-200 bg-slate-50 p-6 text-slate">
              No published posts yet.
            </div>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="rounded-xl border border-gray-200 p-6">
                <p className="text-xs font-mono uppercase tracking-wide text-blue-accent">{new Date(post.frontmatter.date).toLocaleDateString()}</p>
                <h2 className="mt-2 text-2xl font-semibold text-navy">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-accent">
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <p className="mt-3 text-slate">{post.frontmatter.description}</p>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
