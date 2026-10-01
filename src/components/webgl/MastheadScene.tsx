"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MathUtils, type Group } from "three";

import { gsap, useGSAP } from "@/components/motion/gsap";
import { BrandTile, TileLinks, TONES, useTileArrival, type Tile } from "./BrandTiles";
import { usePointer } from "./usePointer";

/**
 * The hero's tile network, cut down to one small cluster for the inner-page
 * mastheads. Same geometry, same light, same palette — re-ordered so the
 * section's accent leads.
 */

export type MastheadAccent = "green" | "red" | "blue" | "yellow" | "forest";

/** Lead colour first, then the supporting brand tones. */
const PALETTES: Record<MastheadAccent, string[]> = {
  green: [TONES.green, TONES.yellow, TONES.blue, TONES.red, TONES.forest],
  red: [TONES.red, TONES.yellow, TONES.blue, TONES.green, TONES.forest],
  blue: [TONES.blue, TONES.yellow, TONES.red, TONES.green, TONES.forest],
  yellow: [TONES.yellow, TONES.blue, TONES.red, TONES.green, TONES.forest],
  forest: [TONES.forest, TONES.green, TONES.yellow, TONES.blue, TONES.red],
};

/**
 * Hand-placed around the cluster's own origin. The lower-right is left open on
 * purpose: that is where the masthead's handwritten note sits.
 */
const SLOTS: (Omit<Tile, "color"> & { tone: number })[] = [
  { tone: 0, position: [0.2, 1.3, 0.4], rotation: [0.5, 0.7, 0.2], size: 1.4, opacity: 0.9, drift: 0.34, amplitude: 0.3, spin: 0.16, phase: 0.0 },
  { tone: 1, position: [2.6, 1.6, -0.8], rotation: [0.9, 0.3, -0.4], size: 0.95, opacity: 0.9, drift: 0.29, amplitude: 0.32, spin: 0.2, phase: 1.3 },
  { tone: 2, position: [-2.0, -0.2, -0.6], rotation: [0.2, 1.0, 0.6], size: 1.0, opacity: 0.78, drift: 0.4, amplitude: 0.28, spin: 0.24, phase: 2.4 },
  { tone: 3, position: [-2.6, 2.0, -2.0], rotation: [1.1, 0.5, 0.9], size: 0.7, opacity: 0.66, drift: 0.26, amplitude: 0.3, spin: 0.18, phase: 3.1 },
  { tone: 0, position: [-3.6, -2.0, -2.4], rotation: [0.4, 0.9, 0.3], size: 0.7, opacity: 0.5, drift: 0.31, amplitude: 0.26, spin: 0.14, phase: 0.8 },
  { tone: 4, position: [-4.6, 2.5, -3.6], rotation: [0.8, 0.2, 0.7], size: 0.55, opacity: 0.3, drift: 0.44, amplitude: 0.24, spin: 0.27, phase: 4.2 },
  { tone: 1, position: [3.4, -0.6, -2.6], rotation: [0.6, 1.2, 0.1], size: 0.55, opacity: 0.5, drift: 0.24, amplitude: 0.3, spin: 0.21, phase: 5.0 },
];

function Cluster({ accent }: { accent: MastheadAccent }) {
  const scroller = useRef<Group>(null);
  const field = useRef<Group>(null);
  const pointer = usePointer();
  const { viewport, gl } = useThree();

  const palette = PALETTES[accent];
  const tiles = useMemo<Tile[]>(
    () => SLOTS.map(({ tone, ...slot }) => ({ ...slot, color: palette[tone] })),
    [palette],
  );

  useTileArrival(field);

  // As the masthead scrolls away the cluster turns and lifts with it. GSAP owns
  // the outer group and the cursor owns the inner one, so the two never write
  // to the same property.
  useGSAP(
    () => {
      const group = scroller.current;
      if (!group) return;

      gsap
        .timeline({
          scrollTrigger: { trigger: gl.domElement, start: 0, end: "bottom top", scrub: 0.6 },
        })
        .to(group.rotation, { x: 0.3, z: -0.4, ease: "none" }, 0)
        .to(group.position, { y: 1.4, ease: "none" }, 0);
    },
    { dependencies: [gl] },
  );

  useFrame((_, delta) => {
    const group = field.current;
    if (!group) return;

    // Damped so a fast cursor glides rather than snaps.
    const lerp = 1 - Math.pow(0.0015, delta);
    group.rotation.y = MathUtils.lerp(group.rotation.y, pointer.current.x * 0.18, lerp);
    group.rotation.x = MathUtils.lerp(group.rotation.x, pointer.current.y * 0.1, lerp);
  });

  return (
    // Anchored to the right edge whatever the masthead's aspect ratio.
    <group ref={scroller} position-x={viewport.width / 2 - 3.6}>
      <group ref={field}>
        {tiles.map((tile) => (
          <BrandTile key={tile.position.join(",")} tile={tile} />
        ))}
        <TileLinks tiles={tiles} pulseColor={accent === "blue" ? TONES.red : TONES.blue} />
      </group>
    </group>
  );
}

export default function MastheadScene({ accent }: { accent: MastheadAccent }) {
  return (
    <Canvas
      // Decorative only — never announced, never interactive.
      aria-hidden="true"
      camera={{ position: [0, 0, 9], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ pointerEvents: "none" }}
    >
      {/* The hero's paper-lit studio, so the brand colours read the same here. */}
      <ambientLight intensity={1.35} />
      <directionalLight position={[4, 6, 8]} intensity={1.5} color="#fffaf0" />
      <directionalLight position={[-6, -3, 4]} intensity={0.55} color="#dfe7ff" />
      <Cluster accent={accent} />
    </Canvas>
  );
}
