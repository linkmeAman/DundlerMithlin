import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  as?: "section" | "div";
};

export function Section({
  id,
  className,
  children,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "py-12 sm:py-16 lg:py-24",
        "border-b border-white/5 last:border-b-0",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </Tag>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-3",
        align === "center" && "text-center items-center",
      )}
    >
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.3em] text-cyan-300/90">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight text-slate-50">
        {title}
      </h2>
      {description && (
        <p className="max-w-3xl text-pretty text-base leading-7 text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}
