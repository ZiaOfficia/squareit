import { existsSync } from "node:fs";
import path from "node:path";

import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Section";
import { DocumentIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/motion/Reveal";

/** Drop the PDF at public/files/squareit-company-profile.pdf and the button goes live. */
const PROFILE_PATH = "/files/squareit-company-profile.pdf";

export function ProfileDownload() {
  // Checked at build time, so the button never links to a missing file.
  const available = existsSync(path.join(process.cwd(), "public", PROFILE_PATH));

  return (
    <section className="bg-paper-alt py-12 md:py-14">
      <Container>
        <Reveal className="flex flex-col gap-6 rounded-sm border border-line bg-white p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-5">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-sm bg-brand-yellow text-ink">
              <DocumentIcon className="size-6" />
            </span>
            <div>
              <Eyebrow>Company Profile</Eyebrow>
              <h2 className="mt-2 font-display text-[1.35rem] font-extrabold tracking-tight md:text-[1.6rem]">
                Download our profile
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                Our services, process, clients and results in one PDF — easy to share with your
                team before we talk.
              </p>
            </div>
          </div>

          {available ? (
            <ButtonLink
              href={PROFILE_PATH}
              download
              variant="dark"
              size="md"
              withArrow={false}
              className="shrink-0"
            >
              Download Profile (PDF)
            </ButtonLink>
          ) : (
            <span className="inline-flex h-11 shrink-0 cursor-not-allowed items-center justify-center rounded-sm bg-ink/10 px-5 text-sm font-semibold tracking-tight text-muted">
              Profile coming soon
            </span>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
