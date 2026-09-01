export type NavLink = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavLink[] };

// Labels mirror the Page Name field on each final page-build doc, so the nav
// entry and the page's H1 describe the same thing. URLs are fixed by the site map.
export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Services Overview', href: '/services/' },
      { label: 'AI Tools, Skills, and Implementation', href: '/services/ai-workflow-automation/' },
      { label: 'Systems Integration', href: '/services/systems-integration/' },
      { label: 'Technology Strategy and Implementation', href: '/services/technology-strategy-implementation/' },
      { label: 'Customer and Vendor API Connections', href: '/services/customer-api-connections/' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries/',
    children: [
      { label: 'Industries Overview', href: '/industries/' },
      { label: 'Distribution and Wholesale', href: '/industries/distribution-wholesale/' },
      { label: 'E-Commerce and Retail', href: '/industries/ecommerce-retail/' },
      { label: 'Warehousing, Logistics, and 3PL', href: '/industries/warehousing-logistics/' },
      { label: 'Manufacturing', href: '/industries/manufacturing/' },
    ],
  },
  { label: 'How It Works', href: '/how-it-works/' },
  { label: 'About', href: '/about/' },
  {
    label: 'Resources',
    href: '/resources/',
    children: [
      { label: 'Resources Overview', href: '/resources/' },
      { label: 'Insights', href: '/resources/insights/' },
      { label: 'Frequently Asked Questions', href: '/resources/faqs/' },
      { label: 'Guides', href: '/resources/guides/' },
      { label: 'Case Studies and Examples', href: '/resources/case-studies/' },
    ],
  },
];

export const footerNav: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms of Use', href: '/terms-of-use/' },
  { label: 'Accessibility Statement', href: '/accessibility/' },
  { label: 'HTML Sitemap', href: '/sitemap/' },
];
