import { ButtonLink } from "@/components/ui/Button";
import { Container, HandNote } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { CtaLight } from "@/components/home/scenes/CtaLight";

type CtaBandProps = {
  eyebrow?: string;
  heading?: string;
  highlight?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

/**
 * The blue closing band. Reused at the bottom of most inner pages with
 * different copy, so every page ends with one clear next step.
 */
export function CtaBand({
  eyebrow = "Let's Grow Together",
  heading = "Ready to take your",
  highlight = "business to the next level?",
  body = "Let's discuss your goals and find the right digital strategy for your business.",
  ctaLabel = "Book a Free Consultation",
  ctaHref = "/contact",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-brand-blue py-14 text-white md:py-16">
      <CtaLight />

      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-white/70">
              {eyebrow}
            </p>
            <h2 className="mt-4 text-display-lg text-white">
              {heading}
              <br />
              <span className="marker">{highlight}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-relaxed text-white/80">{body}</p>
            <ButtonLink href={ctaHref} variant="yellow" size="md" className="mt-6">
              {ctaLabel}
            </ButtonLink>
          </Reveal>

          <Reveal delay={0.24} className="hidden lg:col-span-2 lg:block">
            <div className="relative rotate-6 text-brand-yellow">
              <HandNote className="text-[1.5rem]">
                Same
                <br />
                Bigger
                <br />
                Growth
              </HandNote>
              <svg
                viewBox="0 0 60 60"
                className="absolute -right-2 top-2 h-12 w-12 text-brand-yellow"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 52C18 40 30 26 46 12"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                <path
                  d="M34 10h14v14"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
