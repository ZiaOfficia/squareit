export type ServiceItem = {
  title: string;
  slug: string;
  summary: string;
};

export type ServiceCategory = {
  number: string;
  slug: string;
  title: string;
  /** Tailwind token name from globals.css — drives the card colour. */
  accent: "green" | "red" | "blue";
  tagline: string;
  summary: string;
  intro: string;
  /** Short list shown on the homepage card. */
  highlights: string[];
  items: ServiceItem[];
  outcomes: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    number: "01",
    slug: "digital-marketing",
    title: "Digital Marketing",
    accent: "green",
    tagline: "Get found. Get chosen. Get growing.",
    summary:
      "Full-funnel digital marketing that turns search, social and paid channels into a predictable source of qualified leads.",
    intro:
      "We combine search, social, paid media and content into one measurable growth engine. Every campaign starts with your numbers — pipeline, cost per lead, lifetime value — not vanity metrics.",
    highlights: ["SEO", "PPC", "Social Media", "Content Marketing", "Email Marketing"],
    items: [
      { title: "Search Engine Optimization (SEO)", slug: "seo", summary: "Technical, on-page and off-page SEO that compounds month after month." },
      { title: "Search Engine Marketing (SEM)", slug: "sem", summary: "Search campaigns engineered around intent and profitable keywords." },
      { title: "Pay-Per-Click (PPC) Management", slug: "ppc-management", summary: "Google and Meta ads managed to a target cost per acquisition." },
      { title: "Social Media Marketing (SMM)", slug: "social-media-marketing", summary: "Channel strategy, always-on content and community management." },
      { title: "Social Media Optimization (SMO)", slug: "social-media-optimization", summary: "Profile, content and engagement optimisation across platforms." },
      { title: "Content Marketing", slug: "content-marketing", summary: "Editorial built to rank, earn links and move buyers forward." },
      { title: "Email Marketing", slug: "email-marketing", summary: "Lifecycle journeys, newsletters and automation that convert." },
      { title: "Video Marketing", slug: "video-marketing", summary: "Short-form and long-form video built for reach and recall." },
      { title: "Display Advertising", slug: "display-advertising", summary: "Programmatic and display buys with creative that earns the click." },
      { title: "E-Commerce Marketing", slug: "ecommerce-marketing", summary: "Feed, shopping and retention strategy for online stores." },
      { title: "Affiliate Marketing", slug: "affiliate-marketing", summary: "Partner programmes that scale reach without scaling risk." },
      { title: "Google Business Profile", slug: "google-business-profile", summary: "Local SEO and GBP management that wins the map pack." },
      { title: "Web Analytics", slug: "web-analytics", summary: "GA4, server-side tracking and dashboards you can actually act on." },
    ],
    outcomes: [
      "Qualified enquiries, not raw traffic",
      "Transparent reporting against agreed KPIs",
      "Channel mix reviewed every quarter",
    ],
  },
  {
    number: "02",
    slug: "development",
    title: "Development",
    accent: "red",
    tagline: "Fast, findable, built to convert.",
    summary:
      "Websites, portals and e-commerce platforms engineered for speed, search visibility and measurable conversion.",
    intro:
      "We build on modern, SEO-friendly stacks — server-rendered pages, clean markup, Core Web Vitals in the green. Your site should be the hardest-working member of your sales team.",
    highlights: ["Website Design", "Web Development", "E-commerce", "Web Portals", "Web Hosting"],
    items: [
      { title: "Website Design", slug: "website-design", summary: "Conversion-led design systems tailored to your brand." },
      { title: "Web Development", slug: "web-development", summary: "Production-grade builds on Next.js, React and headless CMS." },
      { title: "E-Commerce Portal", slug: "ecommerce-portal", summary: "Storefronts with fast checkout, clean feeds and scalable catalogues." },
      { title: "Web Portal Development", slug: "web-portal-development", summary: "Customer, dealer and internal portals with role-based access." },
      { title: "News Portal", slug: "news-portal", summary: "High-volume publishing platforms with editorial workflows." },
      { title: "Mobile Website", slug: "mobile-website", summary: "Mobile-first experiences that load in under two seconds." },
      { title: "Website Maintenance", slug: "website-maintenance", summary: "Updates, monitoring, backups and performance tuning." },
      { title: "Web Hosting", slug: "web-hosting", summary: "Managed hosting with SSL, CDN and uptime monitoring." },
    ],
    outcomes: [
      "Core Web Vitals in the green on launch day",
      "Structured data and clean semantic markup",
      "A CMS your team can run without a developer",
    ],
  },
  {
    number: "03",
    slug: "creative-design",
    title: "Creative & Design",
    accent: "blue",
    tagline: "Brands people remember.",
    summary:
      "Identity, interface and campaign design that makes your brand look like the leader you're competing with.",
    intro:
      "Design is where strategy becomes something people can feel. We build identity systems, interfaces and campaign creative that stay consistent across every touchpoint.",
    highlights: ["Graphic Design", "UI/UX Design", "Logo Design", "Branding"],
    items: [
      { title: "Logo Design", slug: "logo-design", summary: "Distinctive marks with a full usage system behind them." },
      { title: "Brand Identity", slug: "brand-identity", summary: "Colour, type, tone and templates documented end to end." },
      { title: "UI/UX Design", slug: "ui-ux-design", summary: "Research-led product and website interfaces." },
      { title: "Graphic Design", slug: "graphic-design", summary: "Campaign, social and print creative on demand." },
      { title: "Packaging Design", slug: "packaging-design", summary: "Shelf-ready packaging that carries the brand." },
      { title: "Motion & Video Graphics", slug: "motion-graphics", summary: "Animated explainers, reels and product loops." },
    ],
    outcomes: [
      "A design system, not a one-off file",
      "Assets delivered in every format you need",
      "Consistency across web, social and print",
    ],
  },
];

export function getServiceCategory(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((category) => category.slug === slug);
}

export const allServiceItems = serviceCategories.flatMap((category) =>
  category.items.map((item) => ({ ...item, category: category.slug, categoryTitle: category.title })),
);
