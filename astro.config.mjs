import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.cornerstoneintegrations.com',
  output: 'static',
  adapter: vercel(),
  // The Solutions section and the Professional Services industry page were dropped
  // from the site map. They only ever existed as noindex stubs, but keep the URLs
  // resolving rather than 404ing for anyone holding an old link.
  redirects: {
    '/solutions': '/services/',
    '/solutions/automate-repetitive-work': '/services/ai-workflow-automation/',
    '/solutions/ai-business-implementation': '/services/ai-workflow-automation/',
    '/solutions/automate-reporting-analysis': '/services/ai-workflow-automation/',
    '/solutions/connect-business-systems': '/services/systems-integration/',
    '/solutions/technology-roadmap': '/services/technology-strategy-implementation/',
    '/solutions/customer-api-onboarding': '/services/customer-api-connections/',
    '/industries/professional-services': '/industries/',
  },
  integrations: [tailwind(), sitemap()],
  security: {
    allowedDomains: [
      { hostname: 'cornerstoneintegrations.com' },
      { hostname: 'www.cornerstoneintegrations.com' },
      { hostname: 'staging.cornerstoneintegrations.com' },
      { hostname: '**.vercel.app' },
    ],
  },
});
