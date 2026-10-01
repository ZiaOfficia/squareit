"use client";

import { useRef, type ReactNode } from "react";

import { gsap, useGSAP } from "./gsap";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Seamless horizontal marquee.
 *
 * The children are rendered twice and the track slides exactly half its width,
 * so the loop has no seam. One linear GSAP tween drives it; hovering eases that
 * tween's timeScale to zero and back, so the band glides to a stop instead of
 * freezing mid-frame.
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
  const track = useRef<HTMLDivElement>(null);
  const loop = useRef<gsap.core.Tween | null>(null);

  const { contextSafe } = useGSAP(
    () => {
      if (still || !track.current) return;

      loop.current = gsap.to(track.current, {
        xPercent: -50,
        duration: speed,
        ease: "none",
        repeat: -1,
      });

      return () => {
        loop.current = null;
      };
    },
    { dependencies: [still, speed], revertOnUpdate: true },
  );

  const pace = contextSafe((timeScale: number) => {
    if (loop.current) gsap.to(loop.current, { timeScale, duration: 0.5, ease: "power2.out" });
  });

  if (still) {
    return (
      <div className={`overflow-x-auto ${className}`}>
        <div className="flex w-max items-center">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      // Fades the ends into the band rather than cutting logos off mid-stride.
      style={{
        maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
      onPointerEnter={() => pace(0)}
      onPointerLeave={() => pace(1)}
    >
      <div ref={track} className="flex w-max items-center will-change-transform">
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
