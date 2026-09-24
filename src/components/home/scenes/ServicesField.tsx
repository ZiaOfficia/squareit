"use client";

import dynamic from "next/dynamic";

import { SceneLayer } from "@/components/webgl/SceneLayer";

const NeuralNetworkScene = dynamic(() => import("./NeuralNetworkScene"), { ssr: false });

/** Neural network behind the Services band, over a static ink-and-brand wash. */
export function ServicesField() {
  return (
    <SceneLayer
      fallback={
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(46rem 30rem at 82% 12%, rgba(21, 83, 204, 0.3), transparent 72%)",
              "radial-gradient(34rem 26rem at 8% 84%, rgba(15, 138, 72, 0.26), transparent 74%)",
              "radial-gradient(28rem 22rem at 46% 108%, rgba(255, 201, 51, 0.14), transparent 70%)",
            ].join(","),
          }}
        />
      }
    >
      <NeuralNetworkScene />
    </SceneLayer>
  );
}
