import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/layout/PageHeader";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { CtaBand } from "@/components/home/CtaBand";
import { Container, Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { getProject, projects } from "@/content/work";
import { absoluteUrl } from "@/lib/site";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return buildMetadata({
      title: "Project not found",
      description: "This project could not be found.",
      path: `/portfolio/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${project.client} — ${project.discipline}`,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
    image: project.image,
  });
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const more = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Portfolio", path: "/portfolio" },
            { name: project.client, path: `/portfolio/${project.slug}` },
          ]),
          {
            "@type": "CreativeWork",
            name: project.title,
            about: project.client,
            url: absoluteUrl(`/portfolio/${project.slug}`),
            image: absoluteUrl(project.image),
            dateCreated: project.year,
            creator: { "@id": absoluteUrl("/#organization") },
          },
        ]}
      />

      <PageHeader
        accent="blue"
        eyebrow={project.discipline}
        title={project.title}
        description={project.summary}
        crumbs={[
          { name: "Portfolio", path: "/portfolio" },
          { name: project.client, path: `/portfolio/${project.slug}` },
        ]}
      >
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {[
            { label: "Client", value: project.client },
            { label: "Discipline", value: project.discipline },
            { label: "Year", value: project.year },
          ].map((item) => (
            <div key={item.label}>
              <dt className="eyebrow">{item.label}</dt>
              <dd className="mt-1.5 font-display text-[0.95rem] font-extrabold tracking-tight">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <Section tone="paper" padding="md">
        <Container>
          <ParallaxImage
                      src={project.image}
                      alt={`${project.client} project preview`}
                      sizes="100vw"
                      className="aspect-[16/9] rounded-sm"
                      background={project.tone}
                    />

          <div className="mx-auto mt-12 max-w-2xl space-y-5 text-[0.95rem] leading-relaxed text-ink-soft">
            <p>{project.summary}</p>
            <p>
              We started by mapping how {project.client}&apos;s customers actually decide, then
              rebuilt the experience around that path. Design, content and tracking were planned
              together so the result could be measured from day one.
            </p>
            <p>
              Want something similar for your business?{" "}
              <Link href="/contact" className="font-semibold text-brand-blue underline underline-offset-4">
                Start a conversation
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper-alt" padding="md">
        <Container>
          <p className="eyebrow">More Work</p>
          <Stagger as="ul" className="mt-6 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((item) => (
              <StaggerItem as="li" key={item.slug}>
                <Link href={`/portfolio/${item.slug}`} className="group block">
                  <ParallaxImage
                      src={item.image}
                      alt={`${item.client} project`}
                      sizes="(max-width: 640px) 100vw, 32vw"
                      className="aspect-[4/3] rounded-sm"
                      background={item.tone}
                    />
                  <h2 className="mt-4 font-display text-[0.95rem] font-extrabold tracking-tight">
                    {item.client}
                  </h2>
                  <p className="mt-1 text-xs text-muted">{item.discipline}</p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
