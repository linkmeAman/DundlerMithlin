import { cn } from "@/lib/utils";

type SkillPillProps = {
  label: string;
  className?: string;
};

export function SkillPill({ label, className }: SkillPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10",
        "bg-white/5 px-3 py-1 text-xs font-medium tracking-wide uppercase text-slate-200",
        "shadow-[0_0_25px_rgba(56,189,248,0.08)] backdrop-blur",
        className,
      )}
    >
      {label}
    </span>
  );
}
