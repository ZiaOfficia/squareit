import Link from "next/link";
import { ButtonLink, ArrowBadge } from "@/components/ui/Button";
import { Container, Eyebrow, HandNote } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { TiltCard } from "@/components/motion/TiltCard";
import { featuredProjects } from "@/content/work";

export function FeaturedWork() {
  return (
    <section className="bg-paper py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Intro */}
          <Reveal className="lg:col-span-3">
            <Eyebrow>Featured Work</Eyebrow>
            <h2 className="mt-5 text-display-md">Work that makes an impact.</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              From ambitious startups to established brands, we create digital experiences that
              deliver measurable results.
            </p>
            <ButtonLink href="/portfolio" variant="outline" size="md" className="mt-7">
              View Our Portfolio
            </ButtonLink>
          </Reveal>

          {/* Project cards */}
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <TiltCard strength={4}>
                  <Link href={`/portfolio/${project.slug}`} className="group block">
                    <ParallaxImage
                      src={project.image}
                      alt={`${project.client} — ${project.discipline} project by Squareit Solutions`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24vw"
                      className="aspect-[4/3] rounded-sm"
                      background={project.tone}
                    />

                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-[0.95rem] font-extrabold tracking-tight">
                          {project.client}
                        </h3>
                        <p className="mt-1 text-xs text-muted">{project.discipline}</p>
                      </div>
                      <ArrowBadge tone="light" className="size-8" />
                    </div>
                  </Link>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Handwritten note */}
          <Reveal delay={0.25} className="hidden lg:col-span-1 lg:flex lg:items-center">
            <div className="-rotate-6 text-ink">
              <HandNote className="text-[1.55rem]" underline>
                Real
                <br />
                Projects.
                <br />
                Real
                <br />
                Growth.
              </HandNote>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
