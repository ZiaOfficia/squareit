"use client";

import Image from "next/image";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

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
  const still = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [travel, -travel]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={background ? { backgroundColor: background } : undefined}
    >
      <m.div
        // Overscaled so the drift stays inside the frame at both extremes.
        className="absolute -inset-y-[8%] inset-x-0"
        style={still ? undefined : { y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </m.div>
    </div>
  );
}
