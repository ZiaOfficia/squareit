"use client";

import { useEffect, useState } from "react";

/** Cheap capability probe — a dead context is better found before the import. */
function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") ?? canvas.getContext("webgl")),
    );
  } catch {
    return false;
  }
}

/**
 * Gate for the hero's WebGL layers.
 *
 * Returns true only once the browser is idle, so three.js never competes with
 * the headline for LCP, and never at all when the visitor asked for reduced
 * motion or the device cannot render WebGL — in those cases the static
 * fallback is all that ships.
 */
export function useSceneReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches || !supportsWebGL()) return;

    // requestIdleCallback is still missing in Safari — fall back to a timeout.
    const schedule =
      window.requestIdleCallback ?? ((cb: IdleRequestCallback) => window.setTimeout(cb, 400));
    const cancel = window.cancelIdleCallback ?? window.clearTimeout;

    const handle = schedule(() => setReady(true));
    return () => cancel(handle as number);
  }, []);

  return ready;
}
