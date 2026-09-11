import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow, HandNote } from "@/components/ui/Section";
import { ArrowUpRight } from "@/components/ui/Icons";
import { serviceCategories } from "@/content/services";

const cardTones = {
  green: "bg-brand-green",
  red: "bg-brand-red",
  blue: "bg-brand-blue",
} as const;

export function ServicesSection() {
  return (
    <section className="bg-ink py-16 text-white md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Intro */}
          <div className="lg:col-span-3">
            <Eyebrow className="text-white/45">Our Services</Eyebrow>
            <h2 className="mt-5 text-display-md text-white">
              A complete digital growth ecosystem.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              From strategy to execution, we offer end-to-end digital solutions to help your
              business grow in the digital world.
            </p>
            <ButtonLink href="/services" variant="yellow" size="md" className="mt-7">
              Explore All Services
            </ButtonLink>
          </div>

          {/* Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/services/${category.slug}`}
                className={`group relative flex min-h-[19rem] flex-col rounded-sm p-6 transition-transform duration-300 hover:-translate-y-1 ${
                  cardTones[category.accent]
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-[1.35rem] font-extrabold tracking-tight text-white/85">
                    {category.number}
                  </span>
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-ink/85 text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>

                <h3 className="mt-7 font-display text-[1.35rem] font-extrabold tracking-tight text-white">
                  {category.title}
                </h3>

                <ul className="mt-5 space-y-1.5">
                  {category.highlights.map((item) => (
                    <li key={item} className="text-[0.8125rem] text-white/85">
                      {item}
                    </li>
                  ))}
                  <li className="text-[0.8125rem] text-white/55">and more...</li>
                </ul>
              </Link>
            ))}
          </div>

          {/* Handwritten note */}
          <div className="hidden lg:col-span-1 lg:flex lg:items-center">
            <div className="-rotate-6 text-brand-yellow">
              <HandNote className="text-[1.55rem]" underline>
                Strategy
                <br />
                Meets
                <br />
                Creativity
              </HandNote>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
