"use client";

import { useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Seamless horizontal marquee.
 *
 * The children are rendered twice and the track slides exactly half its width,
 * so the loop has no seam. The animation is CSS (see .animate-marquee in
 * globals.css) rather than JS — it runs on the compositor and costs nothing on
 * the main thread while the rest of the page is scrolling.
 *
 * Under reduced motion the track is static and scrolls horizontally by hand.
 */
export function Marquee({
  children,
  className = "",
  /** Seconds for one full pass. */
  speed = 38,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const still = useReducedMotion();

  if (still) {
    return (
      <div className={`overflow-x-auto ${className}`}>
        <div className="flex w-max items-center">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      // Fades the ends into the band rather than cutting logos off mid-stride.
      style={{
        maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div
        className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Two equal-width copies: the track slides exactly 50%, so the second
            copy lands where the first began and the loop has no seam. The
            duplicate is hidden from assistive tech to avoid double-reading. */}
        <div className="flex items-center">{children}</div>
        <div aria-hidden="true" className="flex items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
