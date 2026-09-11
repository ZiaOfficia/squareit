import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

type BuildMetadataArgs = {
  title: string;
  description: string;
  /** Route path, e.g. "/services/digital-marketing" — used for the canonical. */
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
  /** Skip the "%s | Squareit Solutions" template (homepage, campaign pages). */
  absoluteTitle?: boolean;
};

/**
 * One place that builds title, canonical, Open Graph and Twitter tags.
 * Every page calls this so no route can quietly ship without a canonical.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
  absoluteTitle = false,
}: BuildMetadataArgs): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ?? `/api/og?title=${encodeURIComponent(title)}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(type === "article"
        ? { publishedTime, modifiedTime, authors }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/* ------------------------------------------------------------------
   JSON-LD builders
   Rendered through <JsonLd /> so every schema is validated in one place.
------------------------------------------------------------------- */

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/logo.png"),
      width: 512,
      height: 512,
    },
    description: siteConfig.description,
    foundingDate: siteConfig.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phonePrimaryHref,
        contactType: "sales",
        email: siteConfig.contact.email,
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
    sameAs: Object.values(siteConfig.social),
  };
}

export function localBusinessSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#localbusiness"),
    name: siteConfig.name,
    image: absoluteUrl("/images/logo.png"),
    url: siteConfig.url,
    telephone: siteConfig.contact.phonePrimaryHref,
    email: siteConfig.contact.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.geo.latitude,
      longitude: siteConfig.address.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...siteConfig.hours.days],
        opens: siteConfig.hours.opens,
        closes: siteConfig.hours.closes,
      },
    ],
    areaServed: [
      { "@type": "City", name: "Lucknow" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: Object.values(siteConfig.social),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": absoluteUrl("/#organization") },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: absoluteUrl("/blog?q={search_term_string}"),
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: [
      { "@type": "City", name: "Lucknow" },
      { "@type": "Country", name: "India" },
    ],
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
}) {
  return {
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    image: absoluteUrl(input.image),
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    author: { "@type": "Organization", name: input.author, url: siteConfig.url },
    publisher: { "@id": absoluteUrl("/#organization") },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(input.path) },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function jobPostingSchema(input: {
  title: string;
  description: string;
  employmentType: string;
  datePosted: string;
  location: string;
}) {
  return {
    "@type": "JobPosting",
    title: input.title,
    description: input.description,
    employmentType: input.employmentType.toUpperCase().replace("-", "_"),
    datePosted: input.datePosted,
    hiringOrganization: { "@id": absoluteUrl("/#organization") },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
    },
  };
}
