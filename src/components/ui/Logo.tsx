import Link from "next/link";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  /** "dark" for light backgrounds, "light" for dark backgrounds. */
  tone?: "dark" | "light";
  className?: string;
  /** Render without the wrapping link (for use inside another link). */
  asStatic?: boolean;
};

function LogoMark() {
  return (
    <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true">
      <rect x="0" y="0" width="14.5" height="14.5" rx="1.5" fill="#0f8a48" />
      <rect x="17.5" y="0" width="14.5" height="14.5" rx="1.5" fill="#e0322a" />
      <rect x="0" y="17.5" width="14.5" height="14.5" rx="1.5" fill="#1553cc" />
      <rect x="17.5" y="17.5" width="14.5" height="14.5" rx="1.5" fill="#ffc933" />
    </svg>
  );
}

function LogoContent({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
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
