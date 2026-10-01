export type ServiceItem = {
  title: string;
  slug: string;
  summary: string;
  /** Icon published for this service on squareit.in. */
  icon?: string;
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
      { title: "Search Engine Optimization (SEO)", slug: "seo", summary: "Squareit Solutions help you achieve your targeted objectives by making your website light up on the top page of the search results by taking on the perfect combination of On-Page and Off-page SEO.", icon: "/images/squareit/icons/icon-seo.png" },
      { title: "Search Engine Marketing (SEM)", slug: "sem", summary: "Search Engine Marketing is the process of getting website traffic by buying ads on search engines. Squareit has a proven track record of advertising the products and services of clients with extensive Pay Per Lead Management campaigns.", icon: "/images/squareit/icons/icon11.png" },
      { title: "Pay-Per-Click (PPC) Management", slug: "ppc-management", summary: "Pay Per Click has an instant impact and gives your brand a much larger reach and exposure as a result of first page exposure on major search engines.", icon: "/images/squareit/icons/icon38.png" },
      { title: "Social Media Marketing (SMM)", slug: "social-media-marketing", summary: "In today's world, social media is one of the crucial ways for your business to reach a wider audience and get your potential leads. If you are looking for a Social Media Management company in Lucknow then Squareit Solutions can help you in that.", icon: "/images/squareit/icons/icon-smm.png" },
      { title: "Social Media Optimization (SMO)", slug: "social-media-optimization", summary: "Profile, content and engagement optimisation across platforms." },
      { title: "Content Marketing", slug: "content-marketing", summary: "Content is the most crucial element for any website. Squareit Solution promotes and outlines the kinds of content that will work best as owned media to help achieve your content marketing goals.", icon: "/images/squareit/icons/icon-content-marketing.png" },
      { title: "Email Marketing", slug: "email-marketing", summary: "Lifecycle journeys, newsletters and automation that convert." },
      { title: "Video Marketing", slug: "video-marketing", summary: "Video is the most powerful storytelling medium and with Squareit Solutions it's easier to get amazing-looking videos. Our professional creates an attractive, professional-looking video that is sure to wow your viewers.", icon: "/images/squareit/icons/icon-video-marketing.png" },
      { title: "Display Advertising", slug: "display-advertising", summary: "Online Display Advertising is a practice that makes use of static or animated images or audio and videos to promote service to online consumer traffic. Our Display ads Marketing means to include ads into one's marketing efforts to promote an offer.", icon: "/images/squareit/icons/icon13.png" },
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
      { title: "Website Design", slug: "website-design", summary: "Bringing your ideas to living, website designs is our strength. Working with the latest tools, our Digital Marketing company can carve perfect designs to build creative websites that engage users on both desktop & mobile devices.", icon: "/images/squareit/icons/icon-web-design-service.png" },
      { title: "Web Development", slug: "web-development", summary: "Squareit Solutions is a top-notch web development services provider with 7+ years of experience in the industry. We design and develop websites that provide a visually appealing and interactive web experience.", icon: "/images/squareit/icons/icon-website-development.png" },
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
      { title: "Graphic Design", slug: "graphic-design", summary: "Squareit Solutions is one of the best and the most creative graphic design service providers. Our creative designers innovate outstanding and catchy visuals for brochures, banners, flyers, business cards, social Media Posts, and many more.", icon: "/images/squareit/icons/icon-flat-graphic-design.png" },
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
