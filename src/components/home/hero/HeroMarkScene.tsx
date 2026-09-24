"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ExtrudeGeometry, MathUtils, NoToneMapping, Shape, type Group, type Mesh } from "three";

import { LOGO_QUADRANTS, quadrantShape, type LogoQuadrant } from "@/lib/logo";
import { usePointer } from "@/components/webgl/usePointer";

/**
 * The hero's focal object: the Squareit mark built as real geometry.
 *
 * The four rings are extruded from the same outline the SVG logo uses
 * (src/lib/logo.ts), so the 3D model and the flat mark can never disagree.
 */

/** Ring units → world units. The full mark is ~206 × 186 units wide. */
const SCALE = 1 / 44;
const DEPTH = 0.3;

/** One extruded ring, breathing along its own axis of depth. */
function MarkRing({ quadrant, index }: { quadrant: LogoQuadrant; index: number }) {
  const ref = useRef<Mesh>(null);
  const phase = index * 1.55;

  const geometry = useMemo(() => {
    const shape = new Shape();
    const points = quadrantShape(quadrant, SCALE);

    points.forEach(([x, y], i) => (i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y)));
    shape.closePath();

    const geo = new ExtrudeGeometry(shape, {
      depth: DEPTH,
      bevelEnabled: true,
      bevelThickness: 0.018,
      bevelSize: 0.018,
      bevelSegments: 2,
      curveSegments: 1,
    });

    // Extrusion grows along +Z from the outline; recentre so the mark spins
    // about its own middle rather than its back face.
    geo.translate(0, 0, -DEPTH / 2);
    return geo;
  }, [quadrant]);

  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh) return;

    const t = state.clock.elapsedTime;
    // Small enough that the four rings always read as one interlocked mark.
    mesh.position.z = Math.sin(t * 0.5 + phase) * 0.2;
    mesh.position.x = Math.sin(t * 0.38 + phase) * 0.035;
    mesh.position.y = Math.cos(t * 0.43 + phase) * 0.035;
  });

  return (
    <mesh ref={ref} geometry={geometry}>
      <meshStandardMaterial color={quadrant.colour} roughness={0.36} metalness={0.12} />
    </mesh>
  );
}

function Mark() {
  const group = useRef<Group>(null);
  const pointer = usePointer();

  useFrame((state, delta) => {
    const mark = group.current;
    if (!mark) return;

    const t = state.clock.elapsedTime;
    const lerp = 1 - Math.pow(0.002, delta);

    // Slow idle turn, with the cursor adding a lean on top of it.
    const targetY = Math.sin(t * 0.22) * 0.32 + pointer.current.x * 0.38;
    const targetX = -0.06 + Math.sin(t * 0.17) * 0.06 + pointer.current.y * 0.22;

    mark.rotation.y = MathUtils.lerp(mark.rotation.y, targetY, lerp);
    mark.rotation.x = MathUtils.lerp(mark.rotation.x, targetX, lerp);
    mark.position.y = Math.sin(t * 0.3) * 0.1;
  });

  return (
    <group ref={group}>
      {LOGO_QUADRANTS.map((quadrant, index) => (
        <MarkRing key={quadrant.key} quadrant={quadrant} index={index} />
      ))}
    </group>
  );
}

export default function HeroMarkScene() {
  return (
    <Canvas
      aria-hidden="true"
      camera={{ position: [0, 0, 7.4], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        // Filmic tone mapping would desaturate the brand colours; the mark has
        // to render as the logo's exact hues, so the curve is left linear.
        toneMapping: NoToneMapping,
      }}
      style={{ pointerEvents: "none" }}
    >
      {/* Budgeted so a front face lands at ~1.0 total irradiance: the faces
          pointing at the viewer read as the logo's flat colour, and only the
          extruded sides and bevels fall into shadow. */}
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 5, 7]} intensity={0.6} color="#fffdf7" />
      <directionalLight position={[-5, 2, 3]} intensity={0.2} color="#e8efff" />
      <directionalLight position={[0, -4, 2]} intensity={0.12} color="#fff1d6" />
      <Mark />
    </Canvas>
  );
}
