import { Button } from '@/components/ui/Button';

type BottomCTAProps = {
  headline?: string;
  subheadline?: string;
};

export function BottomCTA({
  headline = 'Ready to connect your systems?',
  subheadline = "Book a free discovery call. We'll talk through your challenges and see if we're a good fit.",
}: BottomCTAProps) {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto w-full max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{headline}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">{subheadline}</p>
        <Button href="/contact#booking" className="mt-8">
          Book a Discovery Call
        </Button>
      </div>
    </section>
  );
}
