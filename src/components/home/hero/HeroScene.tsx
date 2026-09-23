"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { MathUtils, type Group, type Mesh } from "three";

import { usePointer } from "./usePointer";

/**
 * Floating brand squares — the WebGL layer sitting behind the hero.
 *
 * The palette is the logo's: green / red / blue / yellow on paper, with the
 * deep forest and ink used sparingly for weight. Tiles are hand-placed rather
 * than random so the composition stays stable across reloads and leaves the
 * copy column visually quiet.
 */

const TONES = {
  green: "#0f8a48",
  red: "#e0322a",
  blue: "#1553cc",
  yellow: "#ffc933",
  forest: "#0e3a2a",
  ink: "#101010",
} as const;

type Tile = {
  position: [number, number, number];
  rotation: [number, number, number];
  size: number;
  color: string;
  opacity: number;
  /** Vertical drift speed and travel. */
  drift: number;
  amplitude: number;
  /** Rotation speed. */
  spin: number;
  phase: number;
  /** Dropped on small screens to keep the fragment count down. */
  compact?: boolean;
};

const TILES: Tile[] = [
  // ── Right cluster: the hero's focal side — larger, closer, most saturated.
  { position: [4.2, 1.5, 0.6], rotation: [0.5, 0.7, 0.2], size: 1.5, color: TONES.green, opacity: 0.92, drift: 0.34, amplitude: 0.42, spin: 0.16, phase: 0.0, compact: true },
  { position: [6.1, -0.5, -0.8], rotation: [0.9, 0.3, -0.4], size: 1.25, color: TONES.red, opacity: 0.88, drift: 0.29, amplitude: 0.5, spin: 0.2, phase: 1.3, compact: true },
  { position: [3.1, -1.9, -0.2], rotation: [0.2, 1.0, 0.6], size: 1.05, color: TONES.yellow, opacity: 0.95, drift: 0.4, amplitude: 0.36, spin: 0.24, phase: 2.4, compact: true },
  { position: [5.4, 2.9, -2.1], rotation: [1.1, 0.5, 0.9], size: 0.95, color: TONES.blue, opacity: 0.78, drift: 0.26, amplitude: 0.54, spin: 0.18, phase: 3.1 },
  { position: [7.3, 1.9, -3.4], rotation: [0.4, 0.9, 0.3], size: 0.8, color: TONES.forest, opacity: 0.6, drift: 0.31, amplitude: 0.46, spin: 0.14, phase: 0.8 },
  { position: [2.4, 3.2, -1.4], rotation: [0.8, 0.2, 0.7], size: 0.62, color: TONES.red, opacity: 0.7, drift: 0.44, amplitude: 0.32, spin: 0.27, phase: 4.2 },
  { position: [6.6, -2.6, -1.9], rotation: [0.6, 1.2, 0.1], size: 0.86, color: TONES.blue, opacity: 0.72, drift: 0.24, amplitude: 0.48, spin: 0.21, phase: 5.0 },

  // ── Centre: mid-depth punctuation between the copy and the collage.
  { position: [0.6, 3.0, -3.0], rotation: [0.3, 0.6, 0.4], size: 0.7, color: TONES.yellow, opacity: 0.6, drift: 0.36, amplitude: 0.4, spin: 0.19, phase: 1.9 },
  { position: [1.2, -3.1, -2.4], rotation: [0.9, 0.4, 0.8], size: 0.78, color: TONES.green, opacity: 0.55, drift: 0.3, amplitude: 0.44, spin: 0.16, phase: 2.8, compact: true },

  // ── Left region: behind the headline, so everything stays far and faint.
  { position: [-2.6, 2.6, -4.2], rotation: [0.7, 0.3, 0.5], size: 0.72, color: TONES.blue, opacity: 0.4, drift: 0.27, amplitude: 0.38, spin: 0.13, phase: 3.6 },
  { position: [-4.9, -1.2, -5.0], rotation: [0.2, 0.8, 0.2], size: 0.9, color: TONES.green, opacity: 0.34, drift: 0.22, amplitude: 0.5, spin: 0.11, phase: 0.4 },
  { position: [-6.8, 2.1, -5.6], rotation: [1.0, 0.5, 0.6], size: 0.66, color: TONES.red, opacity: 0.32, drift: 0.33, amplitude: 0.34, spin: 0.17, phase: 4.7 },
  { position: [-3.4, -3.3, -4.6], rotation: [0.5, 1.1, 0.3], size: 0.58, color: TONES.yellow, opacity: 0.38, drift: 0.38, amplitude: 0.3, spin: 0.22, phase: 5.4 },
  { position: [-7.4, -2.8, -6.2], rotation: [0.8, 0.6, 0.9], size: 0.8, color: TONES.ink, opacity: 0.16, drift: 0.2, amplitude: 0.42, spin: 0.1, phase: 1.1 },
  { position: [-1.4, 0.4, -5.8], rotation: [0.4, 0.4, 0.4], size: 0.5, color: TONES.forest, opacity: 0.28, drift: 0.42, amplitude: 0.28, spin: 0.25, phase: 2.2 },
];

