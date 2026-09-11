// TEMPORARILY DISABLED — only the homepage is live for now.
// To restore: delete this stub (down to the "Original page" line) and uncomment the code below.
import { notFound } from "next/navigation";

export default function DisabledPage() {
  notFound();
}

// ─── Original page ───────────────────────────────────────────────
// import type { Metadata } from "next";
//
// import { PageHeader } from "@/components/layout/PageHeader";
// import { CtaBand } from "@/components/home/CtaBand";
// import { Container, Section } from "@/components/ui/Section";
// import { JsonLd } from "@/components/seo/JsonLd";
// import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
// import { team } from "@/content/company";
//
// export const metadata: Metadata = buildMetadata({
//   title: "Our Team",
//   description:
//     "Meet the strategists, engineers, marketers and designers behind Squareit Solutions — the people who run your campaigns and build your website.",
//   path: "/about/team",
// });
//
// const tones = ["#0f8a48", "#e0322a", "#1553cc", "#ffc933", "#0e3a2a", "#101010"];
//
// export default function TeamPage() {
//   return (
//     <>
//       <JsonLd
//         schema={breadcrumbSchema([
//           { name: "About", path: "/about" },
//           { name: "Our Team", path: "/about/team" },
//         ])}
//       />
//
//       <PageHeader
//         eyebrow="Our Team"
//         title={
//           <>
//             The people
//             <br />
//             behind the <span className="marker">results.</span>
//           </>
//         }
//         description="No account-manager wall. The specialists who plan your work are the ones who deliver it, and you talk to them directly."
//         crumbs={[
//           { name: "About", path: "/about" },
//           { name: "Our Team", path: "/about/team" },
//         ]}
//         note={
//           <>
//             Small team.
//             <br />
//             Big output.
//           </>
//         }
//       />
//
//       <Section tone="paper" padding="md">
//         <Container>
//           <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
//             {team.map((member, index) => (
//               <li key={member.name}>
//                 <div
//                   className="flex aspect-[4/5] items-end justify-center overflow-hidden rounded-sm"
//                   style={{ backgroundColor: tones[index % tones.length] }}
//                 >
//                   {/* Swap for a real portrait via next/image once photography is ready. */}
//                   <svg viewBox="0 0 120 150" className="h-[86%] w-auto opacity-90" aria-hidden="true">
//                     <circle cx="60" cy="46" r="26" fill="rgba(255,255,255,0.9)" />
//                     <path
//                       d="M6 150c4-34 26-52 54-52s50 18 54 52z"
//                       fill="rgba(255,255,255,0.9)"
//                     />
//                   </svg>
//                 </div>
//                 <h2 className="mt-5 font-display text-[1.15rem] font-extrabold tracking-tight">
//                   {member.name}
//                 </h2>
//                 <p className="mt-1 text-[0.8125rem] font-semibold text-brand-blue">{member.role}</p>
//                 <p className="mt-2.5 text-sm leading-relaxed text-muted">{member.bio}</p>
//               </li>
//             ))}
//           </ul>
//         </Container>
//       </Section>
//
//       <CtaBand
//         eyebrow="Join Us"
//         heading="Want to build"
//         highlight="things that actually work?"
//         body="We are usually hiring for strategy, engineering and design roles in Lucknow."
//         ctaLabel="See Open Roles"
//         ctaHref="/career"
//       />
//     </>
//   );
// }
