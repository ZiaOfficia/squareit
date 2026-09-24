"use client";

import dynamic from "next/dynamic";

import { useSceneReady } from "@/components/webgl/useSceneReady";

/**
 * Client shell for the hero's WebGL layer.
 *
 * Three rules drive this file:
 *  1. The headline is the LCP element, so the scene only starts loading once
 *     the browser is idle — never in the critical path.
 *  2. Anyone who asks for reduced motion, or whose device has no WebGL, gets
 *     the static gradient and nothing else downloads.
 *  3. It is decoration. It is hidden from assistive tech and never takes
 *     pointer events away from the buttons sitting on top of it.
 */

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export function HeroBackdrop() {
  const showScene = useSceneReady();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Static brand wash — the reduced-motion and no-WebGL result, and the
          bed the canvas fades in over so there is never an empty frame. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(42rem 28rem at 78% 18%, rgba(21, 83, 204, 0.16), transparent 70%)",
            "radial-gradient(34rem 24rem at 92% 72%, rgba(224, 50, 42, 0.14), transparent 72%)",
            "radial-gradient(30rem 22rem at 58% 88%, rgba(255, 201, 51, 0.2), transparent 70%)",
            "radial-gradient(38rem 26rem at 12% 30%, rgba(15, 138, 72, 0.1), transparent 72%)",
          ].join(","),
        }}
      />

      {showScene ? (
        <div className="reveal absolute inset-0">
          <HeroScene />
        </div>
      ) : null}

      {/* Legibility mask: heaviest over the copy column on the left, clearing
          toward the right so the tiles stay visible around the collage. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(90% 120% at 12% 45%, var(--color-paper) 0%, rgba(250, 248, 243, 0.92) 26%, rgba(250, 248, 243, 0.6) 48%, rgba(250, 248, 243, 0.12) 74%, rgba(250, 248, 243, 0) 100%)",
        }}
      />

      {/* Softens the seam into the stats bar below. */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-paper" />
    </div>
  );
}
