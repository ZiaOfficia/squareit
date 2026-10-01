import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/home/CtaBand";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Container, Section } from "@/components/ui/Section";
import { ArrowBadge } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { TiltCard } from "@/components/motion/TiltCard";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { projects } from "@/content/work";
import { absoluteUrl } from "@/lib/site";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio — Websites, Campaigns & Brand Work",
  description:
    "Selected websites, digital marketing campaigns and brand identity work delivered by Squareit Solutions for clients across healthcare, retail, education and professional services.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([{ name: "Portfolio", path: "/portfolio" }]),
          {
            "@type": "CollectionPage",
            name: "Portfolio",
            url: absoluteUrl("/portfolio"),
            hasPart: projects.map((project) => ({
              "@type": "CreativeWork",
              name: `${project.client} — ${project.discipline}`,
              url: absoluteUrl(`/portfolio/${project.slug}`),
            })),
          },
        ]}
      />

      <PageHeader
        eyebrow="Our Portfolio"
        title={
          <>
            Work that makes
            <br />
            an <span className="marker">impact.</span>
          </>
        }
        description="A selection of recent projects. Every one of them started with a business problem, not a design brief."
        crumbs={[{ name: "Portfolio", path: "/portfolio" }]}
        accent="blue"
        note={
          <>
            Real
            <br />
            Projects.
            <br />
            Real
            <br />
            Growth.
          </>
        }
      />

      <Section tone="paper" padding="md">
        <Container>
          <Stagger as="ul" className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <StaggerItem as="li" key={project.slug}>
                <TiltCard strength={4}>
                <Link href={`/portfolio/${project.slug}`} className="group block">
                  <ParallaxImage
                    src={project.image}
                    alt={`${project.client} — ${project.discipline} project`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 32vw"
                    className="aspect-[4/3] rounded-sm"
                    background={project.tone}
                  />
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-[1.05rem] font-extrabold tracking-tight">
                        {project.client}
                      </h2>
                      <p className="mt-1 text-xs text-muted">
                        {project.discipline} · {project.year}
                      </p>
                    </div>
                    <ArrowBadge tone="light" className="size-8" />
                  </div>
                </Link>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <TrustedBy />
      <CtaBand />
    </>
  );
}
