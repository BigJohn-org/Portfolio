export type Milestone = {
  year: string;
  range?: string;
  title: string;
  org: string;
  kind: "education" | "work" | "build" | "milestone";
  body: string;
  highlights?: string[];
};

/**
 * The railway of memories — each station is a career milestone,
 * synced with the July 2026 CV.
 */
export const journey: Milestone[] = [
  {
    year: "2026",
    range: "2026 — present",
    title: "Open-source contributor, Stellar ecosystem",
    org: "OnlyDust · SwiftChain · StrellerMinds · Agora · ChainVerse",
    kind: "work",
    body: "Contributing to production-adjacent repositories across the Stellar ecosystem — landing pull requests on Soroban smart contracts, NestJS backend services, and Next.js frontends across 20+ repos. Reading and working within established codebases to understand how distributed teams ship real software at scale.",
    highlights: ["20+ ecosystem repos", "Soroban + NestJS + Next.js", "Production-adjacent code"],
  },
  {
    year: "2026",
    range: "Q1 2026",
    title: "GSoC 2026 applicant",
    org: "AnkiDroid · OneBusAway/OTSF · VideoLAN",
    kind: "milestone",
    body: "Submitted Google Summer of Code proposals to three organisations — AnkiDroid (Kotlin / Material 3), OneBusAway/OTSF (Python / GeoPandas), and VideoLAN (Go / Vue.js 3). Each proposal meant reading a large, unfamiliar codebase deeply enough to design a credible contribution.",
    highlights: ["Kotlin / Material 3", "Python / GeoPandas", "Go / Vue.js 3"],
  },
  {
    year: "2025",
    range: "Nov 2025 — Feb 2026",
    title: "Software development intern",
    org: "Briskit Agency · Port Harcourt (remote)",
    kind: "work",
    body: "Built frontend components and implemented UI sections from approved designs for CamberfarmAfrica and CamberfarmExport. Supported backend API endpoint development and testing, debugged responsiveness across both client projects, and worked GitHub + Asana inside an Agile workflow.",
    highlights: ["Two client sites shipped", "API endpoints + testing", "Agile · GitHub · Asana"],
  },
  {
    year: "2025",
    range: "Feb 2025 — Feb 2026",
    title: "Software engineering residency",
    org: "Semicolon Africa · Lagos",
    kind: "education",
    body: "A year-long, build-first engineering residency — backend systems, OOP, database design, system design, and collaborative software delivery. Built and deployed full-stack applications with React, Node.js, Express, Spring Boot, and Flask against relational and document databases. Sprints, peer code reviews, pair programming.",
    highlights: ["Java / Spring Boot", "System design", "Team sprints + code review"],
  },
  {
    year: "2024",
    title: "Self-directed foundation",
    org: "Personal · GitHub",
    kind: "build",
    body: "Worked through the fundamentals across Python, JavaScript, and Java by building small things end-to-end — a wallet system, a to-do manager, a movie explorer, a calculator. The point was to finish each one and leave it public. That habit became 75+ repositories.",
    highlights: ["Python / JS / Java", "Full-stack basics", "Everything stays public"],
  },
];
