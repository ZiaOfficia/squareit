"use client";

import { m, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import type { ReactNode } from "react";

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
  const still = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const spring = { stiffness: 260, damping: 26, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [strength, -strength]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-strength, strength]), spring);

  if (still) return <div className={className}>{children}</div>;

  return (
    <m.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onPointerMove={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - box.left) / box.width - 0.5);
        y.set((event.clientY - box.top) / box.height - 0.5);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </m.div>
  );
}
