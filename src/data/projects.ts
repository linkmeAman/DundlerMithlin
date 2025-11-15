export type Project = {
  name: string;
  slug: string;
  stack: string[];
  impact: string;
  summary: string;
  description: string[];
  links?: { label: string; url: string }[];
};

const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  "amans27203@gmail.com",
)}`;

export const projects: Project[] = [
  {
    name: "Meta Chat Integration Platform",
    slug: "meta-chat-integration",
    stack: ["FastAPI", "React", "Meta Business API", "MySQL", "WebSockets"],
    impact: "Saved $800+/month and cut wait times by ~40%",
    summary:
      "Full-stack messaging plane that unifies Facebook + Instagram Direct via Meta Business APIs for ops teams.",
    description: [
      "Designed FastAPI services with webhook listeners, JWT auth, and resilient rate limiting that reliably push 10,000+ conversations per day.",
      "Implemented WebSocket fan-out for sub-second UI updates plus automated agent distribution (round-robin and skill-based) that reduced wait times ~40%.",
      "Consolidated third-party SaaS spend, saving $800+ monthly while gaining control over analytics and audit trails.",
    ],
    links: [{ label: "Request demo", url: gmailCompose }],
  },
  {
    name: "Calendar Event Automation Tool",
    slug: "calendar-event-automation",
    stack: ["Go", "Google Calendar API", "REST"],
    impact: "5+ hours/week saved per faculty member",
    summary:
      "Go CLI + service that automates recurring class events and reminders with batched Google Calendar API calls.",
    description: [
      "Orchestrated CLI and REST workflows with retry budgets, exponential backoff, and concurrency controls tuned for Google’s API quotas.",
      "Deployed to 20+ internal faculty members, guaranteeing consistent reminders while freeing up >5 hours per week per person.",
      "Instrumented structured logging and status webhooks so operations could audit scheduling outcomes in real time.",
    ],
  },
  {
    name: "TRATOM – Distributed A/V Recording System",
    slug: "tratom-distributed-recording",
    stack: ["Python", "Django", "FFmpeg", "REST APIs"],
    impact: "Enabled 50 concurrent classrooms with 25% less CPU",
    summary:
      "Microservice rewrite of a monolithic recording controller powering distributed classroom A/V capture.",
    description: [
      "Split the monolith into Django microservices coordinating FFmpeg workers for 50+ classrooms without resource starvation.",
      "Built REST control planes for real-time monitoring, node health, and incident workflows that halved response times.",
      "Optimized encoding pipelines to shave 25% CPU and stabilize throughput during peak testing periods.",
    ],
    links: [{ label: "Architecture notes", url: "/stack" }],
  },
];
