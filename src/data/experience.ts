export type ExperienceAchievement = {
  icon: "chip" | "zap" | "database" | "calendar" | "message" | "bot" | "shield" | "chart";
  text: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  companyDetail: string;
  location: string;
  dates: string;
  stack: string[];
  achievements: ExperienceAchievement[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Backend Engineer",
    company: "TickleRight Eduventures",
    companyDetail: "SaaS Ed-Tech Platform",
    location: "Mumbai, India (Remote)",
    dates: "Apr 2023 – Present",
    stack: ["Go", "FastAPI", "Python", "MySQL", "Redis", "Docker"],
    achievements: [
      {
        icon: "chip",
        text: "Architected and deployed a Go + MySQL subscription microservice for 35,000+ MAUs, automating renewals/payments and trimming manual work by ~80% while boosting retention by ~12%.",
      },
      {
        icon: "database",
        text: "Implemented Redis cache-aside for high-traffic student data queries, driving 65% latency drop (330 ms → 115 ms p95) with graceful degradations for concurrent parents.",
      },
      {
        icon: "calendar",
        text: "Built a Google Calendar sync service automating 500+ weekly class schedules, eliminating ~30 ops hours/month and cutting scheduling conflicts by 95%.",
      },
      {
        icon: "zap",
        text: "Refined 500 GB+ MySQL workloads with query refactors, targeted indexing, and connection pooling to reduce average query time by 40% while sustaining 2M+ API calls per day.",
      },
      {
        icon: "message",
        text: "Developed a FastAPI + WebSocket chat platform that integrates Meta Business APIs, syncing Facebook/Instagram channels in real time and saving $800+/month in SaaS fees.",
      },
      {
        icon: "bot",
        text: "Automated agent distribution logic (round-robin + skill routing) and direct messaging workflows that cut manual follow-ups by 60% and pulled first-response time under 3 minutes.",
      },
      {
        icon: "shield",
        text: "Owned deployments, monitoring, and incident response for a distributed microservice estate while maintaining 99.9% uptime targets.",
      },
      {
        icon: "chart",
        text: "Delivered BI dashboards plus inquiry management tooling that gave ops teams 25% productivity lift and sped lead onboarding by ~30%.",
      },
    ],
  },
];
