"use client";

import Image from "next/image";
import { useRef } from "react";

import { gsap, prefersReducedMotion, useGSAP } from "./gsap";

/**
 * An image that drifts slightly slower than the page as it passes.
 *
 * The image is rendered oversized and shifted within its frame, so the parallax
 * never exposes an edge. Travel is deliberately small — this should register as
 * depth, not as an effect you notice.
 */
export function ParallaxImage({
  src,
  alt,
  sizes,
  className = "",
  /** Shows through while the image decodes — each project has its own tone. */
  background,
  /** Pixels of travel across the whole pass. */
  travel = 26,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  background?: string;
  travel?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        layer.current,
        { y: travel },
        {
          y: -travel,
          ease: "none",
          // Scrubbed across the frame's whole pass through the viewport.
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    },
    { dependencies: [travel], scope: ref, revertOnUpdate: true },
  );

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={background ? { backgroundColor: background } : undefined}
    >
      <div
        ref={layer}
        // Overscaled so the drift stays inside the frame at both extremes.
        className="absolute -inset-y-[8%] inset-x-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
    </div>
  );
}
