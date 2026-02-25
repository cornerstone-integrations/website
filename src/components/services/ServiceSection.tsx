import { Card } from '@/components/ui/Card';

type ServiceSectionProps = {
  id: string;
  title: string;
  description: string[];
  audience: string;
  deliverables: string[];
  example: string;
  reverse?: boolean;
};

export function ServiceSection({
  id,
  title,
  description,
  audience,
  deliverables,
  example,
  reverse = false,
}: ServiceSectionProps) {
  return (
    <section id={id} className={reverse ? 'bg-slate-50 py-20 scroll-mt-28' : 'bg-white py-20 scroll-mt-28'}>
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">{title}</h2>
          <div className="mt-5 space-y-4 text-slate">
            {description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-6 rounded-lg border-l-4 border-blue-accent bg-blue-50 p-4 text-sm text-slate">
            <span className="font-semibold text-navy">Who this is for: </span>
            {audience}
          </p>

          <p className="mt-6 rounded-lg border border-gray-200 bg-white p-4 text-sm italic text-slate shadow-sm">
            {example}
          </p>
        </div>

        <Card className="h-fit">
          <h3 className="text-lg font-semibold text-navy">What you get</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
