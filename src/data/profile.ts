export type ProfileStat = {
  label: string;
  value: string;
  detail?: string;
  numericValue?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
};

export type ContactInfo = {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  availability: string;
  resumeUrl: string;
  gmailComposeUrl: string;
};

export type ProfileNow = {
  headline: string;
  currentFocus: string[];
  stack: string[];
  learning: string[];
  tooling: string[];
};

export type Profile = {
  name: string;
  title: string;
  heroTagline: string;
  lead: string;
  summary: string[];
  stats: ProfileStat[];
  contact: ContactInfo;
  focusAreas: string[];
  now: ProfileNow;
  photo: {
    src: string;
    alt: string;
  };
};

const email = "amans27203@gmail.com";

export const profile: Profile = {
  name: "Aman Singh",
  title:
    "Software Developer — Go · PHP · Python · MySQL · Redis · Distributed Systems",
  heroTagline:
    "I design low-latency APIs, resilient data pipelines, and pragmatic automation for growth-stage teams.",
  lead:
    "Results-driven backend engineer with 2+ years architecting microservices that stay fast, observable, and cost-aware.",
  summary: [
    "I obsess over measurable performance. Whether it is taking a 330 ms p95 query down to 115 ms with a disciplined cache-aside layer, or tuning a 500 GB+ MySQL cluster so two million API calls per day stay predictable, I build systems that keep moving when customer demand surges.",
    "My time is split between Go microservices, Python/FastAPI surfaces, and pragmatic PHP services. Redis, observability, and automation-first thinking remove repetitive tasks—an 80% reduction in ops effort and double-digit retention gains came from those habits.",
    "I partner with product and operations leaders to ship features that pay for themselves: distributed messaging platforms, BI visibility, scheduling workflows, and calm incident playbooks that keep uptime above 99.9% even as headcount stays lean.",
  ],
  stats: [
    {
      label: "Users Served",
      value: "35,000+",
      numericValue: 35000,
      suffix: "+",
      detail: "monthly parents",
    },
    {
      label: "API Throughput",
      value: "2M+ API requests/day",
      numericValue: 2000000,
      suffix: "+ req/day",
      detail: "API requests per day",
    },
    {
      label: "Latency Gains",
      value: "65% faster",
      numericValue: 65,
      suffix: "% faster",
      detail: "p95 reduction",
    },
  ],
  contact: {
    email,
    phone: "+91-8454828137",
    location: "Mumbai, India · Remote",
    linkedin: "https://linkedin.com/in/linkmeaman",
    availability: "Open to backend, platform, or infrastructure roles.",
    resumeUrl: "/amansingh.pdf",
    gmailComposeUrl: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`,
  },
  focusAreas: [
    "High-throughput REST APIs and streaming-style messaging",
    "Database performance tuning, connection pooling, and caching strategy",
    "Observability-first operations with actionable BI and incident follow-up",
    "Automation that compresses manual effort and keeps teams proactive",
  ],
  now: {
    headline:
      "Staying deep in distributed messaging, Go microservices, and pragmatic dev-tools for ops teams.",
    currentFocus: [
      "Scaling a Meta Business messaging fabric with FastAPI, Redis, and WebSockets.",
      "Keeping a multi-tenant Go subscription engine compliant, testable, and ready for usage-based billing.",
      "Hardening observability for 99.9% uptime targets without overbuilding.",
    ],
    stack: [
      "Go 1.22",
      "Python 3.12 + FastAPI",
      "PHP 8.x",
      "MySQL 8",
      "Redis 7",
      "Django microservices",
      "Docker + Linux",
    ],
    learning: [
      "Advanced Go patterns for high-concurrency services",
      "Distributed tracing with OpenTelemetry",
      "Cost-aware autoscaling strategies on managed Kubernetes",
    ],
    tooling: [
      "Grafana / Prometheus",
      "Temporal for workflow orchestration experiments",
      "GitHub Actions",
      "Vercel + Fly.io for quick prototypes",
    ],
  },
  photo: {
    src: "/profile_image.jpeg",
    alt: "Aman Singh portrait",
  },
};
