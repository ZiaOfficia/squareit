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
// import { TrustedBy } from "@/components/home/TrustedBy";
// import { Container, Section } from "@/components/ui/Section";
// import { ArrowBadge } from "@/components/ui/Button";
// import { JsonLd } from "@/components/seo/JsonLd";
// import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
// import { projects } from "@/content/work";
// import { absoluteUrl } from "@/lib/site";
//
// export const metadata: Metadata = buildMetadata({
//   title: "Portfolio — Websites, Campaigns & Brand Work",
//   description:
//     "Selected websites, digital marketing campaigns and brand identity work delivered by Squareit Solutions for clients across healthcare, retail, education and professional services.",
//   path: "/portfolio",
// });
//
// export default function PortfolioPage() {
//   return (
//     <>
//       <JsonLd
//         schema={[
//           breadcrumbSchema([{ name: "Portfolio", path: "/portfolio" }]),
//           {
//             "@type": "CollectionPage",
//             name: "Portfolio",
//             url: absoluteUrl("/portfolio"),
//             hasPart: projects.map((project) => ({
//               "@type": "CreativeWork",
//               name: `${project.client} — ${project.discipline}`,
//               url: absoluteUrl(`/portfolio/${project.slug}`),
//             })),
//           },
//         ]}
//       />
//
//       <PageHeader
//         eyebrow="Our Portfolio"
//         title={
//           <>
//             Work that makes
//             <br />
//             an <span className="marker">impact.</span>
//           </>
//         }
//         description="A selection of recent projects. Every one of them started with a business problem, not a design brief."
//         crumbs={[{ name: "Portfolio", path: "/portfolio" }]}
//         note={
//           <>
//             Real
//             <br />
//             Projects.
//             <br />
//             Real
//             <br />
//             Growth.
//           </>
//         }
//       />
//
//       <Section tone="paper" padding="md">
//         <Container>
//           <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
//             {projects.map((project) => (
//               <li key={project.slug}>
//                 <Link href={`/portfolio/${project.slug}`} className="group block">
//                   <div
//                     className="relative aspect-[4/3] overflow-hidden rounded-sm"
//                     style={{ backgroundColor: project.tone }}
//                   >
//                     <Image
//                       src={project.image}
//                       alt={`${project.client} — ${project.discipline} project`}
//                       fill
//                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 32vw"
//                       className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
//                     />
//                   </div>
//                   <div className="mt-4 flex items-start justify-between gap-4">
//                     <div>
//                       <h2 className="font-display text-[1.05rem] font-extrabold tracking-tight">
//                         {project.client}
//                       </h2>
//                       <p className="mt-1 text-xs text-muted">
//                         {project.discipline} · {project.year}
//                       </p>
//                     </div>
//                     <ArrowBadge tone="light" className="size-8" />
//                   </div>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </Container>
//       </Section>
//
//       <TrustedBy />
//       <CtaBand />
//     </>
//   );
// }
