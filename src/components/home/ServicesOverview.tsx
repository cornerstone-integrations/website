import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { serviceCards } from '@/lib/constants';

export function ServicesOverview() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading eyebrow="Services" title="What We Do" subtitle="Practical technical leadership and implementation for teams that need systems to work as one." centered />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {serviceCards.map((service) => (
            <Card key={service.id}>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-accent/10 text-blue-accent">
                  <ServiceGlyph name={service.icon} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy">{service.title}</h3>
                  <p className="mt-2 text-slate">{service.description}</p>
                  <Link href={`/services#${service.id}`} className="mt-4 inline-flex text-sm font-semibold text-blue-accent hover:text-teal-accent">
                    Learn more
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceGlyph({ name }: { name: string }) {
  if (name === 'integration') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 7h4v4H7zM13 13h4v4h-4z" />
        <path d="M11 9h2m-2 6h2m-6-2v-2m12 2v-2" />
      </svg>
    );
  }

  if (name === 'automation') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12a9 9 0 0 1 15.5-6.2" />
        <path d="M21 12a9 9 0 0 1-15.5 6.2" />
        <path d="M18 3v4h-4M6 21v-4h4" />
      </svg>
    );
  }

  if (name === 'software') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3l7 4v5c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4Z" />
      <path d="M9 12h6M12 9v6" />
    </svg>
  );
}
