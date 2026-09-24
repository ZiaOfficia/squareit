"use client";

import dynamic from "next/dynamic";

import { LogoMark } from "@/components/ui/LogoMark";
import { useSceneReady } from "@/components/webgl/useSceneReady";

/**
 * Client shell for the collage's focal object.
 *
 * The static mark underneath is not a loading state — it is the real fallback
 * for reduced motion and for devices without WebGL, and it is what the collage
 * shows for the first idle frame either way.
 */

const HeroMarkScene = dynamic(() => import("./HeroMarkScene"), { ssr: false });

export function HeroMark() {
  const ready = useSceneReady();

  return (
    <div className="pointer-events-none absolute inset-x-[12%] bottom-[2%] top-[6%]" aria-hidden="true">
      {ready ? (
        <div className="reveal size-full">
          <HeroMarkScene />
        </div>
      ) : (
        <div className="flex size-full items-center justify-center">
          <LogoMark className="w-[72%] drop-shadow-[0_18px_30px_rgba(16,16,16,0.22)]" />
        </div>
      )}
    </div>
  );
}
