import { ButtonLink } from "@/components/ui/Button";
import { Container, HandNote } from "@/components/ui/Section";
import { ArrowUpRight, PlayIcon } from "@/components/ui/Icons";
import { HeroBackdrop } from "@/components/home/hero/HeroBackdrop";
import { HeroMark } from "@/components/home/hero/HeroMark";

const disciplines = ["Strategy", "Marketing", "Technology", "Creative"];

/** Small stacked avatars for the social-proof row. */
function AvatarStack() {
  const tones = ["#0f8a48", "#e0322a", "#1553cc", "#ffc933", "#0e3a2a"];
  return (
    <div className="flex -space-x-2.5">
      {tones.map((tone, index) => (
        <span
          key={tone}
          className="inline-flex size-9 items-center justify-center overflow-hidden rounded-full border-2 border-paper"
          style={{ backgroundColor: tone }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 36 36" className="size-full opacity-90">
            <circle cx="18" cy="13.5" r="6" fill="rgba(255,255,255,0.85)" />
            <path
              d="M4 36c1.6-8 7.3-12 14-12s12.4 4 14 12z"
              fill="rgba(255,255,255,0.85)"
              transform={`translate(0 ${index % 2 ? 1 : 0})`}
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

/**
 * The hero collage: overlapping brand-coloured panels with the Squareit mark
 * turning in 3D across them. Built from layout primitives rather than one flat
 * image so it stays crisp, themeable and fast on mobile.
 */
function HeroCollage() {
  return (
    <div className="relative aspect-[4/3.4] w-full sm:aspect-[4/3]">
      {/* Colour panels */}
      <span className="absolute left-[6%] top-[4%] h-[34%] w-[26%] rounded-[3px] bg-brand-yellow" aria-hidden="true" />
      <span className="absolute left-[6%] top-[40%] h-[40%] w-[26%] rounded-[3px] bg-brand-green" aria-hidden="true" />
      <span className="absolute left-[34%] top-[4%] h-[46%] w-[30%] rounded-[3px] bg-brand-red" aria-hidden="true" />
      <span className="absolute left-[66%] top-[4%] h-[30%] w-[26%] rounded-[3px] bg-brand-blue/95" aria-hidden="true" />
      <span className="absolute left-[66%] top-[36%] h-[44%] w-[26%] rounded-[3px] bg-brand-blue" aria-hidden="true" />

      {/* Green triangle accent, bottom-left of the collage */}
      <svg
        viewBox="0 0 100 100"
        className="absolute -bottom-[2%] left-0 h-[16%] w-[14%] text-brand-green"
        aria-hidden="true"
      >
        <path d="M0 100 L100 100 L0 10 Z" fill="currentColor" />
      </svg>

      {/* Focal object — the logo mark as real geometry, sitting across the
          panels where the portrait placeholder used to be. */}
      <HeroMark />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pb-14 pt-8 md:pb-20 md:pt-10">
      <HeroBackdrop />

      <Container className="relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-6">
          {/* ---------- Copy column ---------- */}
          <div className="lg:col-span-5 lg:pt-6">
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {disciplines.map((word, index) => (
                <li key={word} className="flex items-center gap-3">
                  <span className="eyebrow">{word}</span>
                  {index < disciplines.length - 1 ? (
                    <span className="text-[0.7rem] text-muted/60" aria-hidden="true">
                      ×
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>

            <h1 className="mt-6 text-display-xl">
              Ideas
              <br />
              that <span className="marker">grow</span>
              <br />
              your business.
            </h1>

            <p className="mt-6 max-w-md text-[0.975rem] leading-relaxed text-ink-soft">
              We are a result-driven digital marketing company helping brands build visibility,
              generate leads and grow faster.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact" variant="dark">
                Start a Project
              </ButtonLink>
              <ButtonLink
                href="/about"
                variant="outline"
                withArrow={false}
                className="gap-3 pl-2"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-ink text-white">
                  <PlayIcon className="ml-0.5 size-3" />
                </span>
                Watch Our Story
              </ButtonLink>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <AvatarStack />
                <div>
                  <p className="font-display text-base font-extrabold leading-none">620+</p>
                  <p className="mt-1 text-xs text-muted">Happy Clients</p>
                </div>
              </div>
              <p className="max-w-[11rem] text-xs leading-relaxed text-muted">
                Trusted by startups, SMEs and leading brands.
              </p>
            </div>
          </div>

          {/* ---------- Collage column ---------- */}
          <div className="relative lg:col-span-5">
            {/* Handwritten note, left of the collage on desktop */}
            <div className="pointer-events-none absolute -left-2 top-6 z-10 hidden w-36 -rotate-6 text-ink xl:block">
              <HandNote className="text-[1.45rem]">
                Traditional
                <br />
                is gone.
                <br />
                Digital is in.
              </HandNote>
              <svg viewBox="0 0 140 14" className="mt-1 h-3 w-32 text-brand-red" fill="none" aria-hidden="true">
                <path
                  d="M3 10c26-6 54-8 86-6.5 17 .8 32 2.8 48 5"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <HeroCollage />

            {/* Floating results card */}
            <div className="absolute -bottom-4 right-0 z-10 flex items-center gap-4 rounded-sm border border-line bg-white px-5 py-3.5 shadow-[0_14px_34px_-18px_rgba(0,0,0,0.4)] lg:-right-8">
              <div>
                <p className="font-display text-xl font-extrabold leading-none">2,253+</p>
                <p className="mt-1.5 text-[0.7rem] text-muted">Results Delivered</p>
              </div>
              <span className="inline-flex size-8 items-center justify-center rounded-full border border-line text-ink">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </div>

          {/* ---------- Right rail ---------- */}
          <div className="hidden lg:col-span-2 lg:block lg:pt-10">
            <span className="block h-0.5 w-9 bg-ink" aria-hidden="true" />
            <p className="mt-4 font-display text-[1.05rem] font-extrabold leading-[1.2] tracking-tight">
              Building brands for a digital-first tomorrow.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
