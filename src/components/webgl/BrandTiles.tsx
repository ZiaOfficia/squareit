"use client";

import { useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { Vector3, type BufferGeometry, type Group, type Mesh, type Points } from "three";

import { gsap, useGSAP } from "@/components/motion/gsap";

/**
 * The floating brand squares, shared by the hero and the inner-page mastheads
 * so every page speaks the same 3D language.
 *
 * The palette is the logo's: green / red / blue / yellow on paper, with the
 * deep forest and ink used sparingly for weight.
 */

export const TONES = {
  green: "#0f8a48",
  red: "#e0322a",
  blue: "#1553cc",
  yellow: "#ffc933",
  forest: "#0e3a2a",
  ink: "#101010",
} as const;

export type Tile = {
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

/**
 * Where a tile actually is at time `t`.
 *
 * Shared by the tiles and the links between them: the connecting lines have to
 * track the drift exactly, and recomputing the position is cheaper and simpler
 * than reading it back off the meshes after they have been updated.
 */
function tilePosition(tile: Tile, t: number, out: Vector3) {
  return out.set(
    tile.position[0],
    tile.position[1] + Math.sin(t * tile.drift + tile.phase) * tile.amplitude,
    tile.position[2],
  );
}

/** Thin extruded square — the logo's mark, given depth. */
export function BrandTile({ tile }: { tile: Tile }) {
  const ref = useRef<Mesh>(null);

  // Position and rotation are driven here; scale is deliberately left alone so
  // a scene can tween it (see MastheadScene's arrival).
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

/**
 * Pops a group's tiles in one after another when the scene mounts.
 *
 * GSAP tweens the meshes' scale directly — plain objects to it — and the
 * render loop picks the values up on its next frame, so no React state moves.
 */
export function useTileArrival(group: RefObject<Group | null>) {
  useGSAP(() => {
    const tiles = group.current?.children.filter((child) => (child as Mesh).isMesh) ?? [];
    if (tiles.length === 0) return;

    gsap.from(
      tiles.map((tile) => tile.scale),
      { x: 0.001, y: 0.001, z: 0.001, duration: 0.9, ease: "back.out(1.6)", stagger: 0.06 },
    );
  });
}

/**
 * Links between nearby tiles, with signals running along them.
 *
 * This is what turns the floating squares into a network: the same
 * composition, now visibly connected and passing traffic. Pairs are chosen once
 * by proximity — close enough to look deliberate, sparse enough to keep the
 * copy column clear.
 */
export function TileLinks({
  tiles,
  /** Tiles closer than this are joined. */
  reach = 3.4,
  pulseColor = TONES.blue,
}: {
  tiles: Tile[];
  reach?: number;
  pulseColor?: string;
}) {
  const geometryRef = useRef<BufferGeometry>(null);
  const pulsesRef = useRef<Points>(null);

  const pairs = useMemo(() => {
    const found: [number, number][] = [];
    const a = new Vector3();
    const b = new Vector3();

    tiles.forEach((first, i) => {
      tiles.slice(i + 1).forEach((second, offset) => {
        a.set(...first.position);
        b.set(...second.position);
        if (a.distanceTo(b) < reach) found.push([i, i + 1 + offset]);
      });
    });

    return found;
  }, [tiles, reach]);

  const positions = useMemo(() => new Float32Array(pairs.length * 6), [pairs]);
  const pulsePositions = useMemo(() => new Float32Array(pairs.length * 3), [pairs]);

  const pulses = useMemo(
    () =>
      pairs.map((_, i) => ({
        t: (i * 0.37) % 1,
        // Quick relative to the tiles' drift — the network reads as busy.
        speed: 0.4 + ((i * 0.19) % 0.5),
      })),
    [pairs],
  );

  const scratch = useMemo(() => ({ a: new Vector3(), b: new Vector3(), p: new Vector3() }), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    pairs.forEach(([from, to], i) => {
      tilePosition(tiles[from], t, scratch.a);
      tilePosition(tiles[to], t, scratch.b);
      positions.set(
        [scratch.a.x, scratch.a.y, scratch.a.z, scratch.b.x, scratch.b.y, scratch.b.z],
        i * 6,
      );

      const pulse = pulses[i];
      pulse.t = (pulse.t + delta * pulse.speed) % 1;
      scratch.p.lerpVectors(scratch.a, scratch.b, pulse.t);
      pulsePositions.set([scratch.p.x, scratch.p.y, scratch.p.z], i * 3);
    });

    const geometry = geometryRef.current;
    if (geometry) geometry.getAttribute("position").needsUpdate = true;

    const points = pulsesRef.current;
    if (points) points.geometry.getAttribute("position").needsUpdate = true;
  });

  return (
    <>
      <lineSegments>
        <bufferGeometry ref={geometryRef}>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        {/* Ink at low opacity: legible on paper without competing with text. */}
        <lineBasicMaterial color={TONES.ink} transparent opacity={0.14} />
      </lineSegments>

      <points ref={pulsesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pulsePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={pulseColor}
          size={0.1}
          sizeAttenuation
          transparent
          opacity={0.75}
          depthWrite={false}
        />
      </points>
    </>
  );
}
