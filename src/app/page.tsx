import type { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { ProcessSplit } from "@/components/home/ProcessPanel";
import { InsightsSection } from "@/components/home/InsightsSection";
import { FaqSection } from "@/components/home/FaqSection";
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

/** Kept in one place: the schema below and the section must show the same set. */
const HOME_FAQ_COUNT = 4;

export default function HomePage() {
  return (
    <>
      <JsonLd schema={faqSchema(faqs.slice(0, HOME_FAQ_COUNT))} />

      {/* Value runs paper → ink → paper → forest → white → blue down the page,
          so each band lands against a different one and the eye keeps moving. */}
      <Hero />
      <StatsBar />
      <ServicesSection />
      <FeaturedWork />
      <ProcessSplit left={<TestimonialSlider />} />
      <InsightsSection />
      <FaqSection count={HOME_FAQ_COUNT} />
      <TrustedBy />
      <CtaBand />
    </>
  );
}
