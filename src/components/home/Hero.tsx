import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="hero-dots pointer-events-none absolute inset-0 opacity-35" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[74vh] w-full max-w-6xl flex-col justify-center px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-accent">Lancaster, PA Integration Consulting</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Your systems should work together. We make that happen.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85">
          We help manufacturers and growing businesses connect their systems, automate their processes, and build software that fits how they actually work.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact#booking">Book a Discovery Call</Button>
          <Button href="/services" variant="outline">
            See Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
