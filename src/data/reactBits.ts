export type ReactBit = {
  title: string;
  description: string;
  metric: string;
  emphasis: string;
};

export const reactBits: ReactBit[] = [
  {
    title: "Spotlight Automations",
    description:
      "React-Bits style spotlight cards summarizing the automation backlog that trimmed ops effort by 80% across subscription renewals.",
    metric: "80% less manual work",
    emphasis: "Automation Fabric",
  },
  {
    title: "Latency Pulse",
    description:
      "Motion-driven KPI tile that highlights the Redis cache-aside lift pushing student data routes from 330ms p95 down to 115ms.",
    metric: "65% faster queries",
    emphasis: "Cache-aside pattern",
  },
  {
    title: "Messaging Orbit",
    description:
      "WebSocket and webhook orchestration visualized as a magnetic orb inspired by React Bits spotlight grid to narrate Meta chat wins.",
    metric: "10k+ msgs/day",
    emphasis: "Meta Chat Integration",
  },
];
