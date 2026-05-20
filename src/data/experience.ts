export type Milestone = {
  year: string;
  range?: string;
  title: string;
  org: string;
  kind: "education" | "work" | "build" | "milestone";
  body: string;
  highlights?: string[];
  editable?: boolean; // marks fields user should confirm
};

/**
 * Confirmed: Semicolon Africa engineering training.
 * Other entries are reasonable placeholders structured for easy edit.
 */
export const journey: Milestone[] = [
  {
    year: "2026",
    range: "Q1 — present",
    title: "Stellar Builder · Original protocol work",
    org: "Independent",
    kind: "build",
    body: "Shipped seven original Stellar / Soroban projects in a single quarter — USSD wallet gateway, on-chain Ajo, tokenized invoices, NGN/USDC SDK, healthcare settlement, education funding rails, and a developer dashboard.",
    highlights: ["7 original repositories", "Rust + Go + TypeScript", "Africa-first design"],
  },
  {
    year: "2026",
    range: "Q1",
    title: "OSS Contributor · Stellar Ecosystem",
    org: "Open Source",
    kind: "work",
    body: "Active contributor across the Stellar ecosystem — SwiftChain, StrellerMinds, Agora, ChainVerse, and others — landing changes on smart contracts, frontends, and backend services in production-adjacent codebases.",
    highlights: ["20+ ecosystem repos touched", "Soroban + NestJS + Next.js"],
  },
  {
    year: "2025",
    range: "2025 — 2026",
    title: "Engineering Programme",
    org: "Semicolon Africa",
    kind: "education",
    body: "Intensive engineering training covering backend systems, object-oriented design, system architecture, and collaborative software delivery. Strong emphasis on clean abstractions, ownership, and shipped work over coursework.",
    highlights: ["Java / OOP", "System design", "Collaborative delivery"],
  },
  {
    year: "2024",
    title: "Self-directed foundation",
    org: "BigJohn-org",
    kind: "build",
    body: "Built a foundation across Python, JavaScript, and Java — task managers, movie explorers, URL shorteners, chat rooms, Bible search — accumulating the muscle that the protocol work later compounded on.",
    highlights: ["Python / JS / Java", "Full-stack basics", "8 learning-phase repos"],
    editable: true,
  },
  {
    year: "TBD",
    title: "Secondary / pre-university",
    org: "TODO: confirm school + years",
    kind: "education",
    body: "Placeholder. Add your secondary school and any pre-university programs here.",
    editable: true,
  },
];
