# Cornerstone Systems — Website Spec v1

## Overview
Professional business website for Cornerstone Systems, a Lancaster PA-based integration consulting and custom development firm targeting small/mid manufacturers and e-commerce companies.

**Repo:** `~/workspace/cornerstone-website` (new Next.js project, separate from mission-control-next)
**Stack:** Next.js 15 (App Router), Tailwind CSS, TypeScript, MDX (for future blog)
**Hosting:** Vercel (free tier)
**Domain:** TBD — `cornerstonesystems.com` (pending acquisition) or `cornerstonesystems.dev` (backup)

---

## Brand Identity

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `navy` | `#0F1B2D` | Primary background, headers, footer |
| `charcoal` | `#1E293B` | Secondary dark backgrounds, card surfaces |
| `slate` | `#475569` | Body text on light backgrounds |
| `blue-accent` | `#2563EB` | Primary CTA buttons, links, highlights |
| `teal-accent` | `#0EA5E9` | Secondary accent, gradients, hover states |
| `white` | `#FFFFFF` | Primary light background |
| `gray-50` | `#F8FAFC` | Alternating section backgrounds |
| `gray-200` | `#E2E8F0` | Borders, dividers |
| `amber` | `#F59E0B` | Subtle warm accent (sparingly — trust badges, stars) |

### Typography
- **Headings:** Inter (bold/semibold) — clean, modern, highly legible
- **Body:** Inter (regular) — consistent, professional
- **Code/tech accents:** JetBrains Mono (for any technical elements, subtle tech cred)
- **Scale:** Tailwind default type scale, generous line-height for readability

### Logo Direction
**Concept:** Abstract cornerstone / keystone shape — a geometric block element that suggests both "foundation" and "connection." 

Options to explore:
1. **Geometric block mark** — stylized cornerstone shape (L-shaped or angular block) with clean lines. Could incorporate subtle connection/integration visual (two blocks interlocking).
2. **Monogram** — "CS" lettermark in a strong geometric style, possibly within or beside a cornerstone shape.
3. **Wordmark-forward** — "CORNERSTONE" in a strong sans-serif with "SYSTEMS" beneath in lighter weight. Standalone wordmark with no icon.

**Style:** Flat, minimal, no gradients in the logo itself. Must work at small sizes (favicon) and large (hero). Navy + blue-accent as primary logo colors, with single-color (white or navy) variants.

**For v1 launch:** Use a clean wordmark (option 3) — fast to implement, always professional. Icon/mark can be designed properly later.

### Voice & Tone
- "We" language throughout (present as a firm)
- Confident but not arrogant
- Plain English — no jargon (audience is business owners, not engineers)
- Short sentences, active voice
- Outcome-focused: what changes for the client, not what tech you use

---

## Site Structure

```
/ .......................... Home (hero + services + proof + CTA)
/services .................. Services (expanded detail)
/about ..................... About (story, values, Lancaster roots)
/contact ................... Contact (form + Calendly embed)
/blog ...................... Blog (hidden at launch, placeholder route)
```

---

## Page Specs

### HOME (`/`)

**Purpose:** Pass the 10-second credibility test. Visitor thinks: "These people are legit, I should talk to them."

#### Hero Section
- **Layout:** Full-width, dark navy background with subtle gradient or geometric pattern
- **Headline:** Large, bold, one line. Pain-point driven.
  - Draft: `"Your systems should work together. We make that happen."`
  - Alt: `"Stop losing time to disconnected systems."`
- **Subheadline:** One sentence, outcome-focused.
  - Draft: `"We help manufacturers and growing businesses connect their systems, automate their processes, and build software that fits how they actually work."`
- **CTA buttons:**
  - Primary: `"Book a Discovery Call"` → links to /contact#booking
  - Secondary (outline): `"See Our Services"` → links to /services
- **Background visual:** Subtle animated grid/node pattern (think: connected dots/lines — represents integration). CSS/canvas only, no heavy assets. Keep it understated — tech pizzazz without being distracting.

#### Services Overview Section
- **Layout:** Light background (`gray-50`), 3-4 cards in a grid
- **Section headline:** `"What We Do"`
- **Cards (icon + title + one-liner + link):**

  1. **Systems Integration**
     - Icon: puzzle pieces connecting (or two arrows merging)
     - `"Connect your ERP, warehouse, e-commerce, and manufacturing systems so data flows automatically."`

  2. **Process Automation**
     - Icon: circular arrows / gear
     - `"Eliminate the manual data entry, duplicate spreadsheets, and copy-paste workflows slowing your team down."`

  3. **Custom Software**
     - Icon: code brackets or terminal
     - `"When off-the-shelf software doesn't fit, we build tools designed around your actual business processes."`

  4. **Strategic Consulting**
     - Icon: compass or map pin
     - `"Before we write a line of code, we make sure we're solving the right problem the right way."`

