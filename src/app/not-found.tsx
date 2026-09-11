import type { Metadata } from "next";
import Link from "next/link";

import { Container, Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section tone="paper" padding="lg">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-5 text-display-xl">
            This page
            <br />
            <span className="marker">moved on.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            The link may be old, or the page may have been renamed. Here is where most people were
            heading.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/" variant="dark">
              Back to Home
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Contact Us
            </ButtonLink>
          </div>

          <nav aria-label="Popular pages" className="mt-12">
            <ul className="flex flex-wrap justify-center gap-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-ink hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </Section>
  );
}
