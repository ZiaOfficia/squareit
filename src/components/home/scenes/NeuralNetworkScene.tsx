"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  AdditiveBlending,
  BufferAttribute,
  Color,
  Euler,
  MathUtils,
  Matrix4,
  Quaternion,
  Vector3,
  type BufferGeometry,
  type InstancedMesh,
  type Points,
  type Group,
} from "three";

import { usePointer } from "@/components/webgl/usePointer";

/**
 * The network behind the Services band.
 *
 * A layered graph — input, two hidden layers, output — with signal pulses
 * running left to right along its edges. It is the agency's claim rendered
 * literally: work goes in, intelligence moves through it quickly, results come
 * out. The pulses are deliberately fast; that is the point being made.
 *
 * Three draw calls total: one instanced mesh for the nodes, one line segment
 * batch for the edges, one point cloud for the pulses.
 */

/** Nodes per layer: a shape that reads as a network at a glance. */
const LAYERS = [5, 8, 8, 4];
const SPAN_X = 13;
const SPAN_Y = 6.4;
/** Edges each node fans out to in the next layer. More reads as noise. */
const FAN = 3;
const PULSES = 34;

const NODE_TONES = ["#0f8a48", "#e0322a", "#1553cc", "#ffc933"] as const;
/** Signals are warm and bright so they read as energy, not as more brand. */
const PULSE_TONES = ["#ffc933", "#ffffff", "#8fd4ff"] as const;

