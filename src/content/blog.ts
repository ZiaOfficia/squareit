export type PostCategory = {
  slug: string;
  name: string;
  description: string;
};

export const postCategories: PostCategory[] = [
  { slug: "seo", name: "SEO", description: "Search visibility, technical SEO and content that ranks." },
  { slug: "social-media", name: "Social Media", description: "Organic and paid social strategy for growing brands." },
  { slug: "web-development", name: "Web Development", description: "Performance, accessibility and modern web stacks." },
  { slug: "ppc", name: "PPC", description: "Paid search and paid social that stays profitable." },
  { slug: "branding", name: "Branding", description: "Identity, positioning and design systems." },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryName: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  image: string;
  tone: string;
  featured: boolean;
  /** Markdown-ish body; the CMS will replace this once the backend lands. */
  body: string;
};

export const posts: Post[] = [
  {
    slug: "how-to-improve-your-google-rankings",
    title: "How to Improve Your Google Rankings in 2024",
    excerpt:
      "Rankings follow relevance, authority and experience — in that order. Here's the working checklist we run for every client.",
    category: "seo",
    categoryName: "SEO",
    author: "Squareit Editorial",
    authorRole: "Search Team",
    publishedAt: "2024-03-12",
    readingMinutes: 10,
    image: "/images/blog/google-rankings.jpg",
    tone: "#E9EEF6",
    featured: true,
    body: `## Start with what Google can actually read

Before a single backlink matters, a crawler has to reach your page, render it, and understand what it is about. That means fast server responses, clean internal linking, and markup that says what it means.

## Match the intent, not the keyword

A keyword is a label; intent is the job the searcher is trying to finish. Pages that rank durably answer the job completely — comparison tables where people are comparing, pricing where people are buying, and depth where people are learning.

## Earn authority you can defend

Links still matter, but the ones that move rankings come from relevance, not volume. Digital PR, original data and genuinely useful tools outperform bought placements every time.

## Measure the right things

Impressions and average position tell you whether you are visible. Clicks, assisted conversions and pipeline tell you whether visibility is worth anything.`,
  },
  {
    slug: "social-media-strategies-for-small-businesses",
    title: "5 Social Media Strategies for Small Businesses",
    excerpt:
      "You do not need a large team or a big budget — you need a repeatable format, a clear offer and consistency.",
    category: "social-media",
    categoryName: "Social Media",
    author: "Squareit Editorial",
    authorRole: "Social Team",
    publishedAt: "2024-02-28",
    readingMinutes: 6,
    image: "/images/blog/social-media.jpg",
    tone: "#F2EAF7",
    featured: true,
    body: `## 1. Pick two channels, not six

Presence everywhere is how small teams end up invisible everywhere. Choose the two platforms where your buyers already are and go deep.

## 2. Build repeatable formats

A format you can produce weekly beats a campaign you can produce once. Behind-the-scenes, customer questions and before/after posts all scale.

## 3. Make the offer obvious

Every profile should answer three questions in four seconds: what you do, who it is for, and what to tap next.

## 4. Reply like a person

Response time in comments and DMs is a ranking factor for attention. It is also the cheapest sales channel you have.

## 5. Repurpose ruthlessly

One recorded conversation becomes a reel, three quote cards, a carousel and a newsletter section.`,
  },
  {
    slug: "why-a-fast-website-matters-for-your-business",
    title: "Why a Fast Website Matters for Your Business",
    excerpt:
      "Speed is not a technical nicety. It is the difference between a visitor who converts and one who never sees your offer.",
    category: "web-development",
    categoryName: "Web Development",
    author: "Squareit Editorial",
    authorRole: "Engineering Team",
    publishedAt: "2024-02-14",
    readingMinutes: 6,
    image: "/images/blog/fast-website.jpg",
    tone: "#101820",
    featured: true,
    body: `## Every second has a price

Conversion rates fall measurably with each additional second of load time on mobile. For a lead-generation site, that is enquiries you paid to acquire and then lost at the door.

## Core Web Vitals in plain language

- **LCP** — how quickly the main content appears. Aim under 2.5 seconds.
- **INP** — how quickly the page responds when tapped. Aim under 200ms.
- **CLS** — how much the layout jumps around. Aim under 0.1.

## What actually moves the needle

Server rendering, modern image formats, a sensible font loading strategy and shipping less JavaScript. In that order.`,
  },
  {
    slug: "google-ads-budget-guide",
    title: "How Much Should You Spend on Google Ads?",
    excerpt:
      "Budget follows maths, not gut feel. Work backwards from your close rate and the number becomes obvious.",
    category: "ppc",
    categoryName: "PPC",
    author: "Squareit Editorial",
    authorRole: "Paid Media Team",
    publishedAt: "2024-01-30",
    readingMinutes: 7,
    image: "/images/blog/google-ads.jpg",
    tone: "#FFF3DA",
    featured: false,
    body: `## Work backwards from revenue

Start with the revenue target, divide by average order value, divide by your close rate, and you have the number of leads you need. Multiply by an achievable cost per lead and you have the budget.

## Leave room to learn

The first six to eight weeks buy you data, not profit. Budget for the learning period explicitly instead of pulling the plug halfway through it.`,
  },
  {
    slug: "brand-identity-checklist",
    title: "The Brand Identity Checklist for Growing Companies",
    excerpt:
      "A logo is not a brand. Here is everything a growing company actually needs documented before it scales.",
    category: "branding",
    categoryName: "Branding",
    author: "Squareit Editorial",
    authorRole: "Design Team",
    publishedAt: "2024-01-16",
    readingMinutes: 8,
    image: "/images/blog/brand-identity.jpg",
    tone: "#E6F3EC",
    featured: false,
    body: `## The minimum viable identity system

Primary and secondary marks, a colour system with accessible pairings, a type scale, spacing rules, photography direction and a tone-of-voice page. That is the floor.

## Why documentation beats taste

Brands break at scale when every new person has to guess. Written rules keep the tenth designer as consistent as the first.`,
  },
  {
    slug: "local-seo-for-lucknow-businesses",
    title: "Local SEO: A Practical Guide for Lucknow Businesses",
    excerpt:
      "The map pack is the most valuable real estate in local search. Here is how to earn a place in it.",
    category: "seo",
    categoryName: "SEO",
    author: "Squareit Editorial",
    authorRole: "Search Team",
    publishedAt: "2023-12-20",
    readingMinutes: 9,
    image: "/images/blog/local-seo.jpg",
    tone: "#EAF1EC",
    featured: false,
    body: `## Your Google Business Profile is your homepage

For local intent, the profile outranks your website. Complete every field, post weekly, and treat photos as a ranking asset.

## Consistent NAP everywhere

Name, address and phone number must match character-for-character across every directory. Inconsistency is the most common reason local rankings stall.

## Reviews are a strategy, not an accident

Build a review request into the moment of delivery, respond to every one, and never gate them.`,
  },
];

export const featuredPosts = posts.filter((post) => post.featured);

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return posts.filter((post) => post.category === categorySlug);
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const current = getPost(slug);
  if (!current) return posts.slice(0, limit);
  return posts
    .filter((post) => post.slug !== slug)
    .sort(
      (a, b) =>
        Number(b.category === current.category) - Number(a.category === current.category),
    )
    .slice(0, limit);
}
