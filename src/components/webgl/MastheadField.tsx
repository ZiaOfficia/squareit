"use client";

import dynamic from "next/dynamic";

import { LogoMark } from "@/components/ui/LogoMark";
import { SceneLayer } from "./SceneLayer";
import type { MastheadAccent } from "./MastheadScene";

const MastheadScene = dynamic(() => import("./MastheadScene"), { ssr: false });

/**
 * Brand tiles drifting on the right of an inner-page masthead.
 *
 * Desktop only: below `lg` the layer is display:none, which SceneLayer's
 * observer never reports as near, so phones do not download three.js for a
 * policy page. The ghosted mark underneath is the reduced-motion and no-WebGL
 * result.
 */
export function MastheadField({ accent }: { accent: MastheadAccent }) {
  return (
    <SceneLayer
      className="hidden lg:block"
      fallback={
        <LogoMark className="absolute -right-16 top-1/2 h-64 -translate-y-1/2 opacity-[0.045]" />
      }
    >
      <MastheadScene accent={accent} />
    </SceneLayer>
  );
}
