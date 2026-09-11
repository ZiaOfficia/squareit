# Squareit Solutions — Website (Next.js)

Phase 1: the complete front end for squareit.in — design system, all public routes and the full SEO layer. Content is served from a typed content layer under `src/content/` so that Phase 2 (database, blog CMS, admin panel) can replace the data source without touching a single page component.

---

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — the site runs without it
npm run dev                  # http://localhost:3000
```

```bash
npm run build && npm run start   # production build
npm run lint                     # eslint
npm run typecheck                # tsc --noEmit
```

Requires Node 18.18+ (Node 20 or 22 recommended). The first `npm install` and `npm run build` need internet access — `next/font` downloads Archivo, Plus Jakarta Sans and Caveat at build time and self-hosts them afterwards.

---

## Stack

| Concern | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 15, App Router | Server components + static generation = crawlable HTML and fast LCP |
| Language | TypeScript (strict) | Content shapes are typed, so a bad field fails at build |
| Styling | Tailwind CSS v4 | Design tokens live in `globals.css` under `@theme` |
| Fonts | `next/font/google`, self-hosted | No render-blocking font request, no CLS |
| Structured data | Hand-rolled builders in `src/lib/seo.ts` | One place to validate every schema |

---

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx              Root layout, fonts, global JSON-LD, analytics
│  ├─ page.tsx                Homepage
│  ├─ globals.css             Design tokens + base styles
│  ├─ sitemap.ts              /sitemap.xml, generated from the content layer
│  ├─ robots.ts               /robots.txt
│  ├─ not-found.tsx           404
│  ├─ actions/contact.ts      Server action for the enquiry form
│  ├─ api/og/route.tsx        Dynamic Open Graph image
│  ├─ about/                  /about, /about/vision-mission, /about/team
│  ├─ services/               /services, /services/[slug]
│  ├─ portfolio/              /portfolio, /portfolio/[slug]
│  ├─ case-studies/           /case-studies, /case-studies/[slug]
│  ├─ blog/                   /blog, /blog/[slug], /blog/category/[slug]
│  ├─ career/                 /career, /career/[slug]
│  ├─ contact/                /contact
│  └─ privacy-policy/ terms-and-conditions/ refund-policy/
│
├─ components/
│  ├─ layout/                 Header, Footer, PageHeader, LegalPage
│  ├─ home/                   Hero, StatsBar, Services, Work, Testimonials,
│  │                          Process, Insights, TrustedBy, CtaBand
│  ├─ blog/PostBody.tsx       Content renderer (swap for MDX/rich text later)
│  ├─ contact/ContactForm.tsx Client form bound to the server action
│  ├─ seo/JsonLd.tsx          Structured-data emitter
│  └─ ui/                     Button, Logo, Section, Icons
│
├─ content/                   ← the seam the backend replaces
│  ├─ services.ts             3 categories, 27 services
│  ├─ work.ts                 Projects, case studies, clients
│  ├─ blog.ts                 Posts and categories
│  └─ company.ts              Stats, process, testimonials, team, jobs, FAQs
│
└─ lib/
   ├─ site.ts                 NAP data, socials, brand copy — single source of truth
   ├─ navigation.ts           Header and footer menus
   └─ seo.ts                  buildMetadata() + every JSON-LD builder
```

---

## Design system

Tokens are defined once in `src/app/globals.css` under `@theme` and consumed as normal Tailwind utilities (`bg-brand-green`, `text-ink`, `border-line`).

| Token | Value | Used for |
| --- | --- | --- |
| `--color-brand-green` | `#0f8a48` | Service card 01, accents |
| `--color-brand-red` | `#e0322a` | Service card 02, accents |
| `--color-brand-blue` | `#1553cc` | Service card 03, CTA band, links |
| `--color-brand-yellow` | `#ffc933` | Primary buttons, marker underline |
| `--color-ink` | `#101010` | Text, dark sections |
| `--color-paper` | `#faf8f3` | Page background |
| `--color-forest` | `#0e3a2a` | Testimonial panel |

Three type roles: **Archivo** (display headings, tight tracking), **Plus Jakarta Sans** (body), **Caveat** (the handwritten marginalia — `.hand` / `<HandNote>`).

Two helper classes carry the look: `.marker` draws the yellow sweep under a headline word, and `.eyebrow` is the small uppercase section label.

