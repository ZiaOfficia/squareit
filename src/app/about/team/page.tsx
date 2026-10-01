import type { Metadata } from "next";
import Image from "next/image";

import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/home/CtaBand";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { team, teamDepartments, type TeamMember } from "@/content/company";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Our Team",
  description:
    "Meet the strategists, engineers, marketers and designers behind Squareit Solutions — the people who run your campaigns and build your website.",
  path: "/about/team",
});

/** Cycles the brand palette down the grid so no two neighbours match. */
const accents = ["bg-brand-green", "bg-brand-red", "bg-brand-blue", "bg-brand-yellow"];

const leads = team.filter((member) => member.lead);

/** Everyone else, bucketed into the departments in their declared order. */
const departments = teamDepartments
  .map((department) => ({
    department,
    members: team.filter((member) => member.department === department && !member.lead),
  }))
  .filter((group) => group.members.length > 0);

function MemberCard({
  member,
  index,
  size = "sm",
}: {
  member: TeamMember;
  index: number;
  size?: "sm" | "lg";
}) {
  return (
    <div className="group">
      {/* Portraits are pre-cropped to 4:5, so the frame never letterboxes. */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-paper-alt">
        {member.image ? (
          <Image
            src={member.image}
            alt={`${member.name}, ${member.role} at Squareit Solutions`}
            fill
            sizes={
              size === "lg"
                ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            }
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex size-full items-center justify-center font-display text-2xl font-extrabold text-muted">
            {member.name.charAt(0)}
          </div>
        )}

        <span
          aria-hidden="true"
          className={`absolute inset-x-0 bottom-0 h-1.5 ${accents[index % accents.length]}`}
        />
      </div>

      <h3
        className={`mt-4 font-display font-extrabold tracking-tight ${
          size === "lg" ? "text-[1.25rem]" : "text-[1rem]"
        }`}
      >
        {member.name}
      </h3>
      <p className="mt-1 text-[0.8125rem] font-semibold text-brand-blue">{member.role}</p>
      {member.bio ? <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p> : null}
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "About", path: "/about" },
            { name: "Our Team", path: "/about/team" },
          ]),
          {
            "@type": "CollectionPage",
            name: "Our Team",
            url: absoluteUrl("/about/team"),
            hasPart: team.map((member) => ({
              "@type": "Person",
              name: member.name,
              jobTitle: member.role,
              worksFor: { "@id": absoluteUrl("/#organization") },
              ...(member.image ? { image: absoluteUrl(member.image) } : {}),
            })),
          },
        ]}
      />

      <PageHeader
        eyebrow="Our Team"
        title={
          <>
            Meet our
            <br />
            <span className="marker">experts.</span>
          </>
        }
        description="Our Experts have been set up for each and every task. This core team that is reputed in its field, comprises dynamic individuals with a core of passion and thriving in the core team and plays an important role in developing itself as a reputed digital marketing company."
        crumbs={[
          { name: "About", path: "/about" },
          { name: "Our Team", path: "/about/team" },
        ]}
        accent="forest"
        note={
          <>
            Small team.
            <br />
            Big output.
          </>
        }
      />

      {/* Leadership — larger cards, because these three carry bios. */}
      <Section tone="paper" padding="md">
        <Container>
          <Reveal>
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="mt-4 text-display-md">The people steering the work.</h2>
          </Reveal>

          <Stagger className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {leads.map((member, index) => (
              <StaggerItem key={member.name}>
                <MemberCard member={member} index={index} size="lg" />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Everyone else, grouped by practice. */}
      <Section tone="paper-alt" padding="md">
        <Container>
          <Reveal>
            <Eyebrow>The Team</Eyebrow>
            <h2 className="mt-4 text-display-md">
              {team.length} specialists across {teamDepartments.length} practices.
            </h2>
          </Reveal>

          <div className="mt-12 space-y-14">
            {departments.map((group) => (
              <div key={group.department}>
                <Reveal>
                  <div className="flex items-center gap-4">
                    <h3 className="font-display text-[1.05rem] font-extrabold tracking-tight">
                      {group.department}
                    </h3>
                    <span aria-hidden="true" className="h-px flex-1 bg-line" />
                    <span className="text-xs tabular-nums text-muted">
                      {String(group.members.length).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>

                <Stagger className="mt-6 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
                  {group.members.map((member, index) => (
                    <StaggerItem key={member.name}>
                      <MemberCard member={member} index={index} />
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Join Us"
        heading="Want to build"
        highlight="things that actually work?"
        body="We are usually hiring for strategy, engineering and design roles in Lucknow."
        ctaLabel="See Open Roles"
        ctaHref="/career"
      />
    </>
  );
}
