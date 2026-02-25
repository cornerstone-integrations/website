import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Cornerstone Systems was founded in Lancaster, PA to help manufacturers and growing businesses solve disconnected systems and manual processes.',
  openGraph: {
    title: 'About | Cornerstone Systems',
    description:
      'Learn the story, approach, and Lancaster roots behind Cornerstone Systems.',
    url: '/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal-accent">About</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Built on real integration experience</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy">Our Story</h2>
            <div className="mt-5 space-y-4 text-slate">
              <p>
                Cornerstone Systems was founded in Lancaster, Pennsylvania after years of hands-on experience building enterprise manufacturing integrations.
              </p>
              <p>
                We kept seeing the same pattern: strong businesses slowed down by disconnected software, brittle workflows, and too much manual reconciliation. Cornerstone exists to fix that.
              </p>
              <p>
                We have designed and delivered integrations for manufacturers across the country, and we bring that same practical rigor to every engagement, no matter the company size.
              </p>
            </div>
          </div>

          <Card className="bg-slate-50">
            <h3 className="text-lg font-semibold text-navy">Why clients choose us</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              <li>Deep manufacturing systems context</li>
              <li>Clear communication with technical and business stakeholders</li>
              <li>Delivery plans grounded in operational realities</li>
              <li>Long-term maintainability, not short-term hacks</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-navy">Our Approach</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="text-xl font-semibold text-navy">Understand First</h3>
              <p className="mt-3 text-slate">We dig into your processes before we propose a solution.</p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-navy">Build to Last</h3>
              <p className="mt-3 text-slate">We write clean, documented, maintainable code. No duct tape.</p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-navy">Stay Connected</h3>
              <p className="mt-3 text-slate">We do not disappear after go-live. Your success is our reputation.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-navy">Lancaster Roots</h2>
          <p className="mt-5 max-w-4xl text-slate">
            We are proud to be based in Lancaster, PA. We understand the pace, constraints, and values of local manufacturing and business communities, and we bring that perspective into every project.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-md bg-blue-accent px-5 py-3 text-sm font-semibold text-white hover:bg-teal-accent">
            Want to work with us?
          </Link>
        </div>
      </section>
    </>
  );
}
