import { LOGO_QUADRANTS, LOGO_VIEWBOX, RING_PATH } from "@/lib/logo";

/**
 * The Squareit mark: four interlocking square rings.
 *
 * Every ring is the same outline reflected into place, so the shape can never
 * drift out of sync between the header, the favicons and the 3D hero model —
 * they all read from src/lib/logo.ts.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={LOGO_VIEWBOX} className={className} aria-hidden="true">
      {LOGO_QUADRANTS.map((quadrant) => (
        <path
          key={quadrant.key}
          d={RING_PATH}
          transform={quadrant.svgTransform}
          fill={quadrant.colour}
        />
      ))}
    </svg>
  );
}
