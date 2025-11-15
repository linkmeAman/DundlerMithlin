import Link from "next/link";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-3xl border border-white/10",
        "bg-gradient-to-br from-white/5 via-white/2 to-transparent p-6",
        "shadow-[0_20px_80px_rgba(15,23,42,0.55)] transition",
        "hover:border-cyan-300/50 hover:shadow-[0_25px_90px_rgba(8,145,178,0.45)]",
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
            {project.impact}
          </p>
          <h3 className="mt-1 text-2xl font-semibold text-white">
            {project.name}
          </h3>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wide text-slate-300">
          {project.stack[0]}
        </span>
      </div>
      <p className="mt-4 text-base leading-relaxed text-slate-300">
        {project.summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex-1">
        {!compact &&
          project.description.map((line) => (
            <p key={line} className="mb-3 text-sm text-slate-400">
              {line}
            </p>
          ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
        {project.links?.map((link) => (
          <Link
            key={link.label}
            href={link.url}
            className="inline-flex items-center gap-2 text-cyan-300 transition hover:text-cyan-100"
          >
            {link.label}
            <span aria-hidden>↗</span>
          </Link>
        ))}
        {compact && (
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-cyan-300 transition hover:text-cyan-100"
          >
            View details
            <span aria-hidden>↗</span>
          </Link>
        )}
      </div>
    </article>
  );
}
