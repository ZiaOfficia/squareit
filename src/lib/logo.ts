/**
 * Geometry of the Squareit mark.
 *
 * Measured from the master artwork (public/images/company logo.png) by probing
 * the bitmap: four square rings, each opened at one corner, interlocking in a
 * 2×2 arrangement. Every number below is in "ring units" — one ring is 100×100
 * — so the same definition drives the SVG, the favicons and the 3D model.
 *
 * The source artwork is hand-traced and carries ~1% asymmetries (ring widths
 * vary by up to 8px in 528, arm ends by 15px). Those are normalised here: the
 * four rings are one shape reflected, not four slightly different shapes.
 */

export const LOGO = {
  /** One ring's outer box. */
  size: 100,
  /** Bar thickness. */
  stroke: 13.8,
  /** How far the short arm runs before the opening. */
  armEnd: 56.5,
  /** Where the short bar begins after the opening. */
  barStart: 55,
  /** Distance between the left and right ring columns. */
  column: 106.2,
  /** Distance between the top and bottom ring rows — they overlap by one
      stroke, which is what makes the halves read as interlocked. */
  row: 85.8,
} as const;

export const LOGO_WIDTH = LOGO.column + LOGO.size;
export const LOGO_HEIGHT = LOGO.row + LOGO.size;
export const LOGO_VIEWBOX = `0 0 ${LOGO_WIDTH} ${LOGO_HEIGHT}`;

/** Sampled from the master artwork rather than the site's brand tokens. */
export const LOGO_COLOURS = {
  green: "#069f45",
  red: "#f12f27",
  blue: "#0f77fc",
  yellow: "#fcc002",
} as const;

const INNER = LOGO.size - LOGO.stroke;

/**
 * One ring, opened at its bottom-left corner, traced as a single closed
 * outline: out along the top and right, back along the inside.
 */
export const RING_POINTS: readonly (readonly [number, number])[] = [
  [0, 0],
  [LOGO.size, 0],
  [LOGO.size, LOGO.size],
  [LOGO.barStart, LOGO.size],
  [LOGO.barStart, INNER],
  [INNER, INNER],
  [INNER, LOGO.stroke],
  [LOGO.stroke, LOGO.stroke],
  [LOGO.stroke, LOGO.armEnd],
  [0, LOGO.armEnd],
];

export const RING_PATH = `M0 0 H${LOGO.size} V${LOGO.size} H${LOGO.barStart} V${INNER} H${INNER} V${LOGO.stroke} H${LOGO.stroke} V${LOGO.armEnd} H0 Z`;

/**
 * The four quadrants. Each is the same ring reflected into place, so the
 * openings meet in the middle the way the artwork does. One ring-local point
 * (x, y) lands at (offset.x + flip.x · x, offset.y + flip.y · y).
 */
const QUADRANTS = [
  { key: "green", colour: LOGO_COLOURS.green, offset: [0, 0], flip: [1, 1] },
  { key: "red", colour: LOGO_COLOURS.red, offset: [LOGO_WIDTH, 0], flip: [-1, 1] },
  { key: "blue", colour: LOGO_COLOURS.blue, offset: [LOGO.size, LOGO_HEIGHT], flip: [-1, -1] },
  { key: "yellow", colour: LOGO_COLOURS.yellow, offset: [LOGO.column, LOGO_HEIGHT], flip: [1, -1] },
] as const;

export const LOGO_QUADRANTS = QUADRANTS.map((quadrant) => ({
  ...quadrant,
  svgTransform: `translate(${quadrant.offset[0]} ${quadrant.offset[1]}) scale(${quadrant.flip[0]} ${quadrant.flip[1]})`,
}));

export type LogoQuadrant = (typeof LOGO_QUADRANTS)[number];

/**
 * A quadrant's outline in centred, Y-up coordinates — what three.js wants.
 *
 * Reflecting a shape flips its winding order, so the result is normalised to a
 * counter-clockwise loop: without that, half the rings would extrude with
 * inverted normals and light differently from the other half.
 */
export function quadrantShape(quadrant: LogoQuadrant, scale = 1): [number, number][] {
  const [ox, oy] = quadrant.offset;
  const [fx, fy] = quadrant.flip;

  const points = RING_POINTS.map(([x, y]): [number, number] => [
    (ox + fx * x - LOGO_WIDTH / 2) * scale,
    // Negated: SVG counts Y downward, three.js counts it up.
    -(oy + fy * y - LOGO_HEIGHT / 2) * scale,
  ]);

  const twiceArea = points.reduce((sum, [x, y], index) => {
    const [nx, ny] = points[(index + 1) % points.length];
    return sum + (x * ny - nx * y);
  }, 0);

  return twiceArea < 0 ? points.reverse() : points;
}
