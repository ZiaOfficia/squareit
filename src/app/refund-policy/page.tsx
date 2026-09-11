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
//   title: "Refund Policy",
//   description:
//     "How refunds, cancellations and project terminations are handled at Squareit Solutions.",
//   path: "/refund-policy",
// });
//
// export default function RefundPolicyPage() {
//   return (
//     <LegalPage
//       title="Refund Policy"
//       path="/refund-policy"
//       updated="1 April 2026"
//       intro="We would rather fix a problem than process a refund — but where a refund is the right outcome, this is how it works."
//       sections={[
//         {
//           heading: "Project-based work",
//           paragraphs: [
//             "Project engagements are billed against milestones. If you cancel mid-project, you are billed for work completed and in progress up to the cancellation date; any remaining balance from an advance is refunded within 15 business days.",
//             "Advance payments covering discovery and strategy are non-refundable once that phase has started, as the work and the deliverable are produced immediately.",
//           ],
//         },
//         {
//           heading: "Monthly retainers",
//           paragraphs: [
//             "Retainers run month to month after any agreed minimum term. Either party may cancel with 30 days' written notice. The current month is not pro-rated, as resources are allocated at the start of each cycle.",
//           ],
//         },
//         {
//           heading: "Media and third-party spend",
//           paragraphs: [
//             "Advertising spend paid to platforms such as Google or Meta, and third-party costs such as domains, hosting, licences and stock assets, are non-refundable once committed. Any unspent balance held by us is returned in full.",
//           ],
//         },
//         {
//           heading: "When we will refund in full",
//           paragraphs: ["We refund the full amount in these situations:"],
//           bullets: [
//             "We have not started work and you cancel within 7 days of payment.",
//             "We are unable to deliver the agreed scope and no acceptable alternative is available.",
//             "A duplicate or incorrect payment has been processed.",
//           ],
//         },
//         {
//           heading: "How to request a refund",
//           paragraphs: [
//             `Email ${siteConfig.contact.email} with your invoice number and the reason for the request. We acknowledge within 2 business days and resolve within 15 business days. Approved refunds are returned to the original payment method.`,
//           ],
//         },
//         {
//           heading: "Disputes",
//           paragraphs: [
//             "If you are unhappy with the outcome of a refund decision, ask for it to be escalated to a director. We will review it and reply in writing.",
//           ],
//         },
//       ]}
//     />
//   );
// }
