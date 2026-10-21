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
    highlights: ["SEO", "AEO & GEO", "Social Media", "Content Marketing", "Email Marketing"],
    items: [
      { title: "Search Engine Optimization (SEO)", slug: "seo", summary: "Squareit Solutions helps your website light up on the first page of search results with the right mix of on-page and off-page SEO, so you reach the customers already searching for you.", icon: "/images/squareit/icons/icon-seo.png" },
      { title: "Search Engine Marketing (SEM)", slug: "sem", summary: "Search Engine Marketing brings traffic to your website through paid ads on search engines. Squareit has a proven record of running Pay Per Lead campaigns that turn ad spend into real enquiries.", icon: "/images/squareit/icons/icon11.png" },
      { title: "Email Marketing", slug: "email-marketing", summary: "Email marketing keeps your brand in the inbox of people who already know you. We plan newsletters, lifecycle journeys and automated campaigns that nurture leads and turn them into repeat sales.", icon: "/images/squareit/icons/icon38.png" },
      { title: "Social Media Marketing (SMM)", slug: "social-media-marketing", summary: "Social media is one of the most direct ways to reach a wider audience and find new leads. Looking for a Social Media Management company in Lucknow? Squareit Solutions can grow your following for you.", icon: "/images/squareit/icons/icon-smm.png" },
      { title: "Social Media Optimization (SMO)", slug: "social-media-optimization", summary: "We optimise your profiles, content and engagement on every platform so your brand looks consistent, gets discovered more easily and turns casual followers into people who trust your business." },
      { title: "Content Marketing", slug: "content-marketing", summary: "Content is the most crucial element of any website. Squareit Solutions plans and creates the kinds of content that work best as owned media, helping you reach your content marketing goals.", icon: "/images/squareit/icons/icon-content-marketing.png" },
      { title: "WhatsApp Marketing", slug: "whatsapp-marketing", summary: "WhatsApp is where your customers already chat every day. We set up WhatsApp Business, broadcast campaigns and automated replies so you can share offers, answer queries and close sales faster." },
      { title: "Video Marketing", slug: "video-marketing", summary: "Video is the most powerful storytelling medium, and Squareit Solutions makes it easy to get great-looking videos. Our team creates attractive, professional videos that are sure to wow your viewers.", icon: "/images/squareit/icons/icon-video-marketing.png" },
      { title: "Display Advertising", slug: "display-advertising", summary: "Display advertising uses static or animated images, audio and video to promote your services to online audiences. We design and place display ads that put your offer in front of the right people.", icon: "/images/squareit/icons/icon13.png" },
      { title: "E-Commerce Marketing", slug: "ecommerce-marketing", summary: "We grow online stores with product feed management, shopping campaigns and retention strategy, so more shoppers find your products, complete their checkout and keep coming back to buy again." },
      { title: "Answer Engine Optimization (AEO)", slug: "aeo", summary: "AEO structures your content so voice assistants, featured snippets and AI answer boxes quote your business directly. When people ask a question, your brand becomes the answer they hear first." },
      { title: "Generative Engine Optimization (GEO)", slug: "geo", summary: "GEO makes your brand visible inside AI tools like ChatGPT, Gemini and Perplexity. We shape your content and authority signals so AI-generated answers mention and recommend your business." },
      { title: "Google Business Profile Optimization", slug: "google-business-profile", summary: "We set up and manage your Google Business Profile with local SEO, fresh posts, photos and review handling, so your business wins the map pack and nearby customers can call or visit you." },
      { title: "Web Analytics", slug: "web-analytics", summary: "We set up GA4, server-side tracking and clear dashboards that show where your leads come from, which channels pay off and where your budget should go next, so every decision is backed by data." },
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
      { title: "Website Design", slug: "website-design", summary: "Bringing your ideas to life as website designs is our strength. Using the latest tools, we craft creative, engaging websites that look great and work smoothly on both desktop and mobile devices.", icon: "/images/squareit/icons/icon-web-design-service.png" },
      { title: "Web Development", slug: "web-development", summary: "Squareit Solutions is a top-notch web development company with 7+ years of experience. We design and develop fast, secure websites that give your visitors a visually appealing, interactive experience.", icon: "/images/squareit/icons/icon-website-development.png" },
      { title: "Landing Page Development", slug: "landing-page", summary: "We build focused, fast-loading landing pages for your ads and campaigns, with clear messaging, strong calls to action and lead forms that turn more of your paid clicks into real enquiries." },
      { title: "E-Commerce Portal", slug: "ecommerce-portal", summary: "We build online stores with easy product management, fast and secure checkout, payment gateway integration and catalogues that scale, so your customers can shop smoothly on any device." },
      { title: "Web Portal Development", slug: "web-portal-development", summary: "We develop customer, dealer and internal web portals with secure logins, role-based access and custom workflows, so your team and partners can manage data and tasks from one place." },
      { title: "Website Maintenance", slug: "website-maintenance", summary: "We keep your website healthy with regular updates, security monitoring, daily backups and performance tuning, so it stays fast, safe and online while you focus on running your business." },
      { title: "Web Hosting", slug: "web-hosting", summary: "We offer managed web hosting with free SSL, a global CDN and round-the-clock uptime monitoring, giving your website the speed, security and reliability your customers expect every time." },
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
      { title: "Logo Design", slug: "logo-design", summary: "We design distinctive, memorable logos that capture what your business stands for, and back every mark with a full usage guide so it looks right on your website, signage, packaging and social media." },
      { title: "Brand Identity", slug: "brand-identity", summary: "We build complete brand identities covering colours, typography, tone of voice and ready-to-use templates, all documented end to end so your brand looks and sounds the same everywhere it appears." },
      { title: "UI/UX Design", slug: "ui-ux-design", summary: "We design research-led interfaces for websites and apps, mapping user journeys, wireframes and polished screens that are easy to use, look great and guide your visitors towards taking action." },
      { title: "Graphic Design", slug: "graphic-design", summary: "Squareit Solutions is one of the most creative graphic design providers. Our designers create catchy visuals for brochures, banners, flyers, business cards, social media posts and much more.", icon: "/images/squareit/icons/icon-flat-graphic-design.png" },
      { title: "Packaging Design", slug: "packaging-design", summary: "We create shelf-ready packaging that carries your brand with confidence, combining eye-catching design, clear product information and print-ready files that help your product stand out in store." },
      { title: "Motion & Video Graphics", slug: "motion-graphics", summary: "We produce animated explainers, social media reels and product loops that bring your brand to life, turning complex ideas into short, engaging videos people actually stop scrolling to watch." },
      { title: "AI Motion Pictures", slug: "ai-motion-pictures", summary: "We use the latest AI video tools to create cinematic ads, product films and brand stories in a fraction of the usual time and cost, giving you studio-quality motion pictures without a film shoot." },
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

export function getServiceItem(
  categorySlug: string,
  itemSlug: string,
): { category: ServiceCategory; item: ServiceItem } | undefined {
  const category = getServiceCategory(categorySlug);
  const item = category?.items.find((entry) => entry.slug === itemSlug);
  return category && item ? { category, item } : undefined;
}
