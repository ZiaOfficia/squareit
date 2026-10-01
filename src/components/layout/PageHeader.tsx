import Link from "next/link";
import type { ReactNode } from "react";
import { Container, HandNote } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MastheadField } from "@/components/webgl/MastheadField";
import type { MastheadAccent } from "@/components/webgl/MastheadScene";

export type Crumb = { name: string; path: string };

/** Each area of the site gets its own accent, so the masthead signals where you are. */
export type HeaderAccent = MastheadAccent;

const washes: Record<HeaderAccent, string> = {
  green: "rgba(15, 138, 72, 0.16)",
  red: "rgba(224, 50, 42, 0.14)",
  blue: "rgba(21, 83, 204, 0.14)",
  yellow: "rgba(255, 201, 51, 0.22)",
  forest: "rgba(14, 58, 42, 0.14)",
};

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  crumbs: Crumb[];
  note?: ReactNode;
  children?: ReactNode;
  accent?: HeaderAccent;
};

/**
 * Shared masthead for every inner page — keeps breadcrumbs and rhythm
 * consistent, and carries the same arrival choreography as the homepage so an
 * inner page does not feel like a different site.
 *
 * The backdrop is a CSS wash with the hero's brand tiles drifting over it in
 * WebGL. The canvas is idle-loaded, desktop-only and unmounted once scrolled
 * past (see MastheadField), so the policy pages pay nothing for it up front.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
  note,
  children,
  accent = "blue",
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper pb-12 pt-8 md:pb-16 md:pt-10">
      {/* Brand tiles on the right, keyed to the same accent. */}
      <MastheadField accent={accent} />

      {/* Legibility mask: solid behind the copy, clearing toward the tiles. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-paper) 0%, rgba(250, 248, 243, 0.9) 38%, rgba(250, 248, 243, 0.35) 58%, rgba(250, 248, 243, 0) 72%)",
        }}
      />

      {/* Brand wash over both, keyed to the section's accent. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(38rem 26rem at 88% 8%, ${washes[accent]}, transparent 70%), radial-gradient(26rem 20rem at 8% 96%, ${washes[accent]}, transparent 72%)`,
        }}
      />

      <Container className="relative z-10">
        <Reveal as="div">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-ink">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb, index) => (
                <li key={crumb.path} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-muted/50">
                    /
                  </span>
                  {index === crumbs.length - 1 ? (
                    <span className="text-ink" aria-current="page">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link href={crumb.path} className="transition-colors hover:text-ink">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <Stagger className="lg:col-span-8">
            <StaggerItem as="p" className="eyebrow">
              {eyebrow}
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-4 text-display-lg">{title}</h1>
            </StaggerItem>
            {description ? (
              <StaggerItem as="p" className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">
                {description}
              </StaggerItem>
            ) : null}
            {children ? <StaggerItem>{children}</StaggerItem> : null}
          </Stagger>

          {note ? (
            <Reveal delay={0.2} className="hidden items-end justify-end lg:col-span-4 lg:flex">
              <div className="-rotate-6 text-ink">
                <HandNote className="text-[1.5rem]" underline>
                  {note}
                </HandNote>
              </div>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
