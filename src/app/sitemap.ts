import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
// TEMPORARILY DISABLED — only the homepage is live for now. Restore with the pages.
// import { serviceCategories } from "@/content/services";
// import { caseStudies, projects } from "@/content/work";
// import { postCategories, posts } from "@/content/blog";
// import { openings } from "@/content/company";

/**
 * Generated at build time from the same content the pages render, so a new
 * service or post can never be missing from the sitemap.
 * Served at /sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    // { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // { url: absoluteUrl("/about/vision-mission"), lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    // { url: absoluteUrl("/about/team"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // { url: absoluteUrl("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // { url: absoluteUrl("/portfolio"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    // { url: absoluteUrl("/case-studies"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    // { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "daily", priority: 0.8 },
    // { url: absoluteUrl("/career"), lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    // { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    // { url: absoluteUrl("/privacy-policy"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    // { url: absoluteUrl("/terms-and-conditions"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    // { url: absoluteUrl("/refund-policy"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  // const serviceRoutes: MetadataRoute.Sitemap = serviceCategories.map((category) => ({
  //   url: absoluteUrl(`/services/${category.slug}`),
  //   lastModified: now,
  //   changeFrequency: "monthly",
  //   priority: 0.85,
  // }));

  // const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
  //   url: absoluteUrl(`/portfolio/${project.slug}`),
  //   lastModified: now,
  //   changeFrequency: "monthly",
  //   priority: 0.6,
  // }));

  // const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
  //   url: absoluteUrl(`/case-studies/${study.slug}`),
  //   lastModified: now,
  //   changeFrequency: "monthly",
  //   priority: 0.7,
  // }));

  // const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
  //   url: absoluteUrl(`/blog/${post.slug}`),
  //   lastModified: new Date(post.updatedAt ?? post.publishedAt),
  //   changeFrequency: "monthly",
  //   priority: 0.7,
  // }));

  // const categoryRoutes: MetadataRoute.Sitemap = postCategories.map((category) => ({
  //   url: absoluteUrl(`/blog/category/${category.slug}`),
  //   lastModified: now,
  //   changeFrequency: "weekly",
  //   priority: 0.5,
  // }));

  // const jobRoutes: MetadataRoute.Sitemap = openings.map((opening) => ({
  //   url: absoluteUrl(`/career/${opening.slug}`),
  //   lastModified: now,
  //   changeFrequency: "weekly",
  //   priority: 0.5,
  // }));

  return [
    ...staticRoutes,
    // ...serviceRoutes,
    // ...projectRoutes,
    // ...caseStudyRoutes,
    // ...postRoutes,
    // ...categoryRoutes,
    // ...jobRoutes,
  ];
}
