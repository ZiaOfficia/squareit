import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "./Icons";

type Variant = "dark" | "yellow" | "outline" | "light" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  dark: "bg-ink text-white hover:bg-ink-soft",
  yellow: "bg-brand-yellow text-ink hover:bg-brand-yellow-dark",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink hover:bg-paper-alt",
  ghost: "text-ink hover:bg-ink/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-5 text-sm",
  lg: "h-[3.25rem] px-7 text-[0.9375rem]",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-tight transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";

type SharedProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonLinkProps = SharedProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "dark",
  size = "lg",
  withArrow = true,
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow ? <ArrowRight className="size-4 shrink-0" /> : null}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}

type ButtonProps = SharedProps & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export function Button({
  variant = "dark",
  size = "lg",
  withArrow = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
      {withArrow ? <ArrowRight className="size-4 shrink-0" /> : null}
    </button>
  );
}

/** Circular arrow button used on cards throughout the design. */
export function ArrowBadge({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const toneClasses =
    tone === "dark"
      ? "bg-ink text-white"
      : "border border-ink/20 bg-white/70 text-ink";
  return (
    <span
      aria-hidden="true"
      className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${toneClasses} ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
        <path d="M8 16 16 8M9 8h7v7" />
      </svg>
    </span>
  );
}
