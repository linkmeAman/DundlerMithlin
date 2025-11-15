"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

type ProjectsGalleryProps = {
  projects: Project[];
};

export function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [filter, setFilter] = useState<string>("All");

  const tags = useMemo(() => {
    const unique = new Set<string>();
    projects.forEach((project) => {
      project.stack.forEach((tech) => unique.add(tech));
    });
    return ["All", ...Array.from(unique)];
  }, [projects]);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((project) => project.stack.includes(filter));

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setFilter(tag)}
            className={cn(
              "rounded-full border border-white/10 px-4 py-2 text-sm transition",
              filter === tag
                ? "bg-cyan-500/20 text-cyan-50 border-cyan-400/50"
                : "text-slate-300 hover:text-white",
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid gap-6 md:grid-cols-2"
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              layout
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
