"use client";

import { useRef, type ReactNode } from "react";

import { EASE, gsap, prefersReducedMotion, useGSAP } from "./gsap";

type Tilt = {
  rotateX: gsap.QuickToFunc;
  rotateY: gsap.QuickToFunc;
  lift: gsap.QuickToFunc;
};

/**
 * A card that leans very slightly toward the cursor.
 *
 * The rotation is capped at ~5° and the lift at 4px: enough to read as depth on
 * a card you are pointing at, not enough to distort the artwork inside it.
 * Pointer tracking is per-card and only while hovered, so nothing listens on
 * the window and nothing runs when the section is idle.
 */
export function TiltCard({
  children,
  className = "",
  /** Degrees of rotation at the card's corners. */
  strength = 5,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  /** Null under reduced motion, which leaves the handlers below inert. */
  const tilt = useRef<Tilt | null>(null);

  useGSAP(
    () => {
      const card = ref.current;
      if (!card || prefersReducedMotion()) return;

      gsap.set(card, { transformPerspective: 900, transformStyle: "preserve-3d" });

      // quickTo retargets one tween per property instead of spawning a new one
      // on every pointer event.
      tilt.current = {
        rotateX: gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power3.out" }),
        rotateY: gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power3.out" }),
        lift: gsap.quickTo(card, "y", { duration: 0.3, ease: EASE }),
      };

      return () => {
        tilt.current = null;
      };
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className={className}
      onPointerEnter={() => tilt.current?.lift(-4)}
      onPointerMove={(event) => {
        if (!tilt.current) return;
        const box = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        tilt.current.rotateX(-y * 2 * strength);
        tilt.current.rotateY(x * 2 * strength);
      }}
      onPointerLeave={() => {
        tilt.current?.rotateX(0);
        tilt.current?.rotateY(0);
        tilt.current?.lift(0);
      }}
    >
      {children}
    </div>
  );
}
