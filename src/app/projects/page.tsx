import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/Section";
import { projects } from "@/data/projects";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case-study style highlights that show how Aman Singh ships reliable messaging platforms, automation, and distributed services.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-[#03050f]">
      <Section>
        <SectionHeader
          align="center"
          eyebrow="Projects"
          title="Systems that merge performance, automation, and credibility."
          description="Each project is a production-hardened initiative — Meta chat integrations, calendar automation, and distributed audio/video capture."
        />
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-base text-slate-300">
          <p>
            Looking for more? Each build has internal diagrams, grooming notes,
            and runbooks that I can share under NDA. Reach out via{" "}
            <a
              className="text-cyan-300 hover:text-cyan-100"
              href={profile.contact.gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              email
            </a>{" "}
            for a deeper walkthrough.
          </p>
        </div>
      </Section>
      <Section className="border-b-0">
        <ProjectsGallery projects={projects} />
      </Section>
    </div>
  );
}