/** Deterministic jitter — the same network on every load, server and client. */
function hash(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

type Node = { position: Vector3; layer: number; phase: number };
type Edge = { from: number; to: number };

function buildGraph() {
  const nodes: Node[] = [];
  const layerStart: number[] = [];

  LAYERS.forEach((count, layer) => {
    layerStart.push(nodes.length);
    const x = -SPAN_X / 2 + (layer / (LAYERS.length - 1)) * SPAN_X;

    for (let i = 0; i < count; i++) {
      // Centre each column, then nudge only slightly. The columns have to stay
      // legible as columns — that is what makes this read as a network and not
      // as scattered confetti — so the jitter is small and the depth shallow.
      const spread = count === 1 ? 0 : (i / (count - 1) - 0.5) * SPAN_Y;
      const seed = layer * 31 + i;
      nodes.push({
        position: new Vector3(
          x + (hash(seed) - 0.5) * 0.28,
          spread + (hash(seed + 7) - 0.5) * 0.36,
          (hash(seed + 13) - 0.5) * 1.6,
        ),
        layer,
        phase: hash(seed + 21) * Math.PI * 2,
      });
    }
  });

  const edges: Edge[] = [];
  const seen = new Set<string>();

  for (let layer = 0; layer < LAYERS.length - 1; layer++) {
    const from = layerStart[layer];
    const to = layerStart[layer + 1];
    const nextCount = LAYERS[layer + 1];

    for (let i = 0; i < LAYERS[layer]; i++) {
      // Fan out to the nearest nodes in the next column, which keeps the
      // edges reading as a flow rather than a tangle. Clamping at the top and
      // bottom of a column collapses targets, so duplicates are dropped —
      // otherwise those edges draw twice and read brighter than the rest.
      const centre = Math.round((i / Math.max(1, LAYERS[layer] - 1)) * (nextCount - 1));
      for (let k = 0; k < FAN; k++) {
        const target = MathUtils.clamp(centre + k - Math.floor(FAN / 2), 0, nextCount - 1);
        const key = `${from + i}>${to + target}`;
        if (seen.has(key)) continue;
        seen.add(key);
        edges.push({ from: from + i, to: to + target });
      }
    }
  }

  return { nodes, edges };
}

function Network() {
  const groupRef = useRef<Group>(null);
  const nodesRef = useRef<InstancedMesh>(null);
  const edgesRef = useRef<BufferGeometry>(null);
  const pulsesRef = useRef<Points>(null);
  const pointer = usePointer();

  const { nodes, edges } = useMemo(buildGraph, []);

  /** Live node positions, recomputed each frame and shared by all three passes. */
  const live = useMemo(() => nodes.map((node) => node.position.clone()), [nodes]);

  const edgePositions = useMemo(() => new Float32Array(edges.length * 6), [edges]);

  const pulses = useMemo(
    () =>
      Array.from({ length: PULSES }, (_, i) => ({
        edge: Math.floor(hash(i * 3.7) * edges.length),
        t: hash(i * 5.1),
        // Fast: a signal crosses a layer in well under a second.
        speed: 0.55 + hash(i * 7.3) * 0.85,
      })),
    [edges.length],
  );

  const pulsePositions = useMemo(() => new Float32Array(PULSES * 3), []);

  const pulseColours = useMemo(() => {
    const array = new Float32Array(PULSES * 3);
    const colour = new Color();
    for (let i = 0; i < PULSES; i++) {
      colour.set(PULSE_TONES[i % PULSE_TONES.length]).toArray(array, i * 3);
    }
    return array;
  }, []);

  const nodeColours = useMemo(() => {
    const colour = new Color();
    return nodes.map((_, i) => colour.set(NODE_TONES[i % NODE_TONES.length]).clone());
  }, [nodes]);

  const scratch = useMemo(
    () => ({
      matrix: new Matrix4(),
      position: new Vector3(),
      euler: new Euler(),
      quaternion: new Quaternion(),
      scale: new Vector3(),
      a: new Vector3(),
      b: new Vector3(),
    }),
    [],
  );

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    // 1. Nodes drift, breathe, and turn slowly in place.
    nodes.forEach((node, i) => {
      live[i].set(
        node.position.x,
        node.position.y + Math.sin(t * 0.45 + node.phase) * 0.22,
        node.position.z + Math.cos(t * 0.35 + node.phase) * 0.18,
      );
    });

    const mesh = nodesRef.current;
    if (mesh) {
      nodes.forEach((node, i) => {
        scratch.euler.set(t * 0.16 + node.phase, t * 0.22 + node.phase, 0);
        scratch.quaternion.setFromEuler(scratch.euler);
        // A slow pulse of size, as if each unit were firing.
        scratch.scale.setScalar(0.22 + Math.sin(t * 1.1 + node.phase) * 0.035);
        scratch.matrix.compose(live[i], scratch.quaternion, scratch.scale);
        mesh.setMatrixAt(i, scratch.matrix);
      });
      mesh.instanceMatrix.needsUpdate = true;
    }

    // 2. Edges follow whatever the nodes did.
    edges.forEach((edge, i) => {
      const a = live[edge.from];
      const b = live[edge.to];
      edgePositions.set([a.x, a.y, a.z, b.x, b.y, b.z], i * 6);
    });
    const edgeGeometry = edgesRef.current;
    if (edgeGeometry) {
      const attribute = edgeGeometry.getAttribute("position") as BufferAttribute;
      attribute.needsUpdate = true;
    }

    // 3. Signals travel the edges and respawn on a new one at the end.
    pulses.forEach((pulse, i) => {
      pulse.t += delta * pulse.speed;
      if (pulse.t >= 1) {
        pulse.t %= 1;
        pulse.edge = Math.floor(hash(t * 13.7 + i * 2.3) * edges.length);
      }
      const edge = edges[pulse.edge];
      scratch.a.copy(live[edge.from]);
      scratch.b.copy(live[edge.to]);
      scratch.position.lerpVectors(scratch.a, scratch.b, pulse.t);
      pulsePositions.set([scratch.position.x, scratch.position.y, scratch.position.z], i * 3);
    });
    const points = pulsesRef.current;
    if (points) {
      const attribute = points.geometry.getAttribute("position") as BufferAttribute;
      attribute.needsUpdate = true;
    }

    // 4. The whole graph leans with the cursor, well damped.
    const graph = groupRef.current;
    if (graph) {
      const lerp = 1 - Math.pow(0.002, delta);
      graph.rotation.y = MathUtils.lerp(graph.rotation.y, pointer.current.x * 0.16, lerp);
      graph.rotation.x = MathUtils.lerp(graph.rotation.x, pointer.current.y * 0.1, lerp);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Edges — thin, cool and faint: structure, not subject. */}
      <lineSegments>
        <bufferGeometry ref={edgesRef}>
          <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#5f8bd6" transparent opacity={0.22} />
      </lineSegments>

      {/* Nodes — the brand's squares, one per unit. */}
      <instancedMesh
        ref={nodesRef}
        args={[undefined, undefined, nodes.length]}
        onUpdate={(mesh) => {
          nodeColours.forEach((colour, i) => mesh.setColorAt(i, colour));
          if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
        }}
      >
        <boxGeometry args={[1, 1, 0.28]} />
        <meshBasicMaterial transparent opacity={0.8} />
      </instancedMesh>

      {/* Signals — additive so they read as light moving through the graph. */}
      <points ref={pulsesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pulsePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[pulseColours, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.17}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.95}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export default function NeuralNetworkScene() {
  return (
    <Canvas
      aria-hidden="true"
      camera={{ position: [0, 0, 11], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <Network />
    </Canvas>
  );
}
