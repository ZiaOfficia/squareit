import type { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { ProcessSplit } from "@/components/home/ProcessPanel";
import { InsightsSection } from "@/components/home/InsightsSection";
import { TrustedBy } from "@/components/home/TrustedBy";
import { CtaBand } from "@/components/home/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { faqs } from "@/content/company";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  // Homepage keeps the brand-led title rather than the "%s | Squareit" template.
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd schema={faqSchema(faqs.slice(0, 4))} />

      <Hero />
      <StatsBar />
      <ServicesSection />
      <FeaturedWork />
      <ProcessSplit left={<TestimonialSlider />} />
      <InsightsSection />
      <TrustedBy />
      <CtaBand />
    </>
  );
}
