export function CalendlyEmbed() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/placeholder/discovery-call';

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-soft">
      <iframe
        src={calendlyUrl}
        title="Book a discovery call"
        className="h-[720px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
