import Link from "next/link";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/Icons";
import { processSteps } from "@/content/company";

const badgeTones = {
  green: "bg-brand-green",
  red: "bg-brand-red",
  yellow: "bg-brand-yellow text-ink",
  blue: "bg-brand-blue",
} as const;

export function ProcessPanel() {
  return (
    <div className="bg-paper px-6 py-14 md:px-10 lg:px-14 lg:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:gap-8">
        <div>
          <Eyebrow>Our Process</Eyebrow>
          <h2 className="mt-5 text-display-md">From idea to impact.</h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            A simple, transparent process designed for real results.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold text-ink transition-colors hover:border-brand-yellow"
          >
            See How We Work
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <ol className="relative space-y-7">
          {/* Connecting rail behind the numbered badges */}
          <span
            className="absolute left-[1.35rem] top-3 bottom-3 w-px bg-line"
            aria-hidden="true"
          />
          {processSteps.map((step) => (
            <li key={step.number} className="relative flex gap-4">
              <span
                className={`relative z-10 inline-flex size-11 shrink-0 items-center justify-center rounded-full font-display text-[0.8rem] font-extrabold text-white ${
                  badgeTones[step.accent]
                }`}
              >
                {step.number}
              </span>
              <div className="pt-2">
                <h3 className="font-display text-[1.05rem] font-extrabold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/** Full-bleed split: testimonials on the left, process on the right. */
export function ProcessSplit({ left }: { left: ReactNode }) {
  return (
    <section className="grid lg:grid-cols-2">
      {left}
      <ProcessPanel />
    </section>
  );
}
