import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/Icons";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { clients } from "@/content/work";

export function TrustedBy() {
  return (
    <section className="border-y border-line bg-paper-alt py-10 md:py-12">
      <Container>
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
          <div className="shrink-0">
            <Eyebrow>Trusted By</Eyebrow>
            <p className="mt-2 font-display text-[1.35rem] font-extrabold leading-tight tracking-tight">
              Ambitious
              <br className="hidden lg:block" /> Businesses.
            </p>
          </div>

          {/* The list scrolls rather than wrapping, so the row reads as an
              ongoing roster and holds its height as clients are added.
              Hovering pauses it for anyone trying to read a name. */}
          <Marquee className="min-w-0 flex-1">
            <ul className="flex items-center">
              {clients.map((client) => (
                <li
                  key={client.name}
                  className="flex w-28 shrink-0 flex-col items-center gap-2 px-2 text-center sm:w-32"
                >
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
          </Marquee>

          <Link
            href="/portfolio"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-ink"
          >
            and many more
            <ArrowRight className="size-3.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
