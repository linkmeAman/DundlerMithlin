export type SpotlightCard = {
  title: string;
  description: string;
  metric: string;
  emphasis: string;
};

export const spotlightEntries: SpotlightCard[] = [
  {
    title: "Automated Renewals",
    description:
      "Spotlight card describing how subscription workflows and automations removed 80%+ of manual renewals while keeping retention up.",
    metric: "80% less ops effort",
    emphasis: "Automation Fabric",
  },
  {
    title: "Latency Pulse",
    description:
      "Visual narrative of the cache-aside boost that took parent queries from 330 ms to 115 ms p95 without brittle fallbacks.",
    metric: "65% faster queries",
    emphasis: "Cache-aside Layer",
  },
  {
    title: "Messaging Orbit",
    description:
      "Meta messaging orchestration with WebSockets + webhook listeners that powers more than 10k daily conversations.",
    metric: "10k+ msgs/day",
    emphasis: "Meta Chat Integration",
  },
];
