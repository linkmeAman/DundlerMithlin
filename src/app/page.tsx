import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { certifications, education } from "@/data/education";
import { Section, SectionHeader } from "@/components/Section";
import { StatBar } from "@/components/StatBar";
import { ExperienceTimeline } from "@/components/Timeline";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillPill } from "@/components/SkillPill";
import { ContactPanel } from "@/components/ContactPanel";
import { Reveal } from "@/components/Reveal";
import { SpotlightShowcase } from "@/components/SpotlightShowcase";

export default function Home() {
  const featureProjects = projects.slice(0, 3);

  return (
    <div className="bg-[#03050f]">
      <Hero />
      <Section id="about">
        <SectionHeader
          eyebrow="About"
          title="Distributed systems engineer focused on measurable performance."
        />
        <About />
      </Section>
      <Section id="experience">
        <SectionHeader
          eyebrow="Experience"
          title="TickleRight Eduventures — Backend Engineer"
          description="Owning distributed microservices, incident response, and automation that powers a 35,000+ user SaaS platform."
        />
        <ExperienceTimeline entries={experience} />
      </Section>
      <Section id="projects">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Proof that performance + automation drives outcomes"
          description="Deeper dives live on the projects page. Each project focuses on reclaiming operator hours while keeping latency predictable."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featureProjects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} compact />
            </Reveal>
          ))}
        </div>
      </Section>
      <Section id="skills">
        <SectionHeader
          eyebrow="Skills"
          title="Tools I rely on to keep systems fast, observable, and maintainable."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_70px_rgba(15,23,42,0.45)]"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
                {group.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillPill key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="spotlight">
        <SectionHeader
          eyebrow="Spotlight"
          title="Magnetic cards showing the stories behind automation, latency, and messaging."
          description="Micro-interaction cards inspired by high-polish UI references to keep the page feeling alive."
        />
        <SpotlightShowcase />
      </Section>
      <Section id="education">
        <SectionHeader
          eyebrow="Education & Certifications"
          title="Foundation in information technology plus ongoing credentials."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            {education.map((edu) => (
              <div key={edu.school} className="space-y-2">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
                  {edu.school}
                </p>
                <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                <p className="text-sm text-slate-300">{edu.duration}</p>
                <p className="text-sm text-slate-400">{edu.location}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {edu.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span aria-hidden>-</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent p-5"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">
                  {cert.year}
                </p>
                <p className="mt-2 font-semibold text-white">{cert.title}</p>
                {cert.note && (
                  <p className="text-sm text-slate-400">{cert.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section id="contact" className="border-b-0">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Open to backend, platform, and system design mandates."
              description="Drop a note about backend/platform roles, distributed messaging systems, or anything that needs to be observability-first."
            />
            <div className="mt-6 grid gap-4 text-sm text-slate-300">
              {profile.focusAreas.map((focus) => (
                <p
                  key={focus}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4 text-pretty"
                >
                  {focus}
                </p>
              ))}
            </div>
          </div>
          <ContactPanel contact={profile.contact} />
        </div>
      </Section>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.35),_transparent_55%)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {profile.contact.availability}
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">
                {profile.title}
              </p>
              <h1 className="fluid-display font-semibold text-white">
                {profile.name}
              </h1>
              <p className="fluid-lead text-slate-300">{profile.lead}</p>
              <p className="text-balance text-[clamp(1.05rem,3vw,1.35rem)] text-slate-200">
                {profile.heroTagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href={profile.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-500/90 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View Resume (PDF)
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-cyan-300/60"
              >
                Contact
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl" aria-hidden>
                <div className="h-full w-full rounded-[32px] bg-gradient-to-br from-cyan-500/20 to-sky-400/10" />
              </div>
              <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-[0_30px_80px_rgba(8,145,178,0.35)]">
                <div className="overflow-hidden rounded-[24px] border border-white/10">
                  <Image
                    src={profile.photo.src}
                    alt={profile.photo.alt}
                    width={320}
                    height={320}
                    className="h-auto w-[min(320px,80vw)] object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-12">
          <StatBar stats={profile.stats} />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-5 text-lg text-slate-300">
        {profile.summary.map((paragraph) => (
          <p key={paragraph} className="text-pretty">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(8,145,178,0.35),_transparent_60%)] p-6 text-sm text-slate-200 shadow-[0_20px_60px_rgba(8,145,178,0.35)]">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
          Focus Areas
        </p>
        <ul className="mt-4 space-y-3">
          {profile.focusAreas.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden>-</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}





