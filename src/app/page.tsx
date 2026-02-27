import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { SocialProof } from '@/components/home/SocialProof';
import { BottomCTA } from '@/components/home/BottomCTA';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Cornerstone Integrations helps manufacturers and growing businesses connect systems, automate workflows, and build custom software.',
  openGraph: {
    title: 'Cornerstone Integrations | Systems Integration & Custom Development',
    description:
      'Stop losing time to disconnected systems. We help manufacturers connect platforms, automate operations, and build custom software.',
    url: '/',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  areaServed: 'United States',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lancaster',
    addressRegion: 'PA',
    addressCountry: 'US',
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <Hero />
      <ServicesOverview />
      <SocialProof />
      <BottomCTA />
    </>
  );
}
