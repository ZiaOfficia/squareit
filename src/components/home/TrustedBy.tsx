import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/Icons";
import { clients } from "@/content/work";

export function TrustedBy() {
  return (
    <section className="border-y border-line bg-paper-alt py-10 md:py-12">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="shrink-0">
            <Eyebrow>Trusted By</Eyebrow>
            <p className="mt-2 font-display text-[1.35rem] font-extrabold leading-tight tracking-tight">
              Ambitious
              <br className="hidden lg:block" /> Businesses.
            </p>
          </div>

          <ul className="grid flex-1 grid-cols-3 gap-x-6 gap-y-7 sm:grid-cols-4 lg:grid-cols-8">
            {clients.map((client) => (
              <li key={client.name} className="flex flex-col items-center gap-2 text-center">
                <span
                  className="inline-flex size-9 items-center justify-center rounded-full border border-ink/15 font-display text-[0.7rem] font-extrabold text-ink"
                  aria-hidden="true"
                >
                  {client.mark}
                </span>
                <span className="text-[0.7rem] leading-tight text-muted">{client.name}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/portfolio"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-ink"
          >
            and many more
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