- Each card links to `/services#<service-slug>` for expanded detail.

#### Social Proof / Trust Section
- **Layout:** White background, centered
- **Content:**
  - Testimonial quote (placeholder for now): `"[Testimonial from first client]"` — Name, Title, Company
  - Optional: Small row of industry/tech logos (e.g., "We work with:" — icons for common manufacturing systems: SAP, NetSuite, Shopify, QuickBooks, etc.). Only include logos for systems Conner has actual experience with.

#### Bottom CTA Section
- **Layout:** Navy background, centered text
- **Headline:** `"Ready to connect your systems?"`
- **Subheadline:** `"Book a free discovery call. We'll talk through your challenges and see if we're a good fit."`
- **CTA button:** `"Book a Discovery Call"` → /contact#booking

#### Footer
- **Layout:** Dark charcoal background
- **Content:**
  - Logo (wordmark, white variant)
  - Contact: email, phone (once set up)
  - Location: `"Lancaster, PA"`
  - Links: Home, Services, About, Contact
  - `"© 2026 Cornerstone Systems LLC"`
  - Small: `"Built in Lancaster, PA"` (local trust signal)

---

### SERVICES (`/services`)

**Purpose:** Give enough detail for someone considering hiring you to understand what you actually do and feel confident you know what you're talking about.

**Layout:** Each service gets a full section with alternating backgrounds (white / gray-50).

For each service:
- **Anchor ID** for deep linking from home cards
- **Title + icon** (same as home cards)
- **Expanded description** (2-3 paragraphs, plain English)
- **"Who this is for"** — one sentence identifying the specific persona
- **"What you get"** — bullet list of concrete deliverables
- **Example scenario** (optional, adds credibility): `"A manufacturer running SAP and a separate warehouse system needed real-time inventory sync. We built a middleware layer that eliminated 15 hours of weekly manual reconciliation."`

#### Service Sections:

**1. Systems Integration**
- Connect ERP, MES, WMS, e-commerce, QMS, CRM — any combination
- Audience: manufacturers and e-commerce companies running 3+ disconnected systems
- Deliverables: integration architecture, API development, data mapping, testing, go-live support, documentation
- Key message: "We've seen the inside of enterprise manufacturing systems. We know where the data lives and how to move it safely."

**2. Process Automation**
- Identify and eliminate manual workflows
- Audience: operations teams drowning in spreadsheets and manual data entry
- Deliverables: workflow analysis, automation design, implementation, training
- Key message: "If your team is copying data between systems, there's a better way."

**3. Custom Software Development**
- Build internal tools, dashboards, portals, apps
- Audience: companies that have outgrown spreadsheets but can't find off-the-shelf software that fits
- Deliverables: requirements, design, development, deployment, ongoing support
- Key message: "Software that fits your process — not the other way around."

**4. Strategic Consulting**
- Technology assessment, integration planning, vendor evaluation
- Audience: companies about to make a big technology decision
- Deliverables: assessment report, integration roadmap, vendor comparison, implementation plan
- Key message: "Get it right the first time. A few days of planning saves months of rework."

**Bottom CTA:** Same as home page bottom CTA.

---

### ABOUT (`/about`)

**Purpose:** Build trust. Show there are real humans behind the name, with real experience and local roots.

**Sections:**

1. **Our Story**
   - Short narrative: Founded in Lancaster, PA. Born from years of experience in enterprise manufacturing software. We saw too many companies struggling with disconnected systems and manual processes. Cornerstone Systems exists to fix that.
   - Mention: experience designing and building integrations for manufacturers across the country.
   - Tone: grounded, confident, not grandiose.

2. **Our Approach**
   - 3 values or principles, presented as cards or columns:
     - **Understand First** — "We dig into your processes before we propose a solution."
     - **Build to Last** — "We write clean, documented, maintainable code. No duct tape."
     - **Stay Connected** — "We don't disappear after go-live. Your success is our reputation."

3. **Lancaster Roots** (optional, but strong for local trust)
   - Short paragraph about being Lancaster-based, supporting local businesses, understanding the local manufacturing and business community.
   - This is a differentiator vs. big consulting firms or offshore shops.

4. **CTA:** `"Want to work with us?"` → /contact

---

### CONTACT (`/contact`)

**Purpose:** Make it dead simple to get in touch. Two paths: book a call (preferred) or fill out a form.

**Layout:**

1. **Section: Book a Discovery Call** (`#booking`)
   - Headline: `"Let's Talk"`
   - Subheadline: `"Book a free 30-minute discovery call. We'll discuss your challenges and see if we can help."`
   - **Calendly embed** (inline, not popup) — full width
   - Calendly account TBD — will need to be set up

2. **Section: Or Send Us a Message**
   - Simple form:
     - Name (required)
     - Email (required)
     - Company (optional)
     - Phone (optional)
     - Message (required, textarea)
     - Submit button: `"Send Message"`
   - **Form submission:** POST to API route → sends email notification AND creates lead in Mission Control CRM (future integration, for now just email via Resend or similar)
   - Success state: `"Thanks! We'll get back to you within one business day."`

