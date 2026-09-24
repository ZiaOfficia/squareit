"use client";

import { m, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * Scroll choreography for the marketing pages.
 *
 * One register throughout: a short rise and a fade, settled inside 600ms, fired
 * once. Nothing loops and nothing keeps moving after it lands — the page should
 * feel composed on the second visit, not busy.
 *
 * Under prefers-reduced-motion every component here renders its children at
 * rest, so the content is identical and only the transition disappears.
 */

/** Matches --ease-out-expo in globals.css. */
const EASE = [0.16, 1, 0.3, 1] as const;
const DURATION = 0.6;
const RISE = 14;

/** Fires a little before the element reaches the fold. */
const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const;

/**
 * Resolved once at module scope. Building a motion component during render
 * would hand React a brand-new component type on every pass and remount the
 * subtree beneath it.
 */
const TAGS = {
  div: m.div,
  ul: m.ul,
  ol: m.ol,
  li: m.li,
  dl: m.dl,
  section: m.section,
  article: m.article,
  figure: m.figure,
  p: m.p,
} as const;

type Tag = keyof typeof TAGS;

type BaseProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
};

export function Reveal({ children, as = "div", delay = 0, className = "" }: BaseProps & { delay?: number }) {
  const still = useReducedMotion();
  const Tag = TAGS[as];

  if (still) return <Tag className={className}>{children}</Tag>;

  return (
    <Tag
      className={className}
      data-reveal=""
      initial={{ opacity: 0, y: RISE }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

const listVariants: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: RISE },
  shown: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

/**
 * Wraps a group whose children should arrive one after another. Pair with
 * `StaggerItem` on each child — the parent drives the timing, so the children
 * need no delay arithmetic.
 */
export function Stagger({ children, as = "div", className = "" }: BaseProps) {
  const still = useReducedMotion();
  const Tag = TAGS[as];

  if (still) return <Tag className={className}>{children}</Tag>;

  return (
    <Tag className={className} variants={listVariants} initial="hidden" whileInView="shown" viewport={VIEWPORT}>
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, as = "div", className = "" }: BaseProps) {
  const still = useReducedMotion();
  const Tag = TAGS[as];

  if (still) return <Tag className={className}>{children}</Tag>;

  return (
    <Tag className={className} data-reveal="" variants={itemVariants}>
      {children}
    </Tag>
  );
}
