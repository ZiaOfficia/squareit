"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

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
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const still = useReducedMotion();

  const digits = value.replace(/[^\d]/g, "");
  const target = Number(digits);
  const prefix = value.slice(0, value.indexOf(digits[0] ?? ""));
  const suffix = value.slice(value.lastIndexOf(digits.at(-1) ?? "") + 1);
  /** Thousands separators only if the source had them. */
  const grouped = value.includes(",");

  const [display, setDisplay] = useState(value);

  // Drop to zero once on the client, before the stat is ever on screen, so the
  // count doesn't visibly snap backwards when it starts.
  useEffect(() => {
    if (still || !Number.isFinite(target) || target === 0) return;
    setDisplay(prefix + "0" + suffix);
  }, [still, target, prefix, suffix]);

  useEffect(() => {
    if (!inView || still || !Number.isFinite(target) || target === 0) return;

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        const rounded = Math.round(latest);
        setDisplay(prefix + (grouped ? rounded.toLocaleString("en-US") : String(rounded)) + suffix);
      },
    });

    return () => controls.stop();
  }, [inView, still, target, prefix, suffix, grouped]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
