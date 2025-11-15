export type EducationItem = {
  school: string;
  degree: string;
  duration: string;
  location: string;
  highlights: string[];
};

export type Certification = {
  title: string;
  year: string;
  note?: string;
};

export const education: EducationItem[] = [
  {
    school: "University of Mumbai",
    degree: "Bachelor of Science in Information Technology",
    duration: "2020 – 2023 · CGPA 8.4 / 10",
    location: "Mumbai, India",
    highlights: [
      "Distinction graduate (Top ~15%)",
      "Coursework: Distributed Systems, DBMS, DS&A, Software Engineering",
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    year: "2025",
  },
  {
    title:
      "Performance achievement: 65% latency reduction (330 ms → 115 ms p95) for 35k+ users through Redis caching & query optimization",
    year: "2024",
    note: "Internal engineering recognition",
  },
];
