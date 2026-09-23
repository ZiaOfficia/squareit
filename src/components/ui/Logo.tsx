import Link from "next/link";
import { LogoMark } from "@/components/ui/LogoMark";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  /** "dark" for light backgrounds, "light" for dark backgrounds. */
  tone?: "dark" | "light";
  className?: string;
  /** Render without the wrapping link (for use inside another link). */
  asStatic?: boolean;
};

function LogoContent({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-2.5">
      {/* The mark is wider than it is tall, so height drives the sizing. */}
      <LogoMark className="h-8 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.35rem] font-extrabold tracking-[-0.05em] ${
            tone === "light" ? "text-white" : "text-ink"
          }`}
        >
          squareit
        </span>
        <span
          className={`mt-[3px] text-[0.5rem] font-semibold uppercase tracking-[0.14em] ${
            tone === "light" ? "text-white/60" : "text-muted"
          }`}
        >
          {siteConfig.tagline}
        </span>
      </span>
    </span>
  );
}

export function Logo({ tone = "dark", className = "", asStatic = false }: LogoProps) {
  if (asStatic) {
    return (
      <span className={className}>
        <LogoContent tone={tone} />
      </span>
    );
  }

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={`inline-flex shrink-0 ${className}`}
    >
      <LogoContent tone={tone} />
    </Link>
  );
}
