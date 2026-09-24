import Link from "next/link";
import { Container, Eyebrow, HandNote } from "@/components/ui/Section";
import { ArrowRight, PlusIcon } from "@/components/ui/Icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { faqs } from "@/content/company";

/**
 * The questions we get asked, answered on the page.
 *
 * The homepage already emits FAQPage structured data, and Google requires that
 * markup to correspond to content the visitor can actually see — so this is not
 * only a section the page was missing, it is what makes the existing schema
 * legitimate. Keep the count here in step with the slice in app/page.tsx.
 *
 * Built on <details> so every answer is in the HTML, expandable without
 * JavaScript and reachable by keyboard for free.
 */
export function FaqSection({ count = 4 }: { count?: number }) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Common Questions</Eyebrow>
            <h2 className="mt-5 text-display-md">
              Answers before
              <br />
              you <span className="marker">ask.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              The things clients want to know before starting. If yours is not here, ask us
              directly — you will get a straight answer, not a sales call.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold text-ink transition-colors hover:border-brand-yellow"
            >
              Ask Your Question
              <ArrowRight className="size-4" />
            </Link>

            <div className="mt-10 hidden -rotate-3 text-brand-green lg:block">
              <HandNote className="text-[1.4rem]" underline>
                No jargon.
                <br />
                No surprises.
              </HandNote>
            </div>
          </Reveal>

          <Stagger as="dl" className="divide-y divide-line border-y border-line lg:col-span-8">
            {faqs.slice(0, count).map((faq) => (
              <StaggerItem key={faq.question}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                    <dt className="font-display text-[1.05rem] font-extrabold leading-snug tracking-tight transition-colors group-open:text-brand-blue">
                      {faq.question}
                    </dt>
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-transform duration-300 group-open:rotate-45 group-open:border-brand-blue group-open:text-brand-blue"
                    >
                      <PlusIcon className="size-3.5" />
                    </span>
                  </summary>
                  <dd className="max-w-2xl pb-6 pr-12 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </dd>
                </details>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
