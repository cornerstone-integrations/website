import Link from 'next/link';
import Image from 'next/image';
import { navLinks, siteConfig } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image src="/logo-white.svg" alt="Cornerstone Integrations" width={230} height={36} className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-white/75">
            We help manufacturers and growing businesses connect systems, automate workflows, and build software that fits how they work.
          </p>
          <p className="mt-4 text-sm text-white/80">Built in Lancaster, PA</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-teal-accent">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.location}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">Site</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-teal-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/60">
        © 2026 {siteConfig.legalName}
      </div>
    </footer>
  );
}
