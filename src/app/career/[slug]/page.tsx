// TEMPORARILY DISABLED — only the homepage is live for now.
// To restore: delete this stub (down to the "Original page" line) and uncomment the code below.
import { notFound } from "next/navigation";

export default function DisabledPage() {
  notFound();
}

// ─── Original page ───────────────────────────────────────────────
// import type { Metadata } from "next";
// import Link from "next/link";
// import { notFound } from "next/navigation";
//
// import { PageHeader } from "@/components/layout/PageHeader";
// import { Container, Eyebrow, Section } from "@/components/ui/Section";
// import { ButtonLink } from "@/components/ui/Button";
// import { CheckIcon } from "@/components/ui/Icons";
// import { JsonLd } from "@/components/seo/JsonLd";
// import { breadcrumbSchema, buildMetadata, jobPostingSchema } from "@/lib/seo";
// import { getOpening, openings } from "@/content/company";
// import { siteConfig } from "@/lib/site";
//
// type Params = { slug: string };
//
// export function generateStaticParams(): Params[] {
//   return openings.map((opening) => ({ slug: opening.slug }));
// }
//
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<Params>;
// }): Promise<Metadata> {
//   const { slug } = await params;
//   const opening = getOpening(slug);
//
//   if (!opening) {
//     return buildMetadata({
//       title: "Role not found",
//       description: "This role could not be found.",
//       path: `/career/${slug}`,
//       noIndex: true,
//     });
//   }
//
//   return buildMetadata({
//     title: `${opening.title} — ${opening.location}`,
//     description: opening.summary,
//     path: `/career/${opening.slug}`,
//   });
// }
//
// export default async function CareerDetailPage({ params }: { params: Promise<Params> }) {
//   const { slug } = await params;
//   const opening = getOpening(slug);
//
//   if (!opening) notFound();
//
//   const applyHref = `mailto:${siteConfig.contact.careersEmail}?subject=${encodeURIComponent(
//     `Application — ${opening.title}`,
//   )}`;
//
//   return (
//     <>
//       <JsonLd
//         schema={[
//           breadcrumbSchema([
//             { name: "Career", path: "/career" },
//             { name: opening.title, path: `/career/${opening.slug}` },
//           ]),
//           jobPostingSchema({
//             title: opening.title,
//             description: opening.summary,
//             employmentType: opening.type,
//             // Replace with the real posting date once roles come from the CMS.
//             datePosted: new Date().toISOString().slice(0, 10),
//             location: opening.location,
//           }),
//         ]}
//       />
//
//       <PageHeader
//         eyebrow={opening.department}
//         title={opening.title}
//         description={opening.summary}
//         crumbs={[
//           { name: "Career", path: "/career" },
//           { name: opening.title, path: `/career/${opening.slug}` },
//         ]}
//       >
//         <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
//           {[
//             { label: "Location", value: opening.location },
//             { label: "Type", value: opening.type },
//             { label: "Experience", value: opening.experience },
//           ].map((item) => (
//             <div key={item.label}>
//               <dt className="eyebrow">{item.label}</dt>
//               <dd className="mt-1.5 font-display text-[0.95rem] font-extrabold tracking-tight">
//                 {item.value}
//               </dd>
//             </div>
//           ))}
//         </dl>
//
//         <ButtonLink href={applyHref} variant="dark" className="mt-8">
//           Apply for this role
//         </ButtonLink>
//       </PageHeader>
//
//       <Section tone="paper" padding="md">
//         <Container>
//           <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
//             <div>
//               <Eyebrow>What you&apos;ll do</Eyebrow>
//               <ul className="mt-5 space-y-4">
//                 {opening.responsibilities.map((item) => (
//                   <li key={item} className="flex gap-3">
//                     <CheckIcon className="mt-1 size-4 shrink-0 text-brand-green" />
//                     <span className="text-[0.95rem] leading-relaxed text-ink-soft">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//
//             <div>
//               <Eyebrow>What we&apos;re looking for</Eyebrow>
//               <ul className="mt-5 space-y-4">
//                 {opening.requirements.map((item) => (
//                   <li key={item} className="flex gap-3">
//                     <CheckIcon className="mt-1 size-4 shrink-0 text-brand-blue" />
//                     <span className="text-[0.95rem] leading-relaxed text-ink-soft">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//
//           <div className="mt-14 rounded-sm border border-line bg-white p-8">
//             <h2 className="font-display text-[1.25rem] font-extrabold tracking-tight">
//               How to apply
//             </h2>
//             <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
//               Email your CV and a short note about something you shipped recently — what it was,
//               what you owned, and what happened after it went live. Portfolios and links welcome.
//             </p>
//             <div className="mt-6 flex flex-wrap gap-3">
//               <ButtonLink href={applyHref} variant="dark" size="md">
//                 Email {siteConfig.contact.careersEmail}
//               </ButtonLink>
//               <Link
//                 href="/career"
//                 className="inline-flex h-11 items-center rounded-sm border border-line px-5 text-sm font-semibold transition-colors hover:border-ink"
//               >
//                 See all roles
//               </Link>
//             </div>
//           </div>
//         </Container>
//       </Section>
//     </>
//   );
// }
