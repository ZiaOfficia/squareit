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
// import { notFound } from "next/navigation";
//
// import { PageHeader } from "@/components/layout/PageHeader";
// import { CtaBand } from "@/components/home/CtaBand";
// import { Container, Eyebrow, Section } from "@/components/ui/Section";
// import { JsonLd } from "@/components/seo/JsonLd";
// import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
// import { caseStudies, getCaseStudy } from "@/content/work";
// import { absoluteUrl } from "@/lib/site";
//
// type Params = { slug: string };
//
// export function generateStaticParams(): Params[] {
//   return caseStudies.map((study) => ({ slug: study.slug }));
// }
//
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<Params>;
// }): Promise<Metadata> {
//   const { slug } = await params;
//   const study = getCaseStudy(slug);
//
//   if (!study) {
//     return buildMetadata({
//       title: "Case study not found",
//       description: "This case study could not be found.",
//       path: `/case-studies/${slug}`,
//       noIndex: true,
//     });
//   }
//
//   return buildMetadata({
//     title: study.title,
//     description: study.summary,
//     path: `/case-studies/${study.slug}`,
//     image: study.image,
//     type: "article",
//   });
// }
//
// export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
//   const { slug } = await params;
//   const study = getCaseStudy(slug);
//
//   if (!study) notFound();
//
//   const more = caseStudies.filter((item) => item.slug !== study.slug);
//
//   return (
//     <>
//       <JsonLd
//         schema={[
//           breadcrumbSchema([
//             { name: "Case Studies", path: "/case-studies" },
//             { name: study.client, path: `/case-studies/${study.slug}` },
//           ]),
//           {
//             "@type": "Article",
//             headline: study.title,
//             description: study.summary,
//             image: absoluteUrl(study.image),
//             author: { "@id": absoluteUrl("/#organization") },
//             publisher: { "@id": absoluteUrl("/#organization") },
//             mainEntityOfPage: {
//               "@type": "WebPage",
//               "@id": absoluteUrl(`/case-studies/${study.slug}`),
//             },
//           },
//         ]}
//       />
//
//       <PageHeader
//         eyebrow={`${study.industry} · ${study.service}`}
//         title={study.title}
//         description={study.summary}
//         crumbs={[
//           { name: "Case Studies", path: "/case-studies" },
//           { name: study.client, path: `/case-studies/${study.slug}` },
//         ]}
//       />
//
//       {/* Results band */}
//       <section className="bg-ink py-10 text-white">
//         <Container>
//           <dl className="grid gap-8 sm:grid-cols-3">
//             {study.results.map((result) => (
//               <div key={result.label}>
//                 <dd className="font-display text-[2.25rem] font-extrabold leading-none tracking-tight text-brand-yellow">
//                   {result.value}
//                 </dd>
//                 <dt className="mt-2.5 text-sm text-white/65">{result.label}</dt>
//               </div>
//             ))}
//           </dl>
//         </Container>
//       </section>
//
//       <Section tone="paper" padding="md">
//         <Container>
//           <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
//             <div className="lg:col-span-4">
//               <div
//                 className="relative aspect-[4/3] overflow-hidden rounded-sm"
//                 style={{ backgroundColor: study.tone }}
//               >
//                 <Image
//                   src={study.image}
//                   alt={`${study.client} case study`}
//                   fill
//                   sizes="(max-width: 1024px) 100vw, 30vw"
//                   className="object-cover"
//                 />
//               </div>
//               <dl className="mt-6 space-y-4 border-t border-line pt-6">
//                 {[
//                   { label: "Client", value: study.client },
//                   { label: "Industry", value: study.industry },
//                   { label: "Service", value: study.service },
//                   { label: "Duration", value: study.duration },
//                 ].map((item) => (
//                   <div key={item.label} className="flex justify-between gap-4">
//                     <dt className="text-xs uppercase tracking-[0.12em] text-muted">{item.label}</dt>
//                     <dd className="text-right text-sm font-semibold">{item.value}</dd>
//                   </div>
//                 ))}
//               </dl>
//             </div>
//
//             <div className="lg:col-span-8">
//               <Eyebrow>The Challenge</Eyebrow>
//               <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">{study.challenge}</p>
//
//               <Eyebrow className="mt-12">Our Approach</Eyebrow>
//               <ol className="mt-5 space-y-5">
//                 {study.approach.map((step, index) => (
//                   <li key={step} className="flex gap-4 border-t border-line pt-5">
//                     <span className="font-display text-sm font-extrabold text-brand-blue">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>
//                     <p className="text-[0.95rem] leading-relaxed text-ink-soft">{step}</p>
//                   </li>
//                 ))}
//               </ol>
//
//               <Eyebrow className="mt-12">The Result</Eyebrow>
//               <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
//                 Within {study.duration.toLowerCase()}, the programme delivered{" "}
//                 {study.results
//                   .map((result) => `${result.label.toLowerCase()} at ${result.value}`)
//                   .join(", ")}
//                 . The systems built during the engagement — tracking, content and process — continue
//                 to compound without additional spend.
//               </p>
//             </div>
//           </div>
//         </Container>
//       </Section>
//
//       <Section tone="paper-alt" padding="sm">
//         <Container>
//           <p className="eyebrow">More Case Studies</p>
//           <ul className="mt-5 grid gap-4 sm:grid-cols-2">
//             {more.map((item) => (
//               <li key={item.slug}>
//                 <Link
//                   href={`/case-studies/${item.slug}`}
//                   className="block rounded-sm border border-line bg-white p-6 transition-colors hover:border-ink"
//                 >
//                   <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted">
//                     {item.industry}
//                   </p>
//                   <h2 className="mt-2 font-display text-[1.1rem] font-extrabold leading-snug tracking-tight">
//                     {item.title}
//                   </h2>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </Container>
//       </Section>
//
//       <CtaBand />
//     </>
//   );
// }
