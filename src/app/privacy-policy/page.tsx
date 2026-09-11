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
//   title: "Privacy Policy",
//   description:
//     "How Squareit Solutions collects, uses, stores and protects personal information submitted through squareit.in.",
//   path: "/privacy-policy",
// });
//
// export default function PrivacyPolicyPage() {
//   return (
//     <LegalPage
//       title="Privacy Policy"
//       path="/privacy-policy"
//       updated="1 April 2026"
//       intro="This policy explains what information we collect when you use squareit.in or engage our services, why we collect it, and the choices you have."
//       sections={[
//         {
//           heading: "Information we collect",
//           paragraphs: [
//             "We collect information you give us directly and a limited amount of technical information collected automatically when you browse the site.",
//           ],
//           bullets: [
//             "Contact details you submit through our enquiry or career forms — name, email, phone number and the message itself.",
//             "Business information you share with us during a project.",
//             "Technical data such as IP address, browser type, device type and pages visited, collected through analytics.",
//             "Cookie data, where you have consented to non-essential cookies.",
//           ],
//         },
//         {
//           heading: "How we use your information",
//           paragraphs: [
//             "We use the information to respond to enquiries, deliver the services you have engaged us for, improve the website, and — where you have opted in — send occasional updates.",
//             "We do not sell personal information, and we do not share it with third parties for their own marketing.",
//           ],
//         },
//         {
//           heading: "Legal basis and retention",
//           paragraphs: [
//             "We process information on the basis of your consent, or where processing is necessary to perform a contract with you, or for our legitimate interest in operating and improving our business.",
//             "Enquiry records are retained for up to 24 months. Client project records are retained for the duration of the engagement plus seven years, where required for tax and accounting purposes.",
//           ],
//         },
//         {
//           heading: "Sharing with service providers",
//           paragraphs: [
//             "We use third-party services for hosting, analytics, email delivery and customer relationship management. These providers process data on our instructions and under contract.",
//           ],
//         },
//         {
//           heading: "Your rights",
//           paragraphs: [
//             "You may request access to the personal information we hold about you, ask us to correct it, ask us to delete it, or withdraw consent for marketing at any time.",
//           ],
//           bullets: [
//             `Email ${siteConfig.contact.email} with the subject "Privacy request".`,
//             "We respond to verified requests within 30 days.",
//           ],
//         },
//         {
//           heading: "Cookies",
//           paragraphs: [
//             "Essential cookies keep the site working. Analytics cookies help us understand how the site is used and are only set where permitted. You can clear or block cookies in your browser settings at any time.",
//           ],
//         },
//         {
//           heading: "Contact",
//           paragraphs: [
//             `Questions about this policy can be sent to ${siteConfig.contact.email}, or by post to ${siteConfig.address.street}, ${siteConfig.address.locality}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}.`,
//           ],
//         },
//       ]}
//     />
//   );
// }
