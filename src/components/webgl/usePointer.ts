"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor position normalised to [-1, 1] on both axes.
 *
 * Listens on the window rather than the canvas: both hero canvases are
 * pointer-events:none so the buttons and links underneath stay clickable.
 * A ref, not state — this feeds useFrame and must never trigger a re-render.
 */
export function usePointer() {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      };
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return pointer;
}
