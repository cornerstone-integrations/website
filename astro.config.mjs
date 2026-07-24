import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.cornerstoneintegrations.com',
  output: 'static',
  adapter: vercel(),
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
