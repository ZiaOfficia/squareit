"use client";

import { useRef } from "react";

import { EASE, gsap, prefersReducedMotion, useGSAP } from "./gsap";

/**
 * Counts a stat up to its value the first time it scrolls into view.
 *
 * The content strings carry their own formatting ("12,065+", "620+"), so the
 * prefix, separators and suffix are preserved and only the digits animate. The
 * final value is rendered on the server and on the first paint, which keeps the
 * number readable to crawlers and correct if the animation never runs.
 */
export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const node = ref.current;
      if (!node || prefersReducedMotion()) return;

      const digits = value.replace(/[^\d]/g, "");
      const target = Number(digits);
      if (!digits || !Number.isFinite(target) || target === 0) return;

      const prefix = value.slice(0, value.indexOf(digits[0]));
      const suffix = value.slice(value.lastIndexOf(digits.at(-1) ?? "") + 1);
      /** Thousands separators only if the source had them. */
      const grouped = value.includes(",");

      const format = (count: number) =>
        prefix + (grouped ? count.toLocaleString("en-US") : String(count)) + suffix;

      // Dropped to zero before the first paint, well before the stat is on
      // screen, so the count doesn't visibly snap backwards when it starts.
      // Written straight to the node: React only ever renders `value` here, so
      // there is nothing for it to reconcile against and no re-render per tick.
      const counter = { count: 0 };
      node.textContent = format(0);

      gsap.to(counter, {
        count: target,
        duration: 1.4,
        ease: EASE,
        onUpdate: () => {
          node.textContent = format(Math.round(counter.count));
        },
        scrollTrigger: { trigger: node, start: "top 85%", once: true },
      });

      return () => {
        node.textContent = value;
      };
    },
    { dependencies: [value], scope: ref, revertOnUpdate: true },
  );

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
