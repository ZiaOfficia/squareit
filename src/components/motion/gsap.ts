"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * The one place GSAP is configured. Every motion primitive imports from here
 * rather than from "gsap" directly, so the plugins are registered exactly once
 * and before the first tween that needs them.
 */
gsap.registerPlugin(ScrollTrigger, useGSAP);

/** GSAP's name for --ease-out-expo in globals.css. */
export const EASE = "expo.out";

/** Fires a little before the element reaches the fold. */
export const ENTER = "top 88%";

/**
 * Read inside effects only. Elements that start hidden are put back at rest
 * for these visitors by the [data-reveal] rule in globals.css, so skipping the
 * tween is all a component has to do.
 */
export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger, useGSAP };
