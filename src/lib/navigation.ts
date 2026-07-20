export type NavLink = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavLink[] };

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Services Overview', href: '/services/' },
      { label: 'AI Workflow Automation', href: '/services/ai-workflow-automation/' },
      { label: 'Systems Integration', href: '/services/systems-integration/' },
      { label: 'Technology Strategy and Implementation', href: '/services/technology-strategy-implementation/' },
      { label: 'Customer API Connections', href: '/services/customer-api-connections/' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions/',
    children: [
      { label: 'Solutions Overview', href: '/solutions/' },
      { label: 'Automate Repetitive Work and Reduce Administrative Labor', href: '/solutions/automate-repetitive-work/' },
      { label: 'Implement AI in Business Operations', href: '/solutions/ai-business-implementation/' },
      { label: 'Connect Disconnected Business Systems', href: '/solutions/connect-business-systems/' },
      { label: 'Automate Reporting and Routine Analysis', href: '/solutions/automate-reporting-analysis/' },
      { label: 'Build a Technology Roadmap', href: '/solutions/technology-roadmap/' },
      { label: 'Scale Customer API Onboarding', href: '/solutions/customer-api-onboarding/' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries/',
    children: [
      { label: 'Industries Overview', href: '/industries/' },
      { label: 'Distribution and Wholesale', href: '/industries/distribution-wholesale/' },
      { label: 'E-Commerce and Retail', href: '/industries/ecommerce-retail/' },
      { label: 'Warehousing and Logistics', href: '/industries/warehousing-logistics/' },
      { label: 'Manufacturing', href: '/industries/manufacturing/' },
      { label: 'Professional Services', href: '/industries/professional-services/' },
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
