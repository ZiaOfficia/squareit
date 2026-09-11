import { PageHeader } from "@/components/layout/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type LegalPageProps = {
  title: string;
  path: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

/** Shared shell for the policy pages — one layout, three thin content files. */
export function LegalPage({ title, path, updated, intro, sections }: LegalPageProps) {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: title, path }])} />

      <PageHeader
        eyebrow="Legal"
        title={title}
        description={intro}
        crumbs={[{ name: title, path }]}
      >
        <p className="mt-6 text-xs uppercase tracking-[0.12em] text-muted">
          Last updated: {updated}
        </p>
      </PageHeader>

      <Section tone="paper" padding="md">
        <Container>
          <div className="mx-auto max-w-2xl space-y-10">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-[1.3rem] font-extrabold tracking-tight">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 space-y-2.5 pl-5">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="list-disc text-[0.95rem] leading-relaxed text-ink-soft marker:text-brand-yellow-dark"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
