/**
 * Single source of truth for personal data.
 * Real fields wired from GitHub + Semicolon context.
 * Fields marked TODO are waiting on confirmation — safe to edit inline.
 */

export type Social = {
  label: string;
  handle: string | null;
  url: string;
};

export type Skill = {
  name: string;
  family: "language" | "framework" | "infra" | "blockchain" | "tool";
  weight: 1 | 2 | 3; // visual prominence
};

export const portfolioData = {
  personal: {
    name: "Imeobong John",
    fullName: "Imeobong John Abasiediedu",
    role: "Full-Stack Engineer · Stellar / Soroban",
    tagline: "Building African fintech infrastructure on Stellar.",
    bio: "Full-stack engineer building African fintech infrastructure on the Stellar network. I design payment rails, Soroban smart contracts, and the interfaces that make them feel inevitable — from USSD wallet gateways to tokenized rotating-savings groups.",
    subBio:
      "Trained at Semicolon Africa across backend systems, object-oriented design, and collaborative delivery. I work across Rust (Soroban), TypeScript / Next.js, Go, and Python — and ship original products that solve concrete problems for Nigerian and African users.",
    location: "Lagos, Nigeria", // TODO: confirm exact city
    statusBadge: "Open to senior frontend / fintech engineering roles",
    image: "/imeobong.jpg",
    availability: "available", // "available" | "limited" | "closed"
  },

  // TODO: replace placeholder URLs once user confirms full socials list.
  // Real ones inferred from GitHub profile (BigJohn-dev has LinkedIn, X, Gmail, YouTube, Instagram listed).
  socials: {
    email: "imeobongjohn38@gmail.com",
    github: {
      label: "GitHub",
      handle: "@BigJohn-dev",
      url: "https://github.com/BigJohn-dev",
    } satisfies Social,
    org: {
      label: "GitHub Org",
      handle: "@BigJohn-org",
      url: "https://github.com/BigJohn-org",
    } satisfies Social,
    linkedin: {
      label: "LinkedIn",
      handle: null, // TODO
      url: "https://www.linkedin.com/in/imeobong-john/",
    } satisfies Social,
    twitter: {
      label: "X",
      handle: null, // TODO
      url: "https://x.com/",
    } satisfies Social,
    youtube: {
      label: "YouTube",
      handle: null, // TODO
      url: "https://youtube.com/",
    } satisfies Social,
  },

  navLinks: [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Coming Soon", href: "#omnist" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ],

  skills: [
    { name: "Rust", family: "language", weight: 3 },
    { name: "TypeScript", family: "language", weight: 3 },
    { name: "Go", family: "language", weight: 2 },
    { name: "Python", family: "language", weight: 2 },
    { name: "Java", family: "language", weight: 1 },
    { name: "Next.js", family: "framework", weight: 3 },
    { name: "React", family: "framework", weight: 3 },
    { name: "Node.js", family: "framework", weight: 2 },
    { name: "NestJS", family: "framework", weight: 1 },
    { name: "Tailwind", family: "framework", weight: 2 },
    { name: "Soroban", family: "blockchain", weight: 3 },
    { name: "Stellar SDK", family: "blockchain", weight: 3 },
    { name: "Smart Contracts", family: "blockchain", weight: 2 },
    { name: "Postgres", family: "infra", weight: 2 },
    { name: "MySQL", family: "infra", weight: 1 },
    { name: "Redis", family: "infra", weight: 1 },
    { name: "Docker", family: "infra", weight: 2 },
    { name: "Vercel", family: "infra", weight: 2 },
    { name: "Git", family: "tool", weight: 3 },
    { name: "Figma", family: "tool", weight: 1 },
  ] satisfies Skill[],

  taglines: [
    "Engineering rails the financial system forgot.",
    "Soroban contracts. Real users. Daily commits.",
    "Building like the next billion are watching.",
    "Wallets that work without internet.",
    "Tokenizing trust, one Ajo at a time.",
  ],

  philosophy: [
    {
      heading: "Infrastructure before interface.",
      body: "I build payment rails first — wallets, contracts, settlement — then earn the right to design the surface. The interface is the receipt of the system underneath.",
    },
    {
      heading: "Africa-first, not Africa-last.",
      body: "Most fintech assumes a smartphone, a debit card, and reliable internet. I design for the inverse: feature phones, intermittent connectivity, cash-first behaviour. The constraints make the work harder and the product more honest.",
    },
    {
      heading: "Ship original work.",
      body: "75 repositories, mostly original concepts — USSD-Stellar gateways, tokenized rotating-savings, NGN/USDC SDKs. Every project answers a question I actually wanted answered.",
    },
  ],
} as const;
