"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdditiveBlending, Color, ShaderMaterial, Vector2 } from "three";

/**
 * Data streams across the CTA band.
 *
 * One full-bleed plane with a fragment shader — a single draw call, no
 * geometry, no lighting. Layered value-noise pushes soft bands of lighter blue
 * and brand yellow across the section, and packets race along noise-bent lanes
 * on top of them — the same "work moving fast" idea as the Services network,
 * carried into the closing band.
 */

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision mediump float;

  uniform float uTime;
  uniform vec2 uAspect;
  uniform vec3 uWarm;
  uniform vec3 uCool;

  varying vec2 vUv;

  // Value noise — cheap, and smooth enough for slow-moving light.
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float total = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      total += noise(p) * amplitude;
      p *= 2.02;
      amplitude *= 0.5;
    }
    return total;
  }

  void main() {
    vec2 uv = (vUv - 0.5) * uAspect;

    float drift = uTime * 0.045;
    float field = fbm(uv * 1.6 + vec2(drift, drift * 0.35));
    float second = fbm(uv * 2.4 - vec2(drift * 0.8, drift * 0.2));

    // Two soft bands travelling at different speeds.
    float warm = smoothstep(0.52, 0.86, field);
    float cool = smoothstep(0.48, 0.92, second);

    // Data streams: thin highlights racing left to right along the band, their
    // paths bent by the noise field so they read as traffic rather than stripes.
    float lanes = uv.y * 7.0 + field * 2.6;
    float phase = fract(lanes);
    float lane = smoothstep(0.46, 0.5, phase) * smoothstep(0.54, 0.5, phase);

    // Each lane carries a packet whose position depends on which lane it is in.
    float laneId = floor(lanes);
    float head = fract(uv.x * 0.32 - uTime * 0.42 + hash(vec2(laneId, 3.0)));
    float packet = smoothstep(0.86, 1.0, head) * lane;
    float trail = smoothstep(0.35, 1.0, head) * lane * 0.22;

    // Falls away at the edges so the band never looks like a pasted rectangle.
    float vignette = smoothstep(1.25, 0.15, length(uv * vec2(0.62, 1.0)));

    vec3 colour = uWarm * warm * 0.48 + uCool * cool * 0.62;
    colour += uWarm * packet * 0.9 + uCool * trail;

    gl_FragColor = vec4(colour * vignette, 1.0);
  }
`;

function LightPlane() {
  const material = useRef<ShaderMaterial>(null);
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAspect: { value: new Vector2(1, 1) },
      // Brand yellow and a lifted blue — the band's own palette, nothing new.
      uWarm: { value: new Color("#ffc933") },
      uCool: { value: new Color("#7fb0ff") },
    }),
    [],
  );

  useFrame((state) => {
    if (!material.current) return;
    material.current.uniforms.uTime.value = state.clock.elapsedTime;
    material.current.uniforms.uAspect.value.set(Math.max(1, viewport.aspect), 1);
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={material}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        blending={AdditiveBlending}
        depthWrite={false}
        transparent
      />
    </mesh>
  );
}

export default function CtaLightScene() {
  return (
    <Canvas
      aria-hidden="true"
      camera={{ position: [0, 0, 1], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      style={{ pointerEvents: "none" }}
    >
      <LightPlane />
    </Canvas>
  );
}
