"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { useSceneReady } from "./useSceneReady";

/**
 * Decorative WebGL layer for a page section.
 *
 * Adds one rule to `useSceneReady`'s idle gate: the canvas only mounts while
 * its section is near the viewport, and unmounts once it is well past. These
 * scenes sit below the fold, and a page with several live contexts all
 * rendering at once is how a marketing site ends up dropping frames.
 *
 * The fallback renders always and underneath, so there is never an empty frame
 * and reduced-motion visitors simply keep it.
 */
export function SceneLayer({
  children,
  fallback,
  className = "",
}: {
  children: ReactNode;
  fallback: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const ready = useSceneReady();
  const [near, setNear] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNear(entry.isIntersecting),
      { rootMargin: "300px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {fallback}
      {ready && near ? <div className="reveal absolute inset-0">{children}</div> : null}
    </div>
  );
}
