"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { reactBits } from "@/data/reactBits";

export function ReactBitsShowcase() {
  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      target.style.setProperty("--spotlight-x", `${x}px`);
      target.style.setProperty("--spotlight-y", `${y}px`);
    },
    [],
  );

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {reactBits.map((bit, index) => (
        <motion.div
          key={bit.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          onPointerMove={handlePointerMove}
          onPointerEnter={handlePointerMove}
          onPointerLeave={(event) => {
            event.currentTarget.style.removeProperty("--spotlight-x");
            event.currentTarget.style.removeProperty("--spotlight-y");
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 p-6 text-slate-100 shadow-[0_30px_70px_rgba(8,145,178,0.35)] transition hover:border-cyan-300/40"
          style={{
            backgroundImage:
              "radial-gradient(circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(56,189,248,0.25), transparent 55%), linear-gradient(135deg, rgba(2,6,23,0.95), rgba(15,23,42,0.85))",
          }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">
            React Bits
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white">{bit.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{bit.description}</p>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="rounded-full border border-white/10 px-3 py-1 text-cyan-100">
              {bit.metric}
            </span>
            <span className="text-slate-400">{bit.emphasis}</span>
          </div>
          <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
            <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -right-6 bottom-0 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
