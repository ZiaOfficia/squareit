import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/home/CtaBand";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Vision & Mission",
  description:
    "The vision and mission behind Squareit Solutions — making measurable digital growth accessible to ambitious businesses of every size.",
  path: "/about/vision-mission",
});

const pillars = [
  {
    label: "Vision",
    tone: "bg-brand-green",
    heading: "A digital-first future where size is not a disadvantage.",
    body: "We want the small practice, the regional retailer and the first-time founder to compete on the same search results page as the national brand — with the same quality of strategy behind them.",
  },
  {
    label: "Mission",
    tone: "bg-brand-red",
    heading: "Turn digital spend into outcomes our clients can count.",
    body: "Every engagement is built around a number the client cares about: enquiries, bookings, revenue. We report against it honestly, and we change course when it is not moving.",
  },
];

const commitments = [
  "We will tell you when a channel is not worth your budget.",
  "We will hand over every account and asset in your name.",
  "We will show you the same dashboards we use internally.",
  "We will price the outcome, not the hours.",
  "We will keep the team you met on your account.",
  "We will leave your business more capable than we found it.",
];

export default function VisionMissionPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "About", path: "/about" },
          { name: "Vision & Mission", path: "/about/vision-mission" },
        ])}
      />

      <PageHeader
        eyebrow="Vision & Mission"
        title={
          <>
            Why we do
            <br />
            this <span className="marker">work.</span>
          </>
        }
        description="Agencies are easy to start and hard to trust. These are the commitments that decide what we take on, how we price it, and when we walk away."
        crumbs={[
          { name: "About", path: "/about" },
          { name: "Vision & Mission", path: "/about/vision-mission" },
        ]}
      />

      <Section tone="paper" padding="md">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {pillars.map((pillar) => (
              <article key={pillar.label} className="rounded-sm border border-line bg-white p-8 md:p-10">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-[0.625rem] font-bold uppercase tracking-[0.16em] text-white ${pillar.tone}`}
                >
                  {pillar.label}
                </span>
                <h2 className="mt-6 font-display text-[1.5rem] font-extrabold leading-tight tracking-tight md:text-[1.75rem]">
                  {pillar.heading}
                </h2>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">{pillar.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="forest" padding="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow className="text-white/45">Our Commitments</Eyebrow>
              <h2 className="mt-5 text-display-md text-white">
                Six promises, in writing.
              </h2>
            </div>
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:col-span-8">
              {commitments.map((item, index) => (
                <li key={item} className="flex gap-4 border-t border-white/15 pt-5">
                  <span className="font-display text-sm font-extrabold text-brand-yellow">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-white/80">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