---

## SEO layer

Everything routes through `buildMetadata()` in `src/lib/seo.ts`, so no page can ship without a canonical.

- **Metadata** — title template, description, keywords, canonical, Open Graph, Twitter card, robots directives, per page.
- **Structured data** — `Organization`, `ProfessionalService` (local business with geo + hours), `WebSite` with `SearchAction` emitted site-wide from the root layout as one `@graph`; plus `BreadcrumbList` on every inner page, `Service` on service pages, `BlogPosting` on articles, `FAQPage` on the homepage, service and contact pages, `JobPosting` on career detail, `CreativeWork` on portfolio items.
- **Sitemap** — `app/sitemap.ts` reads the same content the pages render, so a new post cannot be missing from it.
- **Robots** — `app/robots.txt` blocks `/api/`, `/admin/` and UTM-tagged URLs.
- **OG images** — `/api/og?title=…` renders a branded card at the edge for any page without its own image.
- **Redirects** — `next.config.ts` preserves legacy URLs (`/about-us`, `/contact-us`, `/blogs/*`) with 301s so existing rankings transfer.
- **Performance** — server components by default, AVIF/WebP, `priority` only on the hero and article cover, self-hosted fonts with `display: swap`.

### Launch checklist

1. Set `NEXT_PUBLIC_SITE_URL` to the live origin (staging must set its own so canonicals do not point at production).
2. Add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, then verify in Search Console and submit `/sitemap.xml`.
3. Set `NEXT_PUBLIC_GA_ID` (analytics stays off while empty).
4. Replace the placeholder images in `public/images/` — see below.
5. Confirm the real address, phone numbers and geo coordinates in `src/lib/site.ts` match the Google Business Profile **character for character**; inconsistent NAP is the most common cause of stalled local rankings.
6. Run the built site through Rich Results Test and PageSpeed Insights.

---

## Placeholder assets to replace

Generated stand-ins are in place so the site renders on first run. Swap these for real artwork:

| File | What it should become |
| --- | --- |
| `public/images/hero-portrait.png` | Cut-out portrait, transparent PNG, ~900×1200 |
| `public/images/work/*.jpg` | Project screenshots, 4:3, ≥1200px wide |
| `public/images/blog/*.jpg` | Article covers, 16:10, ≥1200px wide |
| `public/images/logo.png`, `favicon.ico`, `apple-touch-icon.png` | Official logo exports |

Team photos in `src/app/about/team/page.tsx` currently render an SVG stand-in — replace that block with `next/image` once photography exists.

---

## Phase 2 — backend, blog and admin panel

The content layer is deliberately a set of pure functions (`getPost`, `getProject`, `getServiceCategory`, …). Swapping the source means changing those function bodies, not the pages.

**Suggested path**

1. **Database** — PostgreSQL + Prisma. Tables: `Post`, `Category`, `Tag`, `Project`, `CaseStudy`, `Service`, `Testimonial`, `TeamMember`, `JobOpening`, `Enquiry`, `JobApplication`, `User`, `MediaAsset`.
2. **Data access** — move the `src/content/*` functions to `src/lib/queries/*`, make them `async`, and `await` them in the (already server-side) pages. Wrap reads in `unstable_cache` with tags; revalidate the tag when the admin panel writes.
3. **Contact form** — the integration point is already marked in `src/app/actions/contact.ts`: persist the `Enquiry`, then send the notification mail. The validation and the honeypot stay as they are.
4. **Admin panel** — `/admin` route group with its own layout, Auth.js credentials or OAuth, role-gated middleware. `robots.ts` already disallows `/admin/`.
5. **Editor** — Tiptap or MDX for post bodies; replace `components/blog/PostBody.tsx` with the matching renderer and keep the same typography classes.
6. **Media** — S3/R2 uploads, add the bucket host to `next.config.ts` → `images.remotePatterns`.
7. **Dynamic pages** — once posts come from the database, switch `generateStaticParams` to ISR (`export const revalidate = 3600`) or on-demand revalidation from the admin save action.

---

## Accessibility

Skip link, visible focus rings, semantic landmarks, labelled form fields with `aria-invalid`/`aria-describedby` error wiring, `aria-live` on the testimonial carousel and form status, and a full `prefers-reduced-motion` block.
