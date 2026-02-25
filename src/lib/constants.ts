export const siteConfig = {
  name: 'Cornerstone Systems',
  legalName: 'Cornerstone Systems LLC',
  url: 'https://cornerstonesystems.dev',
  description:
    'Cornerstone Systems helps manufacturers and growing businesses connect systems, automate processes, and build custom software.',
  location: 'Lancaster, PA',
  email: 'conner@cornerstonesystems.com',
  phone: 'Phone coming soon',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const serviceCards = [
  {
    id: 'systems-integration',
    title: 'Systems Integration',
    description:
      'Connect your ERP, warehouse, e-commerce, and manufacturing systems so data flows automatically.',
    icon: 'integration',
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    description:
      'Eliminate manual data entry, duplicate spreadsheets, and copy-paste workflows slowing your team down.',
    icon: 'automation',
  },
  {
    id: 'custom-software-development',
    title: 'Custom Software',
    description:
      "When off-the-shelf software doesn't fit, we build tools designed around your actual business processes.",
    icon: 'software',
  },
  {
    id: 'strategic-consulting',
    title: 'Strategic Consulting',
    description:
      "Before we write a line of code, we make sure we're solving the right problem the right way.",
    icon: 'consulting',
  },
] as const;