3. **Direct Contact Info** (below form)
   - Email: TBD (conner@cornerstonesystems.com or similar)
   - Phone: TBD (optional at launch)
   - Location: Lancaster, PA

---

### BLOG (`/blog`) — Hidden at Launch

**Setup only, no content yet:**
- MDX-based blog system (next-mdx-remote or @next/mdx)
- Blog posts as `.mdx` files in `content/blog/`
- Frontmatter: title, date, description, tags, published (boolean)
- List page: `/blog` — shows published posts, newest first
- Post page: `/blog/[slug]` — renders MDX content
- Layout: clean reading experience, max-width prose container
- Route exists but hidden from nav until first post is published
- Add `published: false` filtering so drafts don't appear

---

## Technical Spec

### Project Setup
```bash
npx create-next-app@latest cornerstone-website \
  --typescript --tailwind --app --src-dir --eslint
```

### Directory Structure
```
cornerstone-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (nav + footer)
│   │   ├── page.tsx            # Home
│   │   ├── services/
│   │   │   └── page.tsx        # Services
│   │   ├── about/
│   │   │   └── page.tsx        # About
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact
│   │   │   └── actions.ts      # Server action for form submission
│   │   └── blog/
│   │       ├── page.tsx        # Blog list
│   │       └── [slug]/
│   │           └── page.tsx    # Blog post
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Top navigation
│   │   │   └── Footer.tsx      # Footer
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── SocialProof.tsx
│   │   │   └── BottomCTA.tsx
│   │   ├── services/
│   │   │   └── ServiceSection.tsx
│   │   ├── contact/
│   │   │   ├── ContactForm.tsx
│   │   │   └── CalendlyEmbed.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── SectionHeading.tsx
│   ├── content/
│   │   └── blog/              # MDX blog posts go here
│   └── lib/
│       ├── constants.ts       # Brand colors, company info, nav links
│       └── mdx.ts             # MDX utilities
├── public/
│   ├── logo.svg               # Wordmark logo
│   ├── logo-white.svg         # White variant
│   └── og-image.png           # Social sharing image
├── tailwind.config.ts         # Custom colors, fonts
└── package.json
```

### Tailwind Config (custom theme)
```ts
// tailwind.config.ts — extend with brand colors
{
  theme: {
    extend: {
      colors: {
        navy: '#0F1B2D',
        charcoal: '#1E293B',
        'blue-accent': '#2563EB',
        'teal-accent': '#0EA5E9',
        amber: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
}
```

### Key Technical Details

**Navbar:**
- Sticky, transparent on hero → solid navy on scroll (scroll-triggered class change)
- Logo (wordmark) left, nav links right, "Book a Call" CTA button (blue-accent) far right
- Mobile: hamburger menu, slide-in drawer
- Links: Home, Services, About, Contact

**Hero animated background:**
- Subtle CSS grid/dot pattern with gentle animation (CSS `@keyframes` or lightweight canvas)
- Do NOT use heavy JS animation libraries (no Three.js, no Framer Motion for this)
- Keep it performant — decorative only, not interactive

**Contact form:**
- Server action in `contact/actions.ts`
- For now: log submission to console + return success (email integration added later)
- Basic validation (required fields)
- Honeypot field for spam prevention (hidden field, reject if filled)

**SEO:**
- Metadata in each page's `export const metadata`
- `title`, `description`, `openGraph` for every page
- `robots.txt` and `sitemap.xml` via Next.js built-in
- JSON-LD structured data for LocalBusiness schema on home page

**Performance targets:**
- Lighthouse: 95+ on all metrics
- No external JS dependencies beyond Next.js essentials
- Fonts: self-hosted (no Google Fonts CDN calls)
- Images: next/image with proper sizing

**Deployment:**
- Vercel (connect GitHub repo)
- Environment variables: `NEXT_PUBLIC_CALENDLY_URL` (placeholder until account created)
- No database needed for v1

---

## What's NOT in v1
- Blog content (infrastructure only)
- Client portal / login
- Mission Control CRM integration for contact form (just logs for now)
- Case studies page (content pending)
- Analytics (add Plausible or Vercel Analytics post-launch)
- Email sending from contact form (add Resend later)

---

## Launch Checklist (Post-Build)
- [ ] Domain purchased and pointed to Vercel
- [ ] Calendly account created and URL set
- [ ] Business email set up (conner@domain)
- [ ] Logo finalized (even if wordmark-only)
- [ ] Testimonial text received from brother-in-law
- [ ] Contact form email integration live
- [ ] Google Business Profile created
- [ ] Social sharing image (og-image) designed
- [ ] Final copy review by Conner
- [ ] Mobile responsive check on real devices
