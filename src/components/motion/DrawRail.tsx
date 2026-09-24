"use client";

import { m, useReducedMotion } from "motion/react";

/**
 * The vertical rail behind the process steps, drawn top-to-bottom as the list
 * arrives. Scales from the top rather than animating height, so it composites
 * on the GPU and never reflows the list beside it.
 */
export function DrawRail({ className = "" }: { className?: string }) {
  const still = useReducedMotion();

  if (still) return <span className={className} aria-hidden="true" />;

  return (
    <m.span
      className={className}
      aria-hidden="true"
      data-reveal=""
      style={{ transformOrigin: "top" }}
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
