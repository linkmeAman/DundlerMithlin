import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { Section, SectionHeader } from "@/components/Section";
import { SkillPill } from "@/components/SkillPill";

export const metadata: Metadata = {
  title: "Stack & Now",
  description:
    "Current toolchain, learning roadmap, and focus areas for Aman Singh’s backend and distributed systems work.",
};

export default function StackPage() {
  const { now } = profile;

  return (
    <div className="bg-[#03050f]">
      <Section>
        <SectionHeader
          eyebrow="Now / Stack"
          title="How I build today."
          description={now.headline}
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Current focus</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {now.currentFocus.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-white/5 p-3">
                  <span aria-hidden>▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.35),_transparent_60%)] p-6">
            <h3 className="text-lg font-semibold text-white">Core stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {now.stack.map((stack) => (
                <SkillPill key={stack} label={stack} />
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section className="border-b-0">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
              Tooling
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              Platforms keeping telemetry actionable.
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Instrumented dashboards, GitHub Actions pipelines, and lightweight
              workflow engines to automate L2 work.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {now.tooling.map((tool) => (
                <SkillPill key={tool} label={tool} />
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-cyan-300/30 bg-cyan-500/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
              Learning Roadmap
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              Deep dives for the next quarter.
            </h3>
            <p className="mt-2 text-sm text-slate-200">
              Continually iterating on concurrency patterns, tracing, and
              practical autoscaling.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-100">
              {now.learning.map((topic) => (
                <li key={topic} className="rounded-2xl border border-white/10 p-4">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
