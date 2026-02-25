import { SectionHeading } from '@/components/ui/SectionHeading';

export function SocialProof() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-4xl px-6 text-center">
        <SectionHeading
          eyebrow="Trust"
          title="Built for teams that cannot afford system chaos"
          subtitle="Our work is grounded in practical execution and real operational impact."
          centered
        />

        <blockquote className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-left shadow-soft">
          <p className="text-lg italic leading-relaxed text-slate">
            "[Testimonial from first client]"
          </p>
          <footer className="mt-6 text-sm font-semibold text-navy">Name, Title, Company</footer>
        </blockquote>

        <div className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Experience with platforms like</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-charcoal/70">
            <span>SAP</span>
            <span>NetSuite</span>
            <span>Shopify</span>
            <span>QuickBooks</span>
            <span>HubSpot</span>
          </div>
        </div>
      </div>
    </section>
  );
}
