import { ExperienceItem } from "@/data/experience";
import {
  Bot,
  CalendarClock,
  Cpu,
  DatabaseZap,
  MessageSquareMore,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const iconMap = {
  chip: Cpu,
  database: DatabaseZap,
  calendar: CalendarClock,
  zap: Sparkles,
  message: MessageSquareMore,
  bot: Bot,
  shield: ShieldCheck,
  chart: TrendingUp,
};

type TimelineProps = {
  entries: ExperienceItem[];
};

export function ExperienceTimeline({ entries }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300/60 via-white/10 to-transparent md:left-6" />
      <div className="space-y-10">
        {entries.map((role) => (
          <Reveal
            key={`${role.role}-${role.company}`}
            className="relative panel-rounded border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(8,145,178,0.35),_transparent_60%)] p-5 text-slate-100 shadow-[0_25px_80px_rgba(8,145,178,0.25)] sm:p-8"
          >
            <span className="absolute left-4 top-8 h-5 w-5 -translate-x-1/2 rounded-full border border-cyan-200/50 bg-gradient-to-br from-cyan-300 to-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.8)] md:left-6" />
            <div className="grid gap-4 pl-8 md:grid-cols-[1.2fr_0.8fr] md:gap-6 md:pl-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-cyan-200">
                  {role.company}
                </p>
                <h3 className="mt-2 text-[clamp(1.5rem,3.2vw,2.25rem)] font-semibold">
                  {role.role}
                </h3>
                <p className="text-sm text-slate-400">{role.companyDetail}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 shadow-inner">
                <p className="font-medium text-white/80">{role.location}</p>
                <p>{role.dates}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {role.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 grid gap-4 pl-2 sm:pl-8">
              {role.achievements.map((achievement) => {
                const Icon = iconMap[achievement.icon];
                return (
                  <div
                    key={achievement.text}
                    className="grid gap-3 rounded-2xl border border-white/5 bg-[#050c1f]/70 p-4 text-sm leading-relaxed md:grid-cols-[auto_1fr]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 text-cyan-200">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="text-pretty text-slate-200">{achievement.text}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
