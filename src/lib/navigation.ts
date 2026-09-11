export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

/** Primary header navigation — mirrors the live squareit.in information architecture. */
export const mainNav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about", description: "The story behind Squareit" },
      { label: "Vision & Mission", href: "/about/vision-mission", description: "What drives our work" },
      { label: "Our Team", href: "/about/team", description: "The people behind the results" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Digital Marketing", href: "/services/digital-marketing", description: "SEO, PPC, social and content" },
      { label: "Development", href: "/services/development", description: "Websites, portals and e-commerce" },
      { label: "Creative & Design", href: "/services/creative-design", description: "Branding, UI/UX and graphics" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  main: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about/team" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Career", href: "/career" },
  ],
  services: [
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Development", href: "/services/development" },
    { label: "Creative & Design", href: "/services/creative-design" },
    { label: "View All Services", href: "/services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
};
