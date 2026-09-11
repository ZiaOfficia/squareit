// TEMPORARILY DISABLED — only the homepage is live for now.
// To restore: delete this stub (down to the "Original page" line) and uncomment the code below.
import { notFound } from "next/navigation";

export default function DisabledPage() {
  notFound();
}

// ─── Original page ───────────────────────────────────────────────
// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
//
// import { PageHeader } from "@/components/layout/PageHeader";
// import { CtaBand } from "@/components/home/CtaBand";
// import { Container, Section } from "@/components/ui/Section";
// import { ArrowBadge } from "@/components/ui/Button";
// import { JsonLd } from "@/components/seo/JsonLd";
// import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
// import { postCategories, posts } from "@/content/blog";
// import { absoluteUrl } from "@/lib/site";
//
// export const metadata: Metadata = buildMetadata({
//   title: "Blog — Digital Marketing Insights & Guides",
//   description:
//     "Practical guides on SEO, paid media, social strategy, web performance and branding from the team at Squareit Solutions.",
//   path: "/blog",
// });
//
// function formatDate(value: string) {
//   return new Date(value).toLocaleDateString("en-IN", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// }
//
// export default function BlogPage() {
//   const [lead, ...rest] = posts;
//
//   return (
//     <>
//       <JsonLd
//         schema={[
//           breadcrumbSchema([{ name: "Blog", path: "/blog" }]),
//           {
//             "@type": "Blog",
//             name: "Squareit Solutions Blog",
//             url: absoluteUrl("/blog"),
//             publisher: { "@id": absoluteUrl("/#organization") },
//           },
//         ]}
//       />
//
//       <PageHeader
//         eyebrow="Latest Insights"
//         title={
//           <>
//             Ideas to keep
//             <br />
//             you <span className="marker">ahead.</span>
//           </>
//         }
//         description="Tips, trends and strategies for businesses that want to grow — written by the people running the campaigns."
//         crumbs={[{ name: "Blog", path: "/blog" }]}
//       >
//         <ul className="mt-8 flex flex-wrap gap-2">
//           {postCategories.map((category) => (
//             <li key={category.slug}>
//               <Link
//                 href={`/blog/category/${category.slug}`}
//                 className="inline-flex rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-ink hover:text-ink"
//               >
//                 {category.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </PageHeader>
//
//       {/* Lead article */}
//       <Section tone="paper" padding="md">
//         <Container>
//           <article>
//             <Link href={`/blog/${lead.slug}`} className="group grid gap-8 lg:grid-cols-12">
//               <div
//                 className="relative aspect-[16/9] overflow-hidden rounded-sm lg:col-span-7"
//                 style={{ backgroundColor: lead.tone }}
//               >
//                 <Image
//                   src={lead.image}
//                   alt={lead.title}
//                   fill
//                   priority
//                   sizes="(max-width: 1024px) 100vw, 55vw"
//                   className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//                 />
//               </div>
//               <div className="flex flex-col justify-center lg:col-span-5">
//                 <div className="flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em]">
//                   <span className="text-brand-green">{lead.categoryName}</span>
//                   <span className="text-muted">{lead.readingMinutes} min read</span>
//                 </div>
//                 <h2 className="mt-4 font-display text-[1.75rem] font-extrabold leading-tight tracking-tight md:text-[2.1rem]">
//                   {lead.title}
//                 </h2>
//                 <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{lead.excerpt}</p>
//                 <p className="mt-5 text-xs text-muted">
//                   {lead.author} · {formatDate(lead.publishedAt)}
//                 </p>
//               </div>
//             </Link>
//           </article>
//         </Container>
//       </Section>
//
//       {/* Grid */}
//       <Section tone="paper" padding="sm">
//         <Container>
//           <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
//             {rest.map((post) => (
//               <li key={post.slug}>
//                 <article className="group">
//                   <Link href={`/blog/${post.slug}`}>
//                     <div
//                       className="relative aspect-[16/10] overflow-hidden rounded-sm"
//                       style={{ backgroundColor: post.tone }}
//                     >
//                       <Image
//                         src={post.image}
//                         alt={post.title}
//                         fill
//                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 32vw"
//                         className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
//                       />
//                     </div>
//                     <div className="mt-4 flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em]">
//                       <span className="text-brand-green">{post.categoryName}</span>
//                       <span className="text-muted">{post.readingMinutes} min read</span>
//                     </div>
//                     <div className="mt-2 flex items-start justify-between gap-4">
//                       <h2 className="font-display text-[1.05rem] font-extrabold leading-snug tracking-tight transition-colors group-hover:text-brand-blue">
//                         {post.title}
//                       </h2>
//                       <ArrowBadge tone="light" className="size-8" />
//                     </div>
//                     <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
//                     <p className="mt-4 text-xs text-muted">{formatDate(post.publishedAt)}</p>
//                   </Link>
//                 </article>
//               </li>
//             ))}
//           </ul>
//         </Container>
//       </Section>
//
//       <CtaBand
//         eyebrow="Stay Ahead"
//         heading="Want this thinking"
//         highlight="applied to your business?"
//         body="Book a free consultation and we will map the fastest route to growth in your market."
//       />
//     </>
//   );
// }
