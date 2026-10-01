import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/layout/PageHeader";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { CtaBand } from "@/components/home/CtaBand";
import { Container, Section } from "@/components/ui/Section";
import { ArrowBadge } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { postCategories, posts } from "@/content/blog";
import { absoluteUrl } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Digital Marketing Insights & Guides",
  description:
    "Practical guides on SEO, paid media, social strategy, web performance and branding from the team at Squareit Solutions.",
  path: "/blog",
});

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [lead, ...rest] = posts;

  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([{ name: "Blog", path: "/blog" }]),
          {
            "@type": "Blog",
            name: "Squareit Solutions Blog",
            url: absoluteUrl("/blog"),
            publisher: { "@id": absoluteUrl("/#organization") },
          },
        ]}
      />

      <PageHeader
        eyebrow="Latest Insights"
        title={
          <>
            Ideas to keep
            <br />
            you <span className="marker">ahead.</span>
          </>
        }
        description="Tips, trends and strategies for businesses that want to grow — written by the people running the campaigns."
        crumbs={[{ name: "Blog", path: "/blog" }]}
        accent="green"
      >
        <ul className="mt-8 flex flex-wrap gap-2">
          {postCategories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/blog/category/${category.slug}`}
                className="inline-flex rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-ink hover:text-ink"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </PageHeader>

      {/* Lead article */}
      <Section tone="paper" padding="md">
        <Container>
          <Reveal as="article">
            <Link href={`/blog/${lead.slug}`} className="group grid gap-8 lg:grid-cols-12">
              <ParallaxImage
                      src={lead.image}
                      alt={lead.title}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="aspect-[16/9] lg:col-span-7 rounded-sm"
                      background={lead.tone}
                    />
              <div className="flex flex-col justify-center lg:col-span-5">
                <div className="flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em]">
                  <span className="text-brand-green">{lead.categoryName}</span>
                  <span className="text-muted">{lead.readingMinutes} min read</span>
                </div>
                <h2 className="mt-4 font-display text-[1.75rem] font-extrabold leading-tight tracking-tight md:text-[2.1rem]">
                  {lead.title}
                </h2>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{lead.excerpt}</p>
                <p className="mt-5 text-xs text-muted">
                  {lead.author} · {formatDate(lead.publishedAt)}
                </p>
              </div>
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* Grid */}
      <Section tone="paper" padding="sm">
        <Container>
          <Stagger as="ul" className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <StaggerItem as="li" key={post.slug}>
                <article className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <ParallaxImage
                      src={post.image}
                      alt={post.title}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 32vw"
                      className="aspect-[16/10] rounded-sm"
                      background={post.tone}
                    />
                    <div className="mt-4 flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em]">
                      <span className="text-brand-green">{post.categoryName}</span>
                      <span className="text-muted">{post.readingMinutes} min read</span>
                    </div>
                    <div className="mt-2 flex items-start justify-between gap-4">
                      <h2 className="font-display text-[1.05rem] font-extrabold leading-snug tracking-tight transition-colors group-hover:text-brand-blue">
                        {post.title}
                      </h2>
                      <ArrowBadge tone="light" className="size-8" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                    <p className="mt-4 text-xs text-muted">{formatDate(post.publishedAt)}</p>
                  </Link>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Stay Ahead"
        heading="Want this thinking"
        highlight="applied to your business?"
        body="Book a free consultation and we will map the fastest route to growth in your market."
      />
    </>
  );
}
