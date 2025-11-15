export type SkillCategory = {
  label: string;
  items: string[];
};

export const skillGroups: SkillCategory[] = [
  {
    label: "Programming Languages",
    items: ["Go (Golang)", "PHP", "Python", "JavaScript", "SQL"],
  },
  {
    label: "Backend & Frameworks",
    items: ["FastAPI", "Django", "REST APIs", "Microservices Architecture"],
  },
  {
    label: "Databases & Caching",
    items: [
      "MySQL",
      "Redis",
      "Query Optimization",
      "Database Indexing",
      "Connection Pooling",
    ],
  },
  {
    label: "Cloud & Infra / DevOps",
    items: ["Docker", "Linux", "Git"],
  },
  {
    label: "APIs & Integrations",
    items: ["RESTful Design", "WebSockets", "Webhooks", "OAuth 2.0", "JWT"],
  },
  {
    label: "Practices & Concepts",
    items: [
      "Distributed Systems",
      "System Design",
      "Monitoring & Logging",
      "Performance Optimization",
      "Code Review",
    ],
  },
];