/** Thin extruded square — the logo's mark, given depth. */
function BrandTile({ tile }: { tile: Tile }) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh) return;

    const t = state.clock.elapsedTime;
    mesh.position.y = tile.position[1] + Math.sin(t * tile.drift + tile.phase) * tile.amplitude;
    mesh.rotation.x = tile.rotation[0] + Math.sin(t * tile.spin + tile.phase) * 0.3;
    mesh.rotation.y = tile.rotation[1] + t * tile.spin * 0.5;
    mesh.rotation.z = tile.rotation[2] + Math.cos(t * tile.spin * 0.8 + tile.phase) * 0.16;
  });

  return (
    <RoundedBox
      ref={ref}
      args={[tile.size, tile.size, tile.size * 0.17]}
      radius={tile.size * 0.07}
      smoothness={3}
      position={tile.position}
      rotation={tile.rotation}
    >
      <meshStandardMaterial
        color={tile.color}
        roughness={0.45}
        metalness={0.08}
        transparent
        opacity={tile.opacity}
      />
    </RoundedBox>
  );
}

/** Tilts the whole field toward the cursor. */
function TileField({ compact }: { compact: boolean }) {
  const group = useRef<Group>(null);
  const pointer = usePointer();

  useFrame((state, delta) => {
    const field = group.current;
    if (!field) return;

    // Damped so a fast cursor glides rather than snaps.
    const lerp = 1 - Math.pow(0.0015, delta);
    field.rotation.y = MathUtils.lerp(field.rotation.y, pointer.current.x * 0.16, lerp);
    field.rotation.x = MathUtils.lerp(field.rotation.x, pointer.current.y * 0.1, lerp);
    field.position.x = MathUtils.lerp(field.position.x, pointer.current.x * -0.35, lerp);

    // A whisper of float on the whole field keeps it alive when the cursor is still.
    field.position.y = Math.sin(state.clock.elapsedTime * 0.18) * 0.18;
  });

  const tiles = compact ? TILES.filter((tile) => tile.compact) : TILES;

  return (
    <group ref={group}>
      {tiles.map((tile) => (
        <BrandTile key={`${tile.position.join(",")}`} tile={tile} />
      ))}
    </group>
  );
}

export default function HeroScene() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 768px)");
    const sync = () => setCompact(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <Canvas
      // Decorative only — never announced, never interactive.
      aria-hidden="true"
      camera={{ position: [0, 0, 9], fov: 40 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      {/* Flat, paper-lit studio: bright ambient with one warm key so the
          brand colours read true rather than shaded muddy. */}
      <ambientLight intensity={1.35} />
      <directionalLight position={[4, 6, 8]} intensity={1.5} color="#fffaf0" />
      <directionalLight position={[-6, -3, 4]} intensity={0.55} color="#dfe7ff" />
      <TileField compact={compact} />
    </Canvas>
  );
}
