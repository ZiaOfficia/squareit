import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/home/CtaBand";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { ArrowUpRight } from "@/components/ui/Icons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { serviceCategories } from "@/content/services";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing, Development & Design Services",
  description:
    "SEO, PPC, social media, web development, e-commerce and brand design — the full set of services Squareit Solutions uses to grow ambitious businesses.",
  path: "/services",
  keywords: [
    "digital marketing services Lucknow",
    "SEO services",
    "PPC management",
    "web development services",
    "logo and brand design",
  ],
});

const cardTones = {
  green: "bg-brand-green",
  red: "bg-brand-red",
  blue: "bg-brand-blue",
} as const;

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([{ name: "Services", path: "/services" }]),
          ...serviceCategories.map((category) =>
            serviceSchema({
              name: category.title,
              description: category.summary,
              path: `/services/${category.slug}`,
            }),
          ),
        ]}
      />

      <PageHeader
        eyebrow="Our Services"
        title={
          <>
            A complete digital
            <br />
            growth <span className="marker">ecosystem.</span>
          </>
        }
        description="Three practices, one team. Most clients start with a single service and grow into a combined programme once the first results land."
        crumbs={[{ name: "Services", path: "/services" }]}
        note={
          <>
            Strategy
            <br />
            Meets
            <br />
            Creativity
          </>
        }
      />

      {/* Category cards */}
      <Section tone="ink" padding="md">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {serviceCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/services/${category.slug}`}
                className={`group flex min-h-[20rem] flex-col rounded-sm p-7 transition-transform duration-300 hover:-translate-y-1 ${
                  cardTones[category.accent]
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-[1.35rem] font-extrabold text-white/85">
                    {category.number}
                  </span>
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-ink/85 text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <h2 className="mt-7 font-display text-[1.4rem] font-extrabold tracking-tight text-white">
                  {category.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{category.summary}</p>
                <p className="mt-auto pt-6 text-[0.8125rem] font-semibold text-white/90">
                  {category.items.length} services →
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Full service index — valuable for internal linking and long-tail search. */}
      {serviceCategories.map((category) => (
        <Section key={category.slug} tone="paper" padding="md">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Eyebrow>{category.number} — {category.title}</Eyebrow>
                <h2 className="mt-4 text-display-md">{category.tagline}</h2>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{category.intro}</p>
                <Link
                  href={`/services/${category.slug}`}
                  className="mt-6 inline-block border-b border-ink pb-1 text-sm font-semibold"
                >
                  Explore {category.title} →
                </Link>
              </div>

              <ul className="grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:col-span-8">
                {category.items.map((item) => (
                  <li key={item.slug} className="border-t border-line pt-4">
                    <h3 className="font-display text-[0.95rem] font-extrabold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted">
                      {item.summary}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>
      ))}

      <CtaBand />
    </>
  );
}
