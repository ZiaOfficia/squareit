"use client";

import { useRef } from "react";

import { EASE, ENTER, gsap, prefersReducedMotion, useGSAP } from "./gsap";

/**
 * The vertical rail behind the process steps, drawn top-to-bottom as the list
 * arrives. Scales from the top rather than animating height, so it composites
 * on the GPU and never reflows the list beside it.
 */
export function DrawRail({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        ref.current,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 0.9,
          ease: EASE,
          scrollTrigger: { trigger: ref.current, start: ENTER, once: true },
        },
      );
    },
    { scope: ref },
  );

  return (
    <span
      ref={ref}
      className={className}
      aria-hidden="true"
      data-reveal=""
      style={{ transform: "scaleY(0)", transformOrigin: "top" }}
    />
  );
}
