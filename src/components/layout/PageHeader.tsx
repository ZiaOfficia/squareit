import Link from "next/link";
import type { ReactNode } from "react";
import { Container, HandNote } from "@/components/ui/Section";

export type Crumb = { name: string; path: string };

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  crumbs: Crumb[];
  note?: ReactNode;
  children?: ReactNode;
};

/** Shared masthead for every inner page — keeps breadcrumbs and rhythm consistent. */
export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
  note,
  children,
}: PageHeaderProps) {
  return (
    <section className="border-b border-line bg-paper pb-12 pt-8 md:pb-16 md:pt-10">
      <Container>
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

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-4 text-display-lg">{title}</h1>
            {description ? (
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">
                {description}
              </p>
            ) : null}
            {children}
          </div>

          {note ? (
            <div className="hidden items-end justify-end lg:col-span-4 lg:flex">
              <div className="-rotate-6 text-ink">
                <HandNote className="text-[1.5rem]" underline>
                  {note}
                </HandNote>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
