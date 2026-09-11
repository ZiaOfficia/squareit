// TEMPORARILY DISABLED — only the homepage is live for now.
// To restore: delete this stub (down to the "Original page" line) and uncomment the code below.
import { notFound } from "next/navigation";

export default function DisabledPage() {
  notFound();
}

// ─── Original page ───────────────────────────────────────────────
// import type { Metadata } from "next";
// import Link from "next/link";
//
// import { PageHeader } from "@/components/layout/PageHeader";
// import { CtaBand } from "@/components/home/CtaBand";
// import { Container, Eyebrow, Section } from "@/components/ui/Section";
// import { ArrowUpRight } from "@/components/ui/Icons";
// import { JsonLd } from "@/components/seo/JsonLd";
// import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
// import { openings } from "@/content/company";
// import { siteConfig } from "@/lib/site";
//
// export const metadata: Metadata = buildMetadata({
//   title: "Careers at Squareit Solutions — Jobs in Lucknow",
//   description:
//     "Open roles in SEO, paid media, web development and design at Squareit Solutions, Lucknow. Build work that gets measured, with a team that ships.",
//   path: "/career",
//   keywords: ["digital marketing jobs Lucknow", "SEO jobs Lucknow", "web developer jobs Lucknow"],
// });
//
// const perks = [
//   { title: "Work that gets measured", copy: "You will see the impact of what you ship, every month." },
//   { title: "Learning budget", copy: "Courses, certifications and conference tickets on us." },
//   { title: "Real ownership", copy: "You run your accounts. No layers between you and the client." },
//   { title: "Flexible hybrid", copy: "Two days remote a week for most roles, once you're settled." },
// ];
//
// export default function CareerPage() {
//   return (
//     <>
//       <JsonLd schema={breadcrumbSchema([{ name: "Career", path: "/career" }])} />
//
//       <PageHeader
//         eyebrow="Careers"
//         title={
//           <>
//             Build things
//             <br />
//             that <span className="marker">actually work.</span>
//           </>
//         }
//         description="We are a small team that ships a lot. If you would rather own an outcome than sit in a process, you will like it here."
//         crumbs={[{ name: "Career", path: "/career" }]}
//         note={
//           <>
//             Come
//             <br />
//             Grow
//             <br />
//             With Us
//           </>
//         }
//       />
//
//       {/* Openings */}
//       <Section tone="paper" padding="md">
//         <Container>
//           <Eyebrow>Open Roles</Eyebrow>
//           <h2 className="mt-4 text-display-md">{openings.length} positions open.</h2>
//
//           <ul className="mt-10 divide-y divide-line border-y border-line">
//             {openings.map((opening) => (
//               <li key={opening.slug}>
//                 <Link
//                   href={`/career/${opening.slug}`}
//                   className="group flex flex-col gap-4 py-7 transition-colors hover:bg-white sm:flex-row sm:items-center sm:justify-between sm:gap-8"
//                 >
//                   <div>
//                     <h3 className="font-display text-[1.25rem] font-extrabold tracking-tight">
//                       {opening.title}
//                     </h3>
//                     <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
//                       {opening.summary}
//                     </p>
//                   </div>
//
//                   <div className="flex shrink-0 items-center gap-6">
//                     <dl className="text-right">
//                       <dd className="text-sm font-semibold">{opening.location}</dd>
//                       <dt className="mt-1 text-xs text-muted">
//                         {opening.type} · {opening.experience}
//                       </dt>
//                     </dl>
//                     <span className="inline-flex size-10 items-center justify-center rounded-full border border-line text-ink transition-transform duration-300 group-hover:rotate-45 group-hover:border-ink">
//                       <ArrowUpRight className="size-4" />
//                     </span>
//                   </div>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//
//           <p className="mt-8 text-sm text-muted">
//             Nothing that fits?{" "}
//             <a
//               href={`mailto:${siteConfig.contact.careersEmail}`}
//               className="font-semibold text-brand-blue underline underline-offset-4"
//             >
//               Send us your portfolio anyway
//             </a>{" "}
//             — we keep good people on file.
//           </p>
//         </Container>
//       </Section>
//
//       {/* Perks */}
//       <Section tone="ink" padding="md">
//         <Container>
//           <div className="grid gap-10 lg:grid-cols-12">
//             <div className="lg:col-span-4">
//               <Eyebrow className="text-white/45">Why Squareit</Eyebrow>
//               <h2 className="mt-4 text-display-md text-white">What you get.</h2>
//             </div>
//             <ul className="grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:col-span-8">
//               {perks.map((perk) => (
//                 <li key={perk.title} className="bg-ink p-7">
//                   <h3 className="font-display text-[1.05rem] font-extrabold tracking-tight text-white">
//                     {perk.title}
//                   </h3>
//                   <p className="mt-2.5 text-sm leading-relaxed text-white/60">{perk.copy}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </Container>
//       </Section>
//
//       <CtaBand
//         eyebrow="Apply Today"
//         heading="Think you'd be"
//         highlight="a good fit here?"
//         body="Send your CV and a line about what you have shipped recently. We read every application."
//         ctaLabel="Email Your CV"
//         ctaHref={`mailto:${siteConfig.contact.careersEmail}`}
//       />
//     </>
//   );
// }
