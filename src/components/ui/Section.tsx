import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Applies a full-bleed background while keeping content in the grid. */
  tone?: "paper" | "paper-alt" | "white" | "ink" | "forest" | "blue";
  /** Vertical rhythm. */
  padding?: "none" | "sm" | "md" | "lg";
};

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  paper: "bg-paper text-ink",
  "paper-alt": "bg-paper-alt text-ink",
  white: "bg-white text-ink",
  ink: "bg-ink text-white",
  forest: "bg-forest text-white",
  blue: "bg-brand-blue text-white",
};

const paddings: Record<NonNullable<SectionProps["padding"]>, string> = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-28 lg:py-32",
};

export function Section({
  children,
  className = "",
  id,
  tone = "paper",
  padding = "md",
}: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} ${paddings[padding]} ${className}`}>
      {children}
    </section>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-page ${className}`}>{children}</div>;
}

/** Small uppercase label that opens most sections in the design. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

/**
 * Handwritten marginalia. Purely decorative in the layout sense, but it carries
 * real copy, so it stays readable text rather than an image.
 */
export function HandNote({
  children,
  className = "",
  underline = false,
}: {
  children: ReactNode;
  className?: string;
  underline?: boolean;
}) {
  return (
    <span className={`hand block text-[1.6rem] leading-[1.05] ${className}`}>
      {children}
      {underline ? (
        <svg viewBox="0 0 120 12" className="mt-1 h-2.5 w-28" fill="none" aria-hidden="true">
          <path
            d="M2 8.5c22-5 46-7 74-5.5 16 .9 28 3 42 5"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      ) : null}
    </span>
  );
}
