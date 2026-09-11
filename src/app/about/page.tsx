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
// import { StatsBar } from "@/components/home/StatsBar";
// import { Container, Eyebrow, Section } from "@/components/ui/Section";
// import { ButtonLink } from "@/components/ui/Button";
// import { JsonLd } from "@/components/seo/JsonLd";
// import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
// import { processSteps, values } from "@/content/company";
//
// export const metadata: Metadata = buildMetadata({
//   title: "About Squareit Solutions — Digital Growth Partner in Lucknow",
//   description:
//     "Squareit Solutions is a Lucknow-based digital agency combining strategy, technology, marketing and creative to help ambitious businesses grow. Meet the team and the way we work.",
//   path: "/about",
// });
//
// const badgeTones = {
//   green: "bg-brand-green",
//   red: "bg-brand-red",
//   yellow: "bg-brand-yellow text-ink",
//   blue: "bg-brand-blue",
// } as const;
//
// export default function AboutPage() {
//   return (
//     <>
//       <JsonLd schema={breadcrumbSchema([{ name: "About", path: "/about" }])} />
//
//       <PageHeader
//         eyebrow="Who We Are"
//         title={
//           <>
//             We build the growth
//             <br />
//             engine behind <span className="marker">good brands.</span>
//           </>
//         }
//         description="Squareit Solutions started with a simple frustration: businesses were buying marketing activity instead of marketing outcomes. We built an agency around the opposite idea — strategy first, measurable results, and a team you can actually reach."
//         crumbs={[{ name: "About", path: "/about" }]}
//         note={
//           <>
//             Strategy
//             <br />
//             First.
//             <br />
//             Always.
//           </>
//         }
//       >
//         <div className="mt-8 flex flex-wrap gap-3">
//           <ButtonLink href="/contact" variant="dark">
//             Work With Us
//           </ButtonLink>
//           <ButtonLink href="/about/team" variant="outline">
//             Meet the Team
//           </ButtonLink>
//         </div>
//       </PageHeader>
//
//       <StatsBar />
//
//       {/* Story */}
//       <Section tone="paper" padding="md">
//         <Container>
//           <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
//             <div className="lg:col-span-5">
//               <Eyebrow>Our Story</Eyebrow>
//               <h2 className="mt-5 text-display-md">
//                 From a small team in Lucknow to a full-service growth partner.
//               </h2>
//             </div>
//             <div className="space-y-5 text-[0.95rem] leading-relaxed text-ink-soft lg:col-span-7">
//               <p>
//                 We began as a handful of marketers and developers taking on projects other agencies
//                 called too small to bother with. What we found was that the fundamentals were
//                 usually missing — sites that could not be crawled, campaigns with no tracking, brands
//                 with no system behind them.
//               </p>
//               <p>
//                 So we built a practice around fixing the fundamentals first, then compounding them.
//                 Today Squareit brings together four disciplines under one roof — strategy, marketing,
//                 technology and creative — which means the people planning your campaigns sit next to
//                 the people building your website.
//               </p>
//               <p>
//                 We have delivered more than 1,199 projects for 620+ clients across healthcare,
//                 education, retail, real estate and professional services. The scale changed. The way
//                 we work has not.
//               </p>
//             </div>
//           </div>
//         </Container>
//       </Section>
//
//       {/* Values */}
//       <Section tone="ink" padding="md">
//         <Container>
//           <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
//             <div className="lg:col-span-4">
//               <Eyebrow className="text-white/45">What We Stand For</Eyebrow>
//               <h2 className="mt-5 text-display-md text-white">
//                 Four principles we do not negotiate on.
//               </h2>
//             </div>
//             <ul className="grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:col-span-8">
//               {values.map((value) => (
//                 <li key={value.title} className="bg-ink p-7">
//                   <h3 className="font-display text-[1.1rem] font-extrabold tracking-tight text-white">
//                     {value.title}
//                   </h3>
//                   <p className="mt-3 text-sm leading-relaxed text-white/60">{value.description}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </Container>
//       </Section>
//
//       {/* Process */}
//       <Section tone="paper" padding="md">
//         <Container>
//           <div className="grid gap-10 lg:grid-cols-12">
//             <div className="lg:col-span-4">
//               <Eyebrow>How We Work</Eyebrow>
//               <h2 className="mt-5 text-display-md">From idea to impact.</h2>
//               <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
//                 Every engagement runs through the same four stages, whether it is a one-page site or
//                 a multi-channel retainer.
//               </p>
//             </div>
//
//             <ol className="grid gap-5 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
//               {processSteps.map((step) => (
//                 <li key={step.number} className="border-t-2 border-line pt-5">
//                   <span
//                     className={`inline-flex size-10 items-center justify-center rounded-full font-display text-[0.75rem] font-extrabold text-white ${
//                       badgeTones[step.accent]
//                     }`}
//                   >
//                     {step.number}
//                   </span>
//                   <h3 className="mt-4 font-display text-[1.05rem] font-extrabold tracking-tight">
//                     {step.title}
//                   </h3>
//                   <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
//                     {step.description}
//                   </p>
//                 </li>
//               ))}
//             </ol>
//           </div>
//         </Container>
//       </Section>
//
//       {/* Sub-page links */}
//       <Section tone="paper-alt" padding="sm">
//         <Container>
//           <div className="grid gap-4 sm:grid-cols-2">
//             {[
//               {
//                 href: "/about/vision-mission",
//                 title: "Vision & Mission",
//                 copy: "What we are building towards and the standard we hold ourselves to.",
//               },
//               {
//                 href: "/about/team",
//                 title: "Our Team",
//                 copy: "The strategists, engineers and designers behind the results.",
//               },
//             ].map((card) => (
//               <Link
//                 key={card.href}
//                 href={card.href}
//                 className="group rounded-sm border border-line bg-white p-7 transition-colors hover:border-ink"
//               >
//                 <h3 className="font-display text-[1.2rem] font-extrabold tracking-tight">
//                   {card.title}
//                 </h3>
//                 <p className="mt-2 text-sm text-muted">{card.copy}</p>
//                 <span className="mt-4 inline-block text-sm font-semibold text-brand-blue">
//                   Read more →
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </Container>
//       </Section>
//
//       <CtaBand />
//     </>
//   );
// }
