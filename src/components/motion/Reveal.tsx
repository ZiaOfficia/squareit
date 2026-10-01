"use client";

import { useRef, type CSSProperties, type ReactNode, type Ref } from "react";

import { EASE, ENTER, gsap, prefersReducedMotion, useGSAP } from "./gsap";

/**
 * Scroll choreography for the marketing pages.
 *
 * One register throughout: a short rise and a fade, settled inside 600ms, fired
 * once. Nothing loops and nothing keeps moving after it lands — the page should
 * feel composed on the second visit, not busy.
 *
 * Elements are server-rendered in their hidden state and tagged `data-reveal`.
 * Under prefers-reduced-motion (and without scripting) a CSS rule puts every
 * tagged element back at rest, so the content is identical and only the
 * transition disappears.
 */

const DURATION = 0.6;
const RISE = 14;

const HIDDEN: CSSProperties = { opacity: 0, transform: `translate3d(0, ${RISE}px, 0)` };

type Tag = "div" | "ul" | "ol" | "li" | "dl" | "section" | "article" | "figure" | "p";

type BaseProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
};

export function Reveal({ children, as = "div", delay = 0, className = "" }: BaseProps & { delay?: number }) {
  const ref = useRef<HTMLElement>(null);
  // One ref type for every tag — the tween only needs an element.
  const Tag = as as "div";

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        ref.current,
        { opacity: 0, y: RISE },
        {
          opacity: 1,
          y: 0,
          duration: DURATION,
          ease: EASE,
          delay,
          scrollTrigger: { trigger: ref.current, start: ENTER, once: true },
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref as Ref<HTMLDivElement>} className={className} data-reveal="" style={HIDDEN}>
      {children}
    </Tag>
  );
}

/**
 * Wraps a group whose children should arrive one after another. Pair with
 * `StaggerItem` on each child — the parent drives the timing, so the children
 * need no delay arithmetic.
 */
export function Stagger({ children, as = "div", className = "" }: BaseProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as as "div";

  useGSAP(
    () => {
      const group = ref.current;
      if (!group || prefersReducedMotion()) return;

      // Only this group's own items: a nested Stagger drives its own.
      const items = Array.from(group.querySelectorAll("[data-stagger-item]")).filter(
        (item) => item.closest("[data-stagger]") === group,
      );
      if (items.length === 0) return;

      gsap.fromTo(
        items,
        { opacity: 0, y: RISE },
        {
          opacity: 1,
          y: 0,
          duration: DURATION,
          ease: EASE,
          delay: 0.05,
          stagger: 0.07,
          scrollTrigger: { trigger: group, start: ENTER, once: true },
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref as Ref<HTMLDivElement>} className={className} data-stagger="">
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, as = "div", className = "" }: BaseProps) {
  const Tag = as;

  return (
    <Tag className={className} data-reveal="" data-stagger-item="" style={HIDDEN}>
      {children}
    </Tag>
  );
}
