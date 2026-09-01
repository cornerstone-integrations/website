import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared building blocks. Every service/industry/resource page follows the same
// "Standard Standalone Page Template" from the master build doc:
// Page Setup (SEO) -> Hero -> flexible content sections -> Final CTA -> internal links.

const ctaSchema = z.object({
  text: z.string(),
  link: z.string(),
});

const itemSchema = z.object({
  heading: z.string(),
  body: z.string(),
});

// A generic content section. `layout` picks the rendering:
//   cards / grid / steps -> driven by `items` (heading + body)
//   checklist            -> driven by `bullets` (flat strings)
//   feature              -> long-form: intro paragraphs, then `bullets`, then `outro`
// `intro` and `outro` are arrays because the final page docs run several
// paragraphs before and after the bullet list in the deeper industry sections.
const sectionSchema = z.object({
  heading: z.string(),
  intro: z.array(z.string()).default([]),
  layout: z.enum(['checklist', 'cards', 'steps', 'grid', 'feature']).default('cards'),
  items: z.array(itemSchema).default([]),
  /** Lead-in line above the bullet list, e.g. "This may include integrations between:" */
  bulletsIntro: z.string().optional(),
  bullets: z.array(z.string()).default([]),
  outro: z.array(z.string()).default([]),
});

const internalLinkSchema = z.object({
  text: z.string(),
  link: z.string(),
});

const pageFields = {
  // Page Setup
  title: z.string(), // H1
  seoTitle: z.string(),
  metaDescription: z.string(),
  heroImageAlt: z.string(),
  navLabel: z.string(), // short label for nav menus / overview cards
  summary: z.string(), // card summary used on overview/index pages
  /** Exact button label the page-build doc specifies on the overview-page card. */
  cardCtaText: z.string().optional(),

  // Hero
  heroParagraphs: z.array(z.string()),
  heroCta: ctaSchema.default({ text: 'Schedule a Free Consultation', link: '/contact/' }),

  // Flexible body sections (problems solved, use cases, systems connected,
  // what's included, business outcomes, etc.)
  sections: z.array(sectionSchema).default([]),

  // Final CTA
  finalCtaHeading: z.string(),
  finalCtaBody: z.string(),
  primaryCta: ctaSchema.default({ text: 'Schedule a Free Consultation', link: '/contact/' }),
  secondaryCta: ctaSchema.optional(),

  internalLinks: z.array(internalLinkSchema).default([]),

  order: z.number().default(0),
  draft: z.boolean().default(false), // true = stub/placeholder page pending final copy
};

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object(pageFields),
});

const industries = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/industries' }),
  schema: z.object({
    ...pageFields,
    // "Common focus areas include:" bullets shown on the Industries Overview card.
    focusAreas: z.array(z.string()).default([]),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    ...pageFields,
    category: z.enum(['insights', 'faqs', 'guides']),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: z.object(pageFields),
});

export const collections = { services, industries, resources, 'case-studies': caseStudies };
