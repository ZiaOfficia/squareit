"use client";

import dynamic from "next/dynamic";

import { SceneLayer } from "@/components/webgl/SceneLayer";

const CtaLightScene = dynamic(() => import("./CtaLightScene"), { ssr: false });

/** Light sweep across the blue CTA band, over a static highlight. */
export function CtaLight() {
  return (
    <SceneLayer
      fallback={
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(38rem 24rem at 72% 8%, rgba(255, 255, 255, 0.16), transparent 70%)",
              "radial-gradient(30rem 20rem at 14% 96%, rgba(255, 201, 51, 0.18), transparent 72%)",
            ].join(","),
          }}
        />
      }
    >
      <CtaLightScene />
    </SceneLayer>
  );
}
