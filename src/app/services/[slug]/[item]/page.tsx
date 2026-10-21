import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/home/CtaBand";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { ArrowBadge, ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { JsonLd } from "@/components/seo/JsonLd";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { buildMetadata, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { getServiceItem, serviceCategories } from "@/content/services";
import { serviceDetails } from "@/content/serviceDetails";
import { processSteps } from "@/content/company";
import { getProject, type Project } from "@/content/work";

type Params = { slug: string; item: string };

/** Pre-renders a page for every individual service at build time. */
export function generateStaticParams(): Params[] {
  return serviceCategories.flatMap((category) =>
    category.items.map((item) => ({ slug: category.slug, item: item.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug, item: itemSlug } = await params;
  const found = getServiceItem(slug, itemSlug);

  if (!found) {
    return buildMetadata({
      title: "Service not found",
      description: "This service page could not be found.",
      path: `/services/${slug}/${itemSlug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${found.item.title} Services in Lucknow`,
    description: found.item.summary,
    path: `/services/${found.category.slug}/${found.item.slug}`,
    keywords: [found.item.title.toLowerCase(), `${found.item.title.toLowerCase()} lucknow`],
  });
}

const accentTones = {
  green: "bg-brand-green",
  red: "bg-brand-red",
  blue: "bg-brand-blue",
} as const;

export default async function ServiceItemPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug, item: itemSlug } = await params;
  const found = getServiceItem(slug, itemSlug);

  if (!found) notFound();

  const { category, item } = found;
  const detail = serviceDetails[item.slug];
  const path = `/services/${category.slug}/${item.slug}`;
  const work = (detail?.work ?? [])
    .map((projectSlug) => getProject(projectSlug))
    .filter((project): project is Project => Boolean(project));
  const siblings = category.items.filter((entry) => entry.slug !== item.slug);

  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: category.title, path: `/services/${category.slug}` },
            { name: item.title, path },
          ]),
          serviceSchema({ name: item.title, description: item.summary, path }),
        ]}
      />

      <PageHeader
        accent={category.accent}
        eyebrow={`${category.title} — Services`}
        title={item.title}
        description={item.summary}
        crumbs={[
          { name: "Services", path: "/services" },
          { name: category.title, path: `/services/${category.slug}` },
          { name: item.title, path },
        ]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact" variant="dark">
            Get a Proposal
          </ButtonLink>
          <ButtonLink href="/portfolio" variant="outline">
            See Our Work
          </ButtonLink>
        </div>
      </PageHeader>

      {/* Overview + deliverables */}
      {detail ? (
        <Section tone="paper" padding="md">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <Eyebrow>Overview</Eyebrow>
                <h2 className="mt-4 text-display-md">What is {item.title.replace(/ \(.*\)$/, "")}?</h2>
                <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-muted">
                  {detail.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-5">
                <div className="rounded-sm border border-line bg-white p-7">
                  <p className="eyebrow">What you get</p>
                  <ul className="mt-5 space-y-3.5">
                    {detail.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full text-white ${accentTones[category.accent]}`}
                        >
                          <CheckIcon className="size-3" />
                        </span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* How it helps */}
      {detail ? (
        <Section tone="ink" padding="md">
          <Container>
            <Eyebrow className="text-white/60">How it helps</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-display-md text-white">
              What {item.title.replace(/ \(.*\)$/, "").toLowerCase()} does for your business.
            </h2>
            <Stagger as="ul" className="mt-10 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {detail.benefits.map((benefit, index) => (
                <StaggerItem as="li" key={benefit.title} className="bg-ink p-7">
                  <span className="font-display text-sm font-extrabold text-brand-yellow">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-[1.05rem] font-extrabold tracking-tight text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{benefit.description}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>
      ) : null}

      {/* Portfolio */}
      {work.length > 0 ? (
        <Section tone="paper" padding="md">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Portfolio</Eyebrow>
                <h2 className="mt-4 text-display-md">Related work.</h2>
              </div>
              <ButtonLink href="/portfolio" variant="outline" size="md">
                View Full Portfolio
              </ButtonLink>
            </div>
            <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {work.map((project) => (
                <StaggerItem key={project.slug}>
                  <Link href={`/portfolio/${project.slug}`} className="group block">
                    <ParallaxImage
                      src={project.image}
                      alt={`${project.client} — ${project.discipline} project by Squareit Solutions`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="aspect-[4/3] rounded-sm"
                      background={project.tone}
                    />
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-[1rem] font-extrabold tracking-tight">
                          {project.client}
                        </h3>
                        <p className="mt-1 text-sm text-muted">{project.title}</p>
                      </div>
                      <ArrowBadge tone="light" className="size-8" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>
      ) : null}

      {/* Process */}
      <Section tone="paper-alt" padding="md">
        <Container>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-4 max-w-xl text-display-md">Four stages, every time.</h2>
          <Stagger as="ol" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <StaggerItem as="li" key={step.number} className="border-t-2 border-ink/15 pt-5">
                <span className="font-display text-sm font-extrabold text-muted">{step.number}</span>
                <h3 className="mt-3 font-display text-[1.05rem] font-extrabold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
                  {step.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Other services in this category */}
      <Section tone="paper" padding="sm">
        <Container>
          <p className="eyebrow">More {category.title} Services</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {siblings.map((sibling) => (
              <li key={sibling.slug}>
                <Link
                  href={`/services/${category.slug}/${sibling.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-sm border border-line bg-white px-5 py-4 transition-colors hover:border-ink"
                >
                  <span className="font-display text-[0.95rem] font-extrabold tracking-tight">
                    {sibling.title}
                  </span>
                  <ArrowBadge tone="light" className="size-7" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        heading={`Ready to start with`}
        highlight={`${item.title.replace(/ \(.*\)$/, "")}?`}
        body="Tell us about your goals and we'll put together a plan and proposal — free, with no obligation."
      />
    </>
  );
}
