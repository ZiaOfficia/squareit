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
// import { JsonLd } from "@/components/seo/JsonLd";
// import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
// import { caseStudies } from "@/content/work";
//
// export const metadata: Metadata = buildMetadata({
//   title: "Case Studies — Measurable Digital Growth",
//   description:
//     "Real engagements, real numbers. See how Squareit Solutions grew enquiries, cut acquisition costs and rebuilt digital performance for clients across India.",
//   path: "/case-studies",
// });
//
// export default function CaseStudiesPage() {
//   return (
//     <>
//       <JsonLd schema={breadcrumbSchema([{ name: "Case Studies", path: "/case-studies" }])} />
//
//       <PageHeader
//         eyebrow="Case Studies"
//         title={
//           <>
//             The numbers
//             <br />
//             behind the <span className="marker">work.</span>
//           </>
//         }
//         description="Every case study below reports the metric the client cared about at kickoff — not the metric that happened to look best afterwards."
//         crumbs={[{ name: "Case Studies", path: "/case-studies" }]}
//       />
//
//       <Section tone="paper" padding="md">
//         <Container>
//           <ul className="space-y-6">
//             {caseStudies.map((study) => (
//               <li key={study.slug}>
//                 <Link
//                   href={`/case-studies/${study.slug}`}
//                   className="group grid gap-6 rounded-sm border border-line bg-white p-5 transition-colors hover:border-ink md:grid-cols-12 md:p-6"
//                 >
//                   <div
//                     className="relative aspect-[4/3] overflow-hidden rounded-sm md:col-span-4 md:aspect-[4/3]"
//                     style={{ backgroundColor: study.tone }}
//                   >
//                     <Image
//                       src={study.image}
//                       alt={`${study.client} case study`}
//                       fill
//                       sizes="(max-width: 768px) 100vw, 30vw"
//                       className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
//                     />
//                   </div>
//
//                   <div className="flex flex-col md:col-span-8">
//                     <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted">
//                       <span>{study.industry}</span>
//                       <span aria-hidden="true">·</span>
//                       <span>{study.service}</span>
//                       <span aria-hidden="true">·</span>
//                       <span>{study.duration}</span>
//                     </div>
//
//                     <h2 className="mt-3 font-display text-[1.35rem] font-extrabold leading-tight tracking-tight md:text-[1.6rem]">
//                       {study.title}
//                     </h2>
//                     <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
//                       {study.summary}
//                     </p>
//
//                     <dl className="mt-auto flex flex-wrap gap-x-10 gap-y-4 pt-6">
//                       {study.results.map((result) => (
//                         <div key={result.label}>
//                           <dd className="font-display text-[1.4rem] font-extrabold leading-none tracking-tight text-brand-blue">
//                             {result.value}
//                           </dd>
//                           <dt className="mt-1.5 text-[0.7rem] text-muted">{result.label}</dt>
//                         </div>
//                       ))}
//                     </dl>
//                   </div>
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
