import Link from "next/link";
import { ArrowBadge } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { featuredPosts } from "@/content/blog";

const categoryTones: Record<string, string> = {
  seo: "text-brand-green",
  "social-media": "text-brand-red",
  "web-development": "text-brand-blue",
  ppc: "text-brand-yellow-dark",
  branding: "text-brand-green",
};

const dateFormat = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function CategoryLine({ post }: { post: (typeof featuredPosts)[number] }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`text-[0.625rem] font-bold uppercase tracking-[0.14em] ${
          categoryTones[post.category] ?? "text-brand-green"
        }`}
      >
        {post.categoryName}
      </span>
      <span aria-hidden="true" className="h-px w-4 bg-line" />
      <span className="text-[0.6875rem] text-muted">{post.readingMinutes} min read</span>
    </div>
  );
}

/**
 * Latest Insights.
 *
 * Editorial rather than a row of equal cards: one lead article carrying the
 * weight, two secondary pieces beside it. Three identical tiles gave every post
 * the same importance and made the section read as filler — a lead gives the
 * eye somewhere to land and the section a shape.
 */
export function InsightsSection() {
  const [lead, ...rest] = featuredPosts;
  const secondary = rest.slice(0, 2);

  return (
    <section className="border-t border-line bg-paper py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-3">
            <Eyebrow>Latest Insights</Eyebrow>
            <h2 className="mt-5 text-display-md">Ideas to keep you ahead.</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Tips, trends and strategies for businesses that want to grow.
            </p>
            <Link
              href="/blog"
              className="mt-7 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold text-ink transition-colors hover:border-brand-yellow"
            >
              View All Articles
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>

          {/* Lead article */}
          <Reveal as="article" className="group lg:col-span-5">
            <Link href={`/blog/${lead.slug}`} className="block">
              <ParallaxImage
                src={lead.image}
                alt=""
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="aspect-[16/10] rounded-sm"
                background={lead.tone}
                travel={22}
              />

              <div className="mt-5">
                <CategoryLine post={lead} />
                <h3 className="mt-3 font-display text-[1.45rem] font-extrabold leading-[1.15] tracking-tight transition-colors group-hover:text-brand-blue">
                  {lead.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{lead.excerpt}</p>

                <div className="mt-5 flex items-center justify-between gap-4 border-t border-line pt-4">
                  <p className="text-[0.75rem] text-muted">
                    {lead.author} · {dateFormat.format(new Date(lead.publishedAt))}
                  </p>
                  <ArrowBadge tone="light" className="size-9" />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Secondary articles */}
          <Stagger className="flex flex-col gap-6 lg:col-span-4">
            {secondary.map((post) => (
              <StaggerItem key={post.slug} as="article" className="group">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex gap-4 border-b border-line pb-6 last:border-b-0 sm:gap-5"
                >
                  <ParallaxImage
                    src={post.image}
                    alt=""
                    sizes="(max-width: 640px) 30vw, 12vw"
                    className="aspect-square w-24 shrink-0 rounded-sm sm:w-28"
                    background={post.tone}
                    travel={10}
                  />

                  <div className="min-w-0">
                    <CategoryLine post={post} />
                    <h3 className="mt-2 font-display text-[0.975rem] font-extrabold leading-snug tracking-tight transition-colors group-hover:text-brand-blue">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[0.8125rem] leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}

            <Link
              href="/blog"
              className="group inline-flex items-center justify-between gap-4 rounded-sm bg-paper-alt px-5 py-4 transition-colors hover:bg-ink hover:text-white"
            >
              <span className="text-sm font-semibold">Read every article</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
