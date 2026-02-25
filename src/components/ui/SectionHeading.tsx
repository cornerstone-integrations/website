type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-accent">{eyebrow}</p> : null}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-lg leading-relaxed text-slate">{subtitle}</p> : null}
    </div>
  );
}
