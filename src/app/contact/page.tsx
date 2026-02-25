import type { Metadata } from 'next';
import { CalendlyEmbed } from '@/components/contact/CalendlyEmbed';
import { ContactForm } from '@/components/contact/ContactForm';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a free discovery call or send a message to Cornerstone Systems.',
  openGraph: {
    title: 'Contact | Cornerstone Systems',
    description: 'Start a conversation with Cornerstone Systems about your integration or software needs.',
    url: '/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      <section id="booking" className="bg-navy py-20 text-white scroll-mt-28">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal-accent">Contact</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Let's Talk</h1>
          <p className="mt-5 max-w-3xl text-lg text-white/85">
            Book a free 30-minute discovery call. We'll discuss your challenges and see if we can help.
          </p>

          <div className="mt-10">
            <CalendlyEmbed />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy">Or Send Us a Message</h2>
            <p className="mt-4 text-slate">Share your current systems, what is not working, and what outcome you need.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-navy">Direct Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              <li>
                Email:{' '}
                <a href={`mailto:${siteConfig.email}`} className="font-medium text-blue-accent hover:text-teal-accent">
                  {siteConfig.email}
                </a>
              </li>
              <li>Phone: {siteConfig.phone}</li>
              <li>Location: {siteConfig.location}</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
