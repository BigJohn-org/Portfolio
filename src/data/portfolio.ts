/**
 * Single source of truth for personal data.
 * Synced with the July 2026 CV: backend & full-stack engineer, fintech
 * infrastructure, Stellar / Soroban & Web3, trained at Semicolon Africa.
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

export type SkillCore = {
  id: string;
  name: string;
  role: string;
  visual: "ring" | "neural" | "cube" | "contract" | "sphere" | "stack";
  color: string;
  orbit: string[];
  detail: string;
};

export const portfolioData = {
  personal: {
    name: "Imeobong John",
    fullName: "John Imeobong Abasiediedu",
    role: "Backend & Full-Stack Engineer · Fintech Infrastructure · Stellar / Soroban & Web3",
    tagline: "I engineer digital experiences.",
    heroLines: [
      "I don't just build software.",
      "I engineer digital experiences.",
      "I solve impossible problems.",
    ],
    bio: "I'm a backend and full-stack engineer building financial infrastructure for everyday Nigerians — across Go, Python, TypeScript, and Rust. Trained through Semicolon Africa's year-long, build-first residency, I ship real product experiments over coursework: USSD-based wallets, on-chain savings contracts, and payment SDKs.",
    subBio:
      "I'm an active open-source contributor in the Stellar ecosystem, landing pull requests across smart contracts, backend services, and frontends. I care about clean, maintainable code, correctness around money and state, and a daily build-in-public habit. I'm looking for a team where I can grow fast and ship work that matters.",
    location: "Lagos, Nigeria",
    statusBadge: "Open to backend / full-stack roles · remote-friendly",
    image: "/imeobong.jpg",
    availability: "available",
  },

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
      handle: "imeobong-john",
      url: "https://www.linkedin.com/in/imeobong-john/",
    } satisfies Social,
    site: {
      label: "Live site",
      handle: "imeobongjohn.vercel.app",
      url: "https://imeobongjohn.vercel.app",
    } satisfies Social,
    onlydust: {
      label: "OnlyDust",
      handle: null,
      url: "https://app.onlydust.com/",
    } satisfies Social,
  },

  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ],

  skills: [
    { name: "Go", family: "language", weight: 3 },
    { name: "Python", family: "language", weight: 3 },
    { name: "TypeScript", family: "language", weight: 3 },
    { name: "JavaScript", family: "language", weight: 3 },
    { name: "Java", family: "language", weight: 2 },
    { name: "Rust", family: "language", weight: 2 },
    { name: "React", family: "framework", weight: 3 },
    { name: "Next.js", family: "framework", weight: 3 },
    { name: "NestJS", family: "framework", weight: 2 },
    { name: "FastAPI", family: "framework", weight: 2 },
    { name: "Flask", family: "framework", weight: 2 },
    { name: "Spring Boot", family: "framework", weight: 2 },
    { name: "Node.js", family: "framework", weight: 2 },
    { name: "Soroban", family: "blockchain", weight: 3 },
    { name: "Stellar SDK", family: "blockchain", weight: 3 },
    { name: "PostgreSQL", family: "infra", weight: 3 },
    { name: "MySQL", family: "infra", weight: 2 },
    { name: "MongoDB", family: "infra", weight: 1 },
    { name: "Docker", family: "infra", weight: 2 },
    { name: "Git", family: "tool", weight: 3 },
    { name: "CI/CD", family: "tool", weight: 1 },
    { name: "Linux", family: "tool", weight: 2 },
  ] satisfies Skill[],

  // The Skills command center — each language is an energy core with
  // its ecosystem orbiting around it.
  skillCores: [
    {
      id: "go",
      name: "Go",
      role: "Backend services & concurrency",
      visual: "ring",
      color: "#00E5FF",
      orbit: ["REST APIs", "USSD gateways", "Goroutines", "PostgreSQL"],
      detail:
        "My default for backend infrastructure — the StellarUSSD gateway runs on a Go core translating telco sessions into on-chain transactions.",
    },
    {
      id: "python",
      name: "Python",
      role: "APIs, data & rapid prototyping",
      visual: "neural",
      color: "#00FFA3",
      orbit: ["FastAPI", "Flask", "Pytest", "GeoPandas"],
      detail:
        "Where I move fastest — wallet backends with integer-minor-unit money math, comprehensive test coverage, and quick domain experiments.",
    },
    {
      id: "typescript",
      name: "TypeScript",
      role: "Typed SDKs & product frontends",
      visual: "cube",
      color: "#3B82F6",
      orbit: ["React", "Next.js", "NestJS", "Node.js"],
      detail:
        "From the NairaRamp SDK — rate-locking semantics enforced at the type level — to this portfolio and Next.js frontends across the Stellar ecosystem.",
    },
    {
      id: "rust",
      name: "Rust",
      role: "Soroban smart contracts",
      visual: "contract",
      color: "#EC4899",
      orbit: ["Soroban", "Stellar", "AjoChain", "MediPay"],
      detail:
        "Correctness around money and state — on-chain rotating savings, healthcare settlement prototypes, and payout rules enforced at the contract level.",
    },
    {
      id: "java",
      name: "Java",
      role: "OOP foundations & services",
      visual: "stack",
      color: "#6C5CE7",
      orbit: ["Spring Boot", "OOP", "System design", "Layered architecture"],
      detail:
        "The Semicolon Africa backbone — object-oriented design, layered architecture, and collaborative delivery drilled in over a year-long residency.",
    },
    {
      id: "data",
      name: "Data & Infra",
      role: "State that survives",
      visual: "sphere",
      color: "#B87333",
      orbit: ["PostgreSQL", "MySQL", "MongoDB", "Docker"],
      detail:
        "Database design, session state that survives dropped connections, containerised deploys, and CI/CD basics — the unglamorous parts done right.",
    },
  ] satisfies SkillCore[],

  // Rotating taglines in the hero.
  taglines: [
    "Building financial infrastructure for everyday Nigerians.",
    "Backend in Go and Python. Contracts in Rust.",
    "Landing PRs across 20+ Stellar ecosystem repos.",
    "Correctness around money and state.",
    "75+ public repos · daily commit cadence.",
  ],

  // Animated statistics — the energy-charging counters.
  stats: [
    { value: 75, suffix: "+", label: "public repositories", sub: "daily commit cadence" },
    { value: 20, suffix: "+", label: "ecosystem repos contributed to", sub: "Stellar · OnlyDust" },
    { value: 6, suffix: "", label: "languages in production use", sub: "Go · Py · TS · JS · Java · Rust" },
    { value: 3, suffix: "", label: "GSoC 2026 proposals submitted", sub: "AnkiDroid · OneBusAway · VideoLAN" },
  ],

  philosophy: [
    {
      heading: "Correctness around money.",
      body: "Money is integer minor units, state is explicit, and payout rules live at the contract level — never in a group leader's goodwill or a float's rounding error.",
    },
    {
      heading: "Ship the boring middle.",
      body: "The muscle isn't built in the launch — it's built in the steady commits that don't make a post. I show up daily and that compounds.",
    },
    {
      heading: "Learn in public.",
      body: "75+ public repos and every PR visible. The USSD wallet, the savings contracts, the day-one calculator — all of it stays up. The journey is part of the work.",
    },
  ],

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

  nowFocus: [
    "Landing PRs across the Stellar ecosystem via OnlyDust",
    "Hardening StellarUSSD toward production",
    "GSoC 2026 — proposals in at AnkiDroid, OneBusAway, VideoLAN",
    "Sharpening system-design fundamentals",
  ],
} as const;
