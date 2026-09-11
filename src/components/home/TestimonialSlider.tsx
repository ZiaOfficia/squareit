"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@/components/ui/Icons";
import { Eyebrow } from "@/components/ui/Section";
import { testimonials } from "@/content/company";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const active = testimonials[index];

  const go = (direction: -1 | 1) =>
    setIndex((current) => (current + direction + total) % total);

  return (
    <div className="flex h-full flex-col justify-between bg-forest px-6 py-14 text-white md:px-10 lg:px-14 lg:py-20">
      <Eyebrow className="text-white/45">What Our Clients Say</Eyebrow>

      {/* aria-live so a screen reader hears the quote change */}
      <figure className="mt-8 lg:mt-10" aria-live="polite">
        <span aria-hidden="true" className="font-display text-4xl leading-none text-brand-yellow">
          &ldquo;
        </span>
        <blockquote className="mt-2">
          <p className="max-w-lg font-display text-[1.375rem] font-extrabold leading-[1.3] tracking-tight md:text-[1.55rem]">
            {active.quote}
          </p>
        </blockquote>

        <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
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
            <div>
              <p className="text-sm font-semibold">{active.name}</p>
              <p className="text-xs text-white/60">
                {active.role}, {active.company}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
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
        </figcaption>
      </figure>
    </div>
  );
}
