export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "Website Design" | "Digital Marketing" | "Branding & Design" | "Graphics";
  discipline: string;
  year: string;
  summary: string;
  /** Path under /public/images — replace the placeholders with real shots. */
  image: string;
  /** Background used behind the thumbnail in the grid. */
  tone: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "studio-and-studio",
    title: "A portfolio that books the meeting",
    client: "Studio & Studio",
    category: "Website Design",
    discipline: "Website Design",
    year: "2024",
    summary:
      "A dark, editorial portfolio site for a creative studio — built to make the work the hero and the enquiry form impossible to miss.",
    image: "/images/work/studio-and-studio.png",
    tone: "#F5DFD9",
    featured: true,
  },
  {
    slug: "aastha-dental-solution",
    title: "Filling the chair, every week",
    client: "Aastha Dental Solution",
    category: "Digital Marketing",
    discipline: "Digital Marketing",
    year: "2024",
    summary:
      "Local SEO, Google Business Profile and paid search working together to keep a dental practice's appointment book full.",
    image: "/images/work/aastha-dental.png",
    tone: "#DBE1EC",
    featured: true,
  },
  {
    slug: "artchilds",
    title: "A playful brand for young makers",
    client: "Artchilds",
    category: "Branding & Design",
    discipline: "Branding & Design",
    year: "2023",
    summary:
      "Identity, packaging and collateral for a children's art brand — warm, tactile and built to scale across products.",
    image: "/images/work/artchilds.png",
    tone: "#F9F1DA",
    featured: true,
  },
  {
    slug: "jewelsbox",
    title: "Luxury that travels well on mobile",
    client: "JewelsBox",
    category: "Graphics",
    discipline: "Graphic Design",
    year: "2023",
    summary: "Campaign creative and social templates for a fine jewellery retailer.",
    image: "/images/work/jewelsbox.png",
    tone: "#DDE0D9",
    featured: false,
  },
  {
    slug: "pizza-dine",
    title: "Appetite, on every channel",
    client: "Pizza Dine",
    category: "Graphics",
    discipline: "Graphic Design",
    year: "2023",
    summary: "Menu, in-store and social design for a growing QSR chain.",
    image: "/images/work/pizza-dine.png",
    tone: "#F5DFD9",
    featured: false,
  },
  {
    slug: "worldwide-wedding",
    title: "One brand, many celebrations",
    client: "Worldwide Wedding",
    category: "Graphics",
    discipline: "Graphic Design",
    year: "2022",
    summary: "Brand and campaign design for a destination wedding planner.",
    image: "/images/work/worldwide-wedding.png",
    tone: "#DBE8DB",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  industry: string;
  service: string;
  duration: string;
  summary: string;
  challenge: string;
  approach: string[];
  results: { label: string; value: string }[];
  image: string;
  tone: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "aastha-dental-local-growth",
    client: "Aastha Dental Solution",
    title: "How a Lucknow dental practice tripled monthly appointment requests",
    industry: "Healthcare",
    service: "Local SEO & Paid Search",
    duration: "8 months",
    summary:
      "A single-location practice competing against aggregators. We rebuilt local visibility from the ground up and paired it with tightly-targeted search ads.",
    challenge:
      "The practice ranked outside the map pack for every high-intent treatment term and relied almost entirely on walk-ins and referrals.",
    approach: [
      "Rebuilt the Google Business Profile with service categories, treatment photos and a review generation loop",
      "Published treatment-level landing pages targeting intent keywords across Lucknow neighbourhoods",
      "Launched call-only and lead-form search campaigns capped to a target cost per booked appointment",
      "Added call tracking so every enquiry could be attributed back to a channel",
    ],
    results: [
      { label: "Appointment requests", value: "3.1×" },
      { label: "Map pack keywords", value: "42" },
      { label: "Cost per enquiry", value: "−54%" },
    ],
    image: "/images/work/aastha-dental.png",
    tone: "#DBE1EC",
  },
  {
    slug: "studio-and-studio-rebuild",
    client: "Studio & Studio",
    title: "A portfolio rebuild that cut bounce rate in half",
    industry: "Creative Services",
    service: "Website Design & Development",
    duration: "10 weeks",
    summary:
      "A slow, image-heavy portfolio was losing visitors before the work loaded. We rebuilt it on a modern stack with performance as a design constraint.",
    challenge:
      "Largest Contentful Paint sat above six seconds on mobile and the enquiry form was buried three clicks deep.",
    approach: [
      "Rebuilt on Next.js with server rendering and modern image formats",
      "Restructured the case study template around outcomes rather than deliverables",
      "Surfaced a persistent enquiry CTA without interrupting the browsing experience",
      "Added structured data for creative work and organisation",
    ],
    results: [
      { label: "Bounce rate", value: "−49%" },
      { label: "LCP (mobile)", value: "1.4s" },
      { label: "Enquiries per month", value: "2.4×" },
    ],
    image: "/images/work/studio-and-studio.png",
    tone: "#F5DFD9",
  },
  {
    slug: "artchilds-brand-launch",
    client: "Artchilds",
    title: "Launching a children's art brand into a crowded shelf",
    industry: "Retail & E-commerce",
    service: "Branding & E-commerce",
    duration: "6 months",
    summary:
      "From naming system to storefront — a complete identity and commerce launch for a new consumer brand.",
    challenge:
      "A new entrant with no recognition, competing against established stationery brands on price and distribution.",
    approach: [
      "Built a distinctive identity system with a flexible colour and illustration language",
      "Designed packaging across the full product range",
      "Launched a fast, mobile-first storefront with clean product feeds",
      "Ran launch campaigns across paid social and influencer partnerships",
    ],
    results: [
      { label: "Launch-month revenue", value: "₹18L" },
      { label: "Return customers", value: "31%" },
      { label: "Social reach", value: "1.2M" },
    ],
    image: "/images/work/artchilds.png",
    tone: "#F9F1DA",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export type Client = {
  name: string;
  /** Two-to-three character wordmark stand-in until real logos are supplied. */
  mark: string;
};

export const clients: Client[] = [
  { name: "Aastha Dental", mark: "AD" },
  { name: "Studio & Studio", mark: "SS" },
  { name: "Artchilds", mark: "A" },
  { name: "SS Coaching", mark: "SS" },
  { name: "Kanhaiya Group", mark: "K" },
  { name: "Parog", mark: "P" },
  { name: "GreenLeaf", mark: "G" },
  { name: "UrbanNest", mark: "U" },
];
