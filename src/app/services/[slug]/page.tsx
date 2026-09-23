import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/home/CtaBand";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";
import { getServiceCategory, serviceCategories } from "@/content/services";
import { faqs, processSteps } from "@/content/company";

type Params = { slug: string };

/** Pre-renders every service page at build time — fast TTFB, easy to crawl. */
export function generateStaticParams(): Params[] {
  return serviceCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getServiceCategory(slug);

  if (!category) {
    return buildMetadata({
      title: "Service not found",
      description: "This service page could not be found.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${category.title} Services`,
    description: category.summary,
    path: `/services/${category.slug}`,
    keywords: category.items.map((item) => item.title.toLowerCase()),
  });
}

const heroTones = {
  green: "bg-brand-green",
  red: "bg-brand-red",
  blue: "bg-brand-blue",
} as const;

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const category = getServiceCategory(slug);

  if (!category) notFound();

  const others = serviceCategories.filter((item) => item.slug !== category.slug);
  const pageFaqs = faqs.slice(0, 4);

  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: category.title, path: `/services/${category.slug}` },
          ]),
          serviceSchema({
            name: category.title,
            description: category.summary,
            path: `/services/${category.slug}`,
          }),
          faqSchema(pageFaqs),
        ]}
      />

      <PageHeader
        eyebrow={`${category.number} — Services`}
        title={
          <>
            {category.title}
            <br />
            <span className="marker">{category.tagline}</span>
          </>
        }
        description={category.intro}
        crumbs={[
          { name: "Services", path: "/services" },
          { name: category.title, path: `/services/${category.slug}` },
        ]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact" variant="dark">
            Get a Proposal
          </ButtonLink>
          <ButtonLink href="/case-studies" variant="outline">
            See the Results
          </ButtonLink>
        </div>
      </PageHeader>

      {/* Outcomes strip */}
      <section className={`${heroTones[category.accent]} py-8 text-white`}>
        <Container>
          <ul className="grid gap-4 sm:grid-cols-3">
            {category.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 size-4 shrink-0" />
                <span className="text-sm font-medium">{outcome}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* What's included */}
      <Section tone="paper" padding="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>What&apos;s Included</Eyebrow>
              <h2 className="mt-4 text-display-md">
                Everything under {category.title.toLowerCase()}.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
                Engagements are scoped to what will actually move your numbers — you are never
                paying for a service you do not need.
              </p>
            </div>

            <ul className="grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:col-span-8">
              {category.items.map((item) => (
                <li key={item.slug} className="rounded-sm border border-line bg-white p-5">
                  <h3 className="font-display text-[0.95rem] font-extrabold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">{item.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section tone="paper-alt" padding="md">
        <Container>
          <Eyebrow>How the engagement runs</Eyebrow>
          <h2 className="mt-4 max-w-xl text-display-md">Four stages, every time.</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.number} className="border-t-2 border-ink/15 pt-5">
                <span className="font-display text-sm font-extrabold text-muted">{step.number}</span>
                <h3 className="mt-3 font-display text-[1.05rem] font-extrabold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* FAQs — matched by the FAQPage schema above */}
      <Section tone="paper" padding="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>FAQs</Eyebrow>
              <h2 className="mt-4 text-display-md">Questions we get asked.</h2>
            </div>
            <div className="lg:col-span-8">
              <dl className="divide-y divide-line border-y border-line">
                {pageFaqs.map((faq) => (
                  <div key={faq.question} className="py-6">
                    <dt className="font-display text-[1.05rem] font-extrabold tracking-tight">
                      {faq.question}
                    </dt>
                    <dd className="mt-2.5 text-sm leading-relaxed text-muted">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sibling services */}
      <Section tone="paper-alt" padding="sm">
        <Container>
          <p className="eyebrow">Other Services</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group rounded-sm border border-line bg-white p-6 transition-colors hover:border-ink"
              >
                <h3 className="font-display text-[1.15rem] font-extrabold tracking-tight">
                  {other.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{other.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
