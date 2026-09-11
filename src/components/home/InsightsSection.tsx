import Image from "next/image";
import Link from "next/link";
import { ArrowBadge } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/Icons";
import { featuredPosts } from "@/content/blog";

const categoryTones: Record<string, string> = {
  seo: "text-brand-green",
  "social-media": "text-brand-red",
  "web-development": "text-brand-blue",
  ppc: "text-brand-yellow-dark",
  branding: "text-brand-green",
};

export function InsightsSection() {
  return (
    <section className="border-t border-line bg-paper py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
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
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div
                    className="relative aspect-[16/10] overflow-hidden rounded-sm"
                    style={{ backgroundColor: post.tone }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 27vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[0.625rem] font-bold uppercase tracking-[0.14em] ${
                          categoryTones[post.category] ?? "text-brand-green"
                        }`}
                      >
                        {post.categoryName}
                      </span>
                      <span className="text-[0.6875rem] text-muted">
                        {post.readingMinutes} min read
                      </span>
                    </div>

                    <div className="mt-2 flex items-start justify-between gap-4">
                      <h3 className="font-display text-[0.975rem] font-extrabold leading-snug tracking-tight transition-colors group-hover:text-brand-blue">
                        {post.title}
                      </h3>
                      <ArrowBadge tone="light" className="size-8" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
