import { Container } from "@/components/ui/Section";
import { statIcons } from "@/components/ui/Icons";
import { CountUp } from "@/components/motion/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { stats } from "@/content/company";

const accentClasses = {
  green: "text-brand-green",
  red: "text-brand-red",
  yellow: "text-brand-yellow-dark",
  blue: "text-brand-blue",
} as const;

export function StatsBar() {
  return (
    <section aria-label="Company results" className="border-y border-line bg-paper-alt">
      <Container>
        <Stagger as="dl" className="grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
          {stats.map((stat, index) => {
            const Icon = statIcons[stat.icon];
            return (
              <StaggerItem
                key={stat.label}
                className={`flex items-center gap-4 px-2 py-7 md:justify-center md:px-6 ${
                  index < 2 ? "border-b border-line md:border-b-0" : ""
                } ${index % 2 === 1 ? "border-l border-line md:border-l-0" : ""}`}
              >
                <Icon className={`size-7 shrink-0 md:size-8 ${accentClasses[stat.accent]}`} />
                <div>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    {/* tabular-nums so the box doesn't twitch as digits count up. */}
                    <CountUp
                      value={stat.value}
                      className="block font-display text-[1.6rem] font-extrabold leading-none tracking-tight tabular-nums md:text-[1.9rem]"
                    />
                    <span className="mt-1.5 block text-xs text-muted md:text-[0.8125rem]">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
