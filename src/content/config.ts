import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared building blocks. Every service/solution/industry/resource page follows the
// same "Standard Standalone Page Template" from the master build doc:
// Page Setup (SEO) -> Hero -> flexible content sections -> Final CTA -> internal links.

const ctaSchema = z.object({
  text: z.string(),
  link: z.string(),
});

const itemSchema = z.object({
  heading: z.string(),
  body: z.string(),
});

// A generic content section: a heading/intro plus a list of items, rendered as a
// checklist, card grid, or numbered process depending on `layout`.
const sectionSchema = z.object({
  heading: z.string(),
  intro: z.string().optional(),
  layout: z.enum(['checklist', 'cards', 'steps', 'grid']).default('cards'),
  items: z.array(itemSchema),
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
  summary: z.string(), // 1-2 sentence card summary used on overview/index pages

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

const solutions = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/solutions' }),
  schema: z.object({ ...pageFields, relatedService: z.string().optional() }),
});

const industries = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/industries' }),
  schema: z.object(pageFields),
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

export const collections = { services, solutions, industries, resources, 'case-studies': caseStudies };
