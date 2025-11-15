import { ProfileStat } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { AnimatedNumber } from "@/components/AnimatedNumber";

type StatBarProps = {
  stats: ProfileStat[];
};

export function StatBar({ stats }: StatBarProps) {
  return (
    <div className="grid w-full gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_50px_rgba(8,145,178,0.25)] sm:grid-cols-3">
      {stats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 0.08} className="flex flex-col">
          <span className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
            {stat.label}
          </span>
          {typeof stat.numericValue === "number" ? (
            <AnimatedNumber
              value={stat.numericValue}
              suffix={stat.suffix}
              prefix={stat.prefix}
              decimals={stat.decimals}
              className="text-3xl font-semibold text-white"
            />
          ) : (
            <span className="text-2xl font-semibold text-white">
              {stat.value}
            </span>
          )}
          {stat.detail && (
            <span className="text-sm text-slate-400">{stat.detail}</span>
          )}
        </Reveal>
      ))}
    </div>
  );
}
