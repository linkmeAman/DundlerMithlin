"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedNumberProps = {
  value: number;
  className?: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
};

const numberFormatter = (decimals: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });

export function AnimatedNumber({
  value,
  className,
  decimals = 0,
  prefix = "",
  suffix = "",
}: AnimatedNumberProps) {
  const targetRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(targetRef, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => {
        const formatter = numberFormatter(decimals);
        const formatted = formatter.format(
          Number(latest.toFixed(decimals)),
        );
        setDisplay(`${prefix}${formatted}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [decimals, inView, prefix, suffix, value]);

  return (
    <span ref={targetRef} className={cn(className)}>
      {display}
    </span>
  );
}
