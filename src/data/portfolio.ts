/**
 * Single source of truth for personal data.
 * Voice matches Imeobong's live self-description: junior software engineer,
 * craft-focused, learning out loud, plus personal interests.
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
    role: "Software Engineer · Stellar ecosystem · Lagos",
    tagline: "Engineering software that's honest about what it does.",
    bio: "I'm a software engineer working across the web (Next.js, React, TypeScript) and backend (Python, Go, Java). I trained at Semicolon Africa, and these days I spend most of my time inside the Stellar ecosystem — writing Soroban smart contracts in Rust and the small product experiments that sit around them.",
    subBio:
      "I'm still early in my career, and that's the point: this site is the work in motion, not the finished résumé. I commit daily, I learn in public, and I try to build the version of each thing that's clear enough to read a year later without flinching.",
    location: "Lagos, Nigeria",
    statusBadge: "Open to software engineering roles · remote-friendly",
    image: "/imeobong.jpg",
    availability: "available",
  },

  // Real ones inferred from GitHub profile. TODO marks fields awaiting user confirmation.
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
      handle: null, // TODO: confirm exact URL slug
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
    { name: "Python", family: "language", weight: 3 },
    { name: "Java", family: "language", weight: 3 },
    { name: "JavaScript", family: "language", weight: 3 },
    { name: "TypeScript", family: "language", weight: 2 },
    { name: "Go", family: "language", weight: 2 },
    { name: "Rust", family: "language", weight: 1 },
    { name: "React", family: "framework", weight: 3 },
    { name: "Next.js", family: "framework", weight: 3 },
    { name: "Node.js", family: "framework", weight: 2 },
    { name: "Tailwind", family: "framework", weight: 2 },
    { name: "Express", family: "framework", weight: 2 },
    { name: "NestJS", family: "framework", weight: 1 },
    { name: "Soroban", family: "blockchain", weight: 1 },
    { name: "Stellar SDK", family: "blockchain", weight: 1 },
    { name: "MySQL", family: "infra", weight: 2 },
    { name: "Postgres", family: "infra", weight: 2 },
    { name: "MongoDB", family: "infra", weight: 1 },
    { name: "Docker", family: "infra", weight: 1 },
    { name: "Git", family: "tool", weight: 3 },
    { name: "Linux", family: "tool", weight: 2 },
  ] satisfies Skill[],

  // Rotating taglines in the hero — confident, factual, not founder-deck.
  taglines: [
    "Writing into the Stellar ecosystem.",
    "Backend in Go and Python. Frontend in Next.",
    "Soroban contracts, written out loud.",
    "Clarity over cleverness — every commit.",
    "Available for serious engineering work.",
  ],

  // Craft principles, not founder principles.
  philosophy: [
    {
      heading: "Clarity over cleverness.",
      body: "I'd rather write the boring, well-named version of something than the clever one-liner that needs a paragraph of comments. Future-me has to read this code.",
    },
    {
      heading: "Ship the boring middle.",
      body: "The muscle isn't built in the launch — it's built in the steady commits that don't make a post. I show up daily and that compounds.",
    },
    {
      heading: "Learn in public.",
      body: "I post my repos as I figure things out. The Stellar / Soroban work, the small experiments, the calculator I built on day one — all of it stays up. The journey is part of the work.",
    },
  ],

  // Personal — gaming, sci-fi, problem-solving — from the live site.
  interests: [
    { label: "Gaming", note: "Strategy and RPGs. Currently working through whatever has a good story." },
    { label: "Sci-fi films", note: "Anything with a serious take on time, scale, or intelligence." },
    { label: "Problem-solving", note: "LeetCode-shaped on slow days; system-design-shaped on the rest." },
    { label: "Reading", note: "Mostly engineering blogs and the occasional long-form essay." },
  ],

  quote: {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
  },

  // What I'm focused on right now — keeps the page feeling current.
  nowFocus: [
    "Writing Soroban contracts for small fintech experiments",
    "Getting more comfortable with Go for backend services",
    "Sharpening system-design fundamentals",
    "Contributing to open-source Stellar projects",
  ],
} as const;
