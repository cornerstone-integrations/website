'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-white/10 bg-navy/95 shadow-lg backdrop-blur'
          : 'border-transparent bg-navy/75 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Cornerstone Systems home" className="shrink-0">
          <Image src="/logo-white.svg" alt="Cornerstone Systems" width={210} height={32} className="h-8 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-white/90 transition hover:text-teal-accent">
              {link.label}
            </Link>
          ))}
          <Button href="/contact#booking" className="px-4 py-2 text-sm">
            Book a Call
          </Button>
        </nav>

        <button
          type="button"
          className="rounded-md border border-white/30 p-2 text-white md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden ${isOpen ? 'max-h-96 border-t border-white/10 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-navy transition-all duration-300`}
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-3 text-sm font-medium text-white/90 transition hover:bg-white/5 hover:text-teal-accent"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact#booking" className="mt-2 w-full" variant="primary">
            Book a Discovery Call
          </Button>
        </nav>
      </div>
    </header>
  );
}
