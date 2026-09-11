/**
 * Single source of truth for NAP data, brand copy and social profiles.
 * Everything SEO-facing (metadata, JSON-LD, footer, sitemap) reads from here,
 * so a phone number or address only ever changes in one place.
 */

export const siteConfig = {
  name: "Squareit Solutions",
  legalName: "Squareit Solutions",
  shortName: "Squareit",
  tagline: "Digital Growth Simplified",
  // Staging deploys set NEXT_PUBLIC_SITE_URL so canonicals never point at prod.
  // `||` (not `??`) so an empty env var still falls back instead of crashing `new URL("")`.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://squareit.in").replace(/\/+$/, ""),
  locale: "en_IN",
  foundingDate: "2016",

  title: "Squareit Solutions — Digital Marketing Company in Lucknow",
  description:
    "Squareit Solutions is a result-driven digital marketing company in Lucknow helping brands build visibility, generate leads and grow faster with SEO, PPC, web development and creative design.",

  keywords: [
    "digital marketing company in Lucknow",
    "SEO company Lucknow",
    "PPC agency Lucknow",
    "website development Lucknow",
    "social media marketing agency",
    "digital marketing agency India",
    "Squareit Solutions",
  ],

  contact: {
    phonePrimary: "+91 9335 123 456",
    phonePrimaryHref: "+919335123456",
    phoneSecondary: "+91 78008 54321",
    phoneSecondaryHref: "+917800854321",
    email: "info@squareit.in",
    salesEmail: "sales@squareit.in",
    careersEmail: "careers@squareit.in",
  },

  address: {
    street: "2nd Floor, Ramanand Trade Center, 34-A, Kapoorthala Road",
    locality: "Chandralok Colony, Aliganj",
    city: "Lucknow",
    region: "Uttar Pradesh",
    postalCode: "226024",
    country: "IN",
    countryName: "India",
    // Update with the exact pin from Google Business Profile.
    geo: { latitude: 26.8895, longitude: 80.9462 },
    mapsUrl: "https://maps.google.com/?q=Squareit+Solutions+Lucknow",
  },

  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },

  social: {
    linkedin: "https://www.linkedin.com/company/squareit-solutions",
    facebook: "https://www.facebook.com/squareitsolutions",
    instagram: "https://www.instagram.com/squareitsolutions",
    twitter: "https://twitter.com/squareitsol",
    youtube: "https://www.youtube.com/@squareitsolutions",
    pinterest: "https://in.pinterest.com/squareitsolutions",
  },

  /** Used by the analytics snippet in the root layout. Leave empty to disable. */
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_ID ?? "",
    gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Absolute URL helper — canonical tags and JSON-LD must never emit relative paths. */
export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${clean === "/" ? "" : clean}`;
}
