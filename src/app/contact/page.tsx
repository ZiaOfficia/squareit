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
// import { ContactForm } from "@/components/contact/ContactForm";
// import { Container, Eyebrow, Section } from "@/components/ui/Section";
// import { MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
// import { JsonLd } from "@/components/seo/JsonLd";
// import { breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";
// import { siteConfig } from "@/lib/site";
// import { faqs } from "@/content/company";
//
// export const metadata: Metadata = buildMetadata({
//   title: "Contact Squareit Solutions — Lucknow Digital Agency",
//   description:
//     "Talk to Squareit Solutions about SEO, paid media, web development or brand design. Call +91 9335 123 456, email info@squareit.in, or visit our Aliganj, Lucknow office.",
//   path: "/contact",
//   keywords: [
//     "contact digital marketing agency Lucknow",
//     "Squareit Solutions contact",
//     "digital marketing consultation Lucknow",
//   ],
// });
//
// export default function ContactPage() {
//   const { address, contact, hours } = siteConfig;
//
//   return (
//     <>
//       <JsonLd
//         schema={[
//           breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
//           faqSchema(faqs),
//         ]}
//       />
//
//       <PageHeader
//         eyebrow="Contact Us"
//         title={
//           <>
//             Let&apos;s grow
//             <br />
//             <span className="marker">together.</span>
//           </>
//         }
//         description="Tell us where your business is now and where you want it to be. We will come back with an honest view of what it takes to get there — no obligation."
//         crumbs={[{ name: "Contact", path: "/contact" }]}
//         note={
//           <>
//             Free
//             <br />
//             Consultation
//           </>
//         }
//       />
//
//       <Section tone="paper" padding="md">
//         <Container>
//           <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
//             {/* Form */}
//             <div className="lg:col-span-7">
//               <Eyebrow>Send an Enquiry</Eyebrow>
//               <h2 className="mt-4 text-display-md">Start a project.</h2>
//               <div className="mt-8">
//                 <ContactForm />
//               </div>
//             </div>
//
//             {/* Details */}
//             <aside className="lg:col-span-5">
//               <div className="rounded-sm border border-line bg-white p-7">
//                 <Eyebrow>Contact Details</Eyebrow>
//
//                 <ul className="mt-6 space-y-6">
//                   <li className="flex gap-4">
//                     <PhoneIcon className="mt-0.5 size-5 shrink-0 text-brand-green" />
//                     <div>
//                       <p className="text-xs uppercase tracking-[0.12em] text-muted">Call us</p>
//                       <a
//                         href={`tel:${contact.phonePrimaryHref}`}
//                         className="mt-1 block font-display text-[1.05rem] font-extrabold tracking-tight"
//                       >
//                         {contact.phonePrimary}
//                       </a>
//                       <a
//                         href={`tel:${contact.phoneSecondaryHref}`}
//                         className="mt-0.5 block text-sm text-muted hover:text-ink"
//                       >
//                         {contact.phoneSecondary}
//                       </a>
//                     </div>
//                   </li>
//
//                   <li className="flex gap-4">
//                     <MailIcon className="mt-0.5 size-5 shrink-0 text-brand-red" />
//                     <div>
//                       <p className="text-xs uppercase tracking-[0.12em] text-muted">Email us</p>
//                       <a
//                         href={`mailto:${contact.email}`}
//                         className="mt-1 block font-display text-[1.05rem] font-extrabold tracking-tight"
//                       >
//                         {contact.email}
//                       </a>
//                       <a
//                         href={`mailto:${contact.careersEmail}`}
//                         className="mt-0.5 block text-sm text-muted hover:text-ink"
//                       >
//                         {contact.careersEmail} (careers)
//                       </a>
//                     </div>
//                   </li>
//
//                   <li className="flex gap-4">
//                     <PinIcon className="mt-0.5 size-5 shrink-0 text-brand-blue" />
//                     <div>
//                       <p className="text-xs uppercase tracking-[0.12em] text-muted">Visit us</p>
//                       <address className="mt-1 not-italic text-sm leading-relaxed text-ink-soft">
//                         {address.street}
//                         <br />
//                         {address.locality}
//                         <br />
//                         {address.city}, {address.region} {address.postalCode}
//                       </address>
//                       <a
//                         href={address.mapsUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="mt-2 inline-block text-sm font-semibold text-brand-blue underline underline-offset-4"
//                       >
//                         Open in Google Maps
//                       </a>
//                     </div>
//                   </li>
//                 </ul>
//
//                 <div className="mt-7 border-t border-line pt-5">
//                   <p className="text-xs uppercase tracking-[0.12em] text-muted">Office hours</p>
//                   <p className="mt-1.5 text-sm text-ink-soft">
//                     Monday – Saturday · {hours.opens} – {hours.closes} IST
//                   </p>
//                 </div>
//               </div>
//             </aside>
//           </div>
//         </Container>
//       </Section>
//
//       {/* FAQs */}
//       <Section tone="paper-alt" padding="md">
//         <Container>
//           <div className="grid gap-10 lg:grid-cols-12">
//             <div className="lg:col-span-4">
//               <Eyebrow>FAQs</Eyebrow>
//               <h2 className="mt-4 text-display-md">Before you ask.</h2>
//             </div>
//             <div className="lg:col-span-8">
//               <dl className="divide-y divide-line border-y border-line">
//                 {faqs.map((faq) => (
//                   <div key={faq.question} className="py-6">
//                     <dt className="font-display text-[1.05rem] font-extrabold tracking-tight">
//                       {faq.question}
//                     </dt>
//                     <dd className="mt-2.5 text-sm leading-relaxed text-muted">{faq.answer}</dd>
//                   </div>
//                 ))}
//               </dl>
//             </div>
//           </div>
//         </Container>
//       </Section>
//     </>
//   );
// }
