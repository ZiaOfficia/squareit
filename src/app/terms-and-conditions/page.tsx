// TEMPORARILY DISABLED — only the homepage is live for now.
// To restore: delete this stub (down to the "Original page" line) and uncomment the code below.
import { notFound } from "next/navigation";

export default function DisabledPage() {
  notFound();
}

// ─── Original page ───────────────────────────────────────────────
// import type { Metadata } from "next";
// import { LegalPage } from "@/components/layout/LegalPage";
// import { buildMetadata } from "@/lib/seo";
// import { siteConfig } from "@/lib/site";
//
// export const metadata: Metadata = buildMetadata({
//   title: "Terms & Conditions",
//   description:
//     "The terms governing use of squareit.in and the services provided by Squareit Solutions.",
//   path: "/terms-and-conditions",
// });
//
// export default function TermsPage() {
//   return (
//     <LegalPage
//       title="Terms & Conditions"
//       path="/terms-and-conditions"
//       updated="1 April 2026"
//       intro="These terms govern your use of this website and any services you engage Squareit Solutions to provide. By using the site you accept them."
//       sections={[
//         {
//           heading: "Use of this website",
//           paragraphs: [
//             "You may browse and use this site for lawful purposes. You may not attempt to gain unauthorised access to any part of it, interfere with its operation, or use automated means to extract content at scale without written permission.",
//           ],
//         },
//         {
//           heading: "Scope of services",
//           paragraphs: [
//             "Services are defined in a separate written proposal or statement of work agreed with you. Nothing on this website constitutes an offer or a guarantee of specific results.",
//             "Digital marketing outcomes depend on factors outside our control — including search engine algorithms, competitor activity and market conditions. We commit to method and effort, not to a guaranteed ranking or revenue figure.",
//           ],
//         },
//         {
//           heading: "Client responsibilities",
//           paragraphs: [
//             "Timely delivery depends on timely input. You agree to provide access, approvals, content and feedback within the timeframes set out in the project plan.",
//           ],
//           bullets: [
//             "Provide accurate business information and required access credentials.",
//             "Respond to approval requests within agreed review windows.",
//             "Ensure any materials you supply do not infringe third-party rights.",
//           ],
//         },
//         {
//           heading: "Fees and payment",
//           paragraphs: [
//             "Fees, milestones and payment terms are set out in your proposal. Unless agreed otherwise, invoices are payable within 15 days. We reserve the right to pause work on overdue accounts after written notice.",
//           ],
//         },
//         {
//           heading: "Intellectual property",
//           paragraphs: [
//             "On full payment, ownership of final deliverables created specifically for you transfers to you. We retain ownership of our pre-existing tools, frameworks and methodologies, and the right to display completed work in our portfolio unless you ask us in writing not to.",
//           ],
//         },
//         {
//           heading: "Confidentiality",
//           paragraphs: [
//             "Each party agrees to keep the other's confidential information private and to use it only for the purpose of the engagement.",
//           ],
//         },
//         {
//           heading: "Limitation of liability",
//           paragraphs: [
//             "To the extent permitted by law, our total liability arising from an engagement is limited to the fees paid for the specific service giving rise to the claim. We are not liable for indirect or consequential losses, including lost profits or lost data.",
//           ],
//         },
//         {
//           heading: "Governing law",
//           paragraphs: [
//             `These terms are governed by the laws of India, and the courts of Lucknow, Uttar Pradesh have exclusive jurisdiction. Questions can be sent to ${siteConfig.contact.email}.`,
//           ],
//         },
//       ]}
//     />
//   );
// }
