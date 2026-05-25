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
 * Honest chronology of the path so far.
 */
export const journey: Milestone[] = [
  {
    year: "2026",
    range: "Q1 — present",
    title: "Exploring the Stellar ecosystem",
    org: "Independent · open source",
    kind: "build",
    body: "Spending time on Soroban smart contracts in Rust and small product experiments around them — a Nigerian Ajo (rotating-savings) on-chain, a USSD wallet gateway, a healthcare settlement sketch, an NGN/USDC SDK exploration. None of these are production yet; they're how I'm learning the platform.",
    highlights: ["Rust + Go + TypeScript", "Soroban smart contracts", "Small, honest experiments"],
  },
  {
    year: "2026",
    range: "Q1",
    title: "Open-source contributions",
    org: "Stellar ecosystem · OnlyDust",
    kind: "work",
    body: "Contributing to projects across the Stellar ecosystem — SwiftChain, StrellerMinds, Agora, ChainVerse, and others — landing PRs on smart contracts, frontends, and backend services. A great way to read production-adjacent code and learn how teams actually ship.",
    highlights: ["20+ ecosystem repos touched", "Soroban + NestJS + Next.js"],
  },
  {
    year: "2025",
    range: "2025 — 2026",
    title: "Engineering programme",
    org: "Semicolon Africa",
    kind: "education",
    body: "Intensive, hands-on engineering training — backend systems, object-oriented design, collaborative software delivery, system-design fundamentals. The bias was always toward shipping work over coursework, which suits me.",
    highlights: ["Java / OOP", "System design", "Collaborative delivery"],
  },
  {
    year: "2024",
    title: "Self-directed foundation",
    org: "Personal · GitHub",
    kind: "build",
    body: "Worked through the basics across Python, JavaScript, and Java by building small things end-to-end — a wallet system, a to-do manager, a movie explorer, a URL shortener, a Bible search app, a chat room. The point was to finish each one, not to make them famous.",
    highlights: ["Python / JS / Java", "Full-stack basics"],
  },
];
