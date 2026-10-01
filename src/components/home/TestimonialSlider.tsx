"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/components/motion/gsap";
import { ArrowLeft, ArrowRight } from "@/components/ui/Icons";
import { Eyebrow } from "@/components/ui/Section";
import { testimonials } from "@/content/company";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const card = useRef<HTMLElement>(null);
  const direction = useRef<-1 | 1>(1);
  /** The index currently on screen, so the arrival only plays on a real change. */
  const shown = useRef(0);
  const total = testimonials.length;
  const active = testimonials[index];

  const parts = () => card.current?.querySelectorAll("[data-swap]") ?? [];

  /**
   * Quotes vary in length, so each card crossfades in place with a short
   * directional nudge rather than sliding a fixed-width track — nothing jumps
   * when a longer quote follows a short one.
   *
   * The quote and its caption are tweened as two targets rather than one
   * wrapper because <figcaption> has to stay a direct child of <figure>. Same
   * timing on both, so they still read as one card.
   */
  const { contextSafe } = useGSAP(
    () => {
      if (shown.current === index) return;
      shown.current = index;
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        parts(),
        { opacity: 0, x: direction.current * 18 },
        { opacity: 1, x: 0, duration: 0.42, ease: EASE, overwrite: true },
      );
    },
    { dependencies: [index], scope: card },
  );

  const go = contextSafe((next: -1 | 1) => {
    direction.current = next;
    const advance = () => setIndex((current) => (current + next + total) % total);

    if (prefersReducedMotion()) return advance();

    // The outgoing card leaves first; the state change that swaps the copy
    // waits for it, and the effect above brings the new card in.
    gsap.to(parts(), {
      opacity: 0,
      x: next * -18,
      duration: 0.2,
      ease: "power2.in",
      overwrite: true,
      onComplete: advance,
    });
  });

  return (
    <div className="flex h-full flex-col justify-between bg-forest px-6 py-14 text-white md:px-10 lg:px-14 lg:py-20">
      <Eyebrow className="text-white/45">What Our Clients Say</Eyebrow>

      {/* aria-live so a screen reader hears the quote change */}
      <figure ref={card} className="mt-8 lg:mt-10" aria-live="polite">
        <span aria-hidden="true" className="font-display text-4xl leading-none text-brand-yellow">
          &ldquo;
        </span>

        <blockquote data-swap="" className="mt-2">
          <p className="max-w-lg font-display text-[1.375rem] font-extrabold leading-[1.3] tracking-tight md:text-[1.55rem]">
            {active.quote}
          </p>
        </blockquote>

        <figcaption data-swap="" className="mt-8 flex items-center gap-3">
          {active.logo ? (
            /* The client's own logo, on a white chip so marks with light
               grounds stay legible against the forest panel. */
            <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1">
              <Image
                src={active.logo}
                alt={active.company}
                width={44}
                height={44}
                sizes="44px"
                className="h-full w-full object-contain"
              />
            </span>
          ) : (
            <span
              className="inline-flex size-11 items-center justify-center rounded-full bg-white/15 font-display text-sm font-extrabold"
              aria-hidden="true"
            >
              {active.name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")}
            </span>
          )}
          <div>
            <p className="text-sm font-semibold">{active.name}</p>
            <p className="text-xs text-white/60">
              {active.role}, {active.company}
            </p>
          </div>
        </figcaption>
      </figure>

      <div className="mt-8 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="inline-flex size-9 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-forest"
        >
          <ArrowLeft className="size-4" />
        </button>
        <p className="text-xs tabular-nums text-white/70">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="inline-flex size-9 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-forest"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
