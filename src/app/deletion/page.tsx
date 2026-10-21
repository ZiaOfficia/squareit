import type { Metadata } from "next";

import { Container, Section } from "@/components/ui/Section";
import { DeletionPanel } from "./DeletionPanel";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

// Never prerender or cache the control panel.
export const dynamic = "force-dynamic";

export default function DeletionPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-lg">
          <h1 className="text-2xl font-semibold text-ink">Website control</h1>
          <p className="mt-2 text-sm text-muted">
            Switching the website off replaces every page with a black screen until it is switched back on.
          </p>
          <div className="mt-8">
            <DeletionPanel />
          </div>
        </div>
      </Container>
    </Section>
  );
}
