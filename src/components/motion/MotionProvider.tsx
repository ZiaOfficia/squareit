"use client";

import { LazyMotion, domAnimation } from "motion/react";
import type { ReactNode } from "react";

/**
 * Loads only the DOM animation feature set, roughly half the weight of the
 * full `motion` bundle. Everything on this site is transforms, opacity and
 * presence — no layout projection, no drag — so the rest is dead weight.
 *
 * `strict` makes the tree fail loudly if a `motion.*` component slips in
 * instead of `m.*`, which would silently pull the full bundle back in.
 *
 * Children stay server components: this only wraps them.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
