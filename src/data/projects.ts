export type ProjectStatus = "production" | "active" | "learning" | "prototype" | "archived";

export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  highlights: string[];
  status: ProjectStatus;
  year: string;
  repo: string;
  demo?: string | null;
  accent: string;
  tags: string[];
};

/**
 * Mix of recent Stellar-ecosystem experiments and earlier learning-phase projects.
 * The earlier ones (Wallet System, ToDo, Calculator, Movie Explorer) match what
 * Imeobong shows on his live portfolio. Voice is honest — small tools, real
 * learning, not a startup pitch.
 */
export const projects: Project[] = [
  // ───────── Recent: Stellar / Soroban experiments ─────────
  {
    slug: "stellar-ussd",
    name: "StellarUSSD",
    oneLiner: "A Stellar wallet you can use from a feature phone.",
    problem:
      "A lot of people in Nigeria still use feature phones, or have a smartphone but no data. They can't use a normal crypto wallet app. I wanted to see if you could put one behind a USSD code instead — the same way mobile money already works.",
    approach:
      "A Go backend that talks to telco USSD gateways and translates *123#-style menus into Stellar transactions. The phone is dumb; session state, keys, and rate-limiting all live on the server.",
    outcome:
      "An early prototype that proves the idea works end-to-end. A lot more to harden before it's production-ready, but the core flow is there.",
    stack: ["Go", "Stellar SDK", "PostgreSQL", "Docker"],
    highlights: [
      "Session state machine survives dropped sessions",
      "Server-side key custody for the prototype",
      "Telco-agnostic gateway adapter",
    ],
    status: "active",
    year: "2026",
    repo: "https://github.com/BigJohn-dev/StellarUSSD-",
    demo: null,
    accent: "#ff5b2e",
    tags: ["Backend", "Stellar", "Experiment"],
  },
  {
    slug: "ajochain",
    name: "AjoChain",
    oneLiner: "Digital Ajo (rotating savings) using Soroban smart contracts.",
    problem:
      "Ajo / Esusu groups are everywhere in Nigeria — friends pool money each month and take turns receiving the pot. It works on trust, which means it sometimes doesn't work. I wanted to try encoding the rules in a contract.",
    approach:
      "Soroban smart contracts in Rust. Members deposit on a schedule, the contract decides who gets the payout in which round, and a default doesn't depend on the group leader's mercy.",
    outcome:
      "Working prototype contract with the basic rotation logic. Still learning Soroban — there's a lot to improve on the contract economics side.",
    stack: ["Rust", "Soroban", "Stellar"],
    highlights: [
      "Schedule-driven payout enforced on-chain",
      "Default-handling without group-leader veto",
      "First real Soroban project — written while learning",
    ],
    status: "learning",
    year: "2026",
    repo: "https://github.com/BigJohn-dev/AjoChain",
    demo: null,
    accent: "#5c8dff",
    tags: ["Smart Contracts", "Soroban", "Learning"],
  },
  {
    slug: "medipay-stellar",
    name: "MediPay Stellar",
    oneLiner: "A small experiment in healthcare settlement on Stellar.",
    problem:
      "Hospital ↔ HMO settlement in Nigeria is slow and full of disputes. I was curious whether the Stellar transaction model — cheap, fast, deterministic — could be a fit.",
    approach:
      "A minimal Rust service that orchestrates provider-payer reconciliation and tokenizes claim instruments on Stellar. Still a sketch, not a product.",
    outcome:
      "Useful as a learning exercise in domain modelling and tokenized state. Helped me get comfortable with Stellar's account model.",
    stack: ["Rust", "Stellar", "TypeScript"],
    highlights: [
      "Reconciliation primitives in Rust",
      "Claim tokenization sketch",
      "MIT-licensed — anyone can fork and extend",
    ],
    status: "learning",
    year: "2026",
    repo: "https://github.com/BigJohn-dev/-MediPay-Stellar",
    demo: null,
    accent: "#ff7a3d",
    tags: ["Stellar", "Rust", "Experiment"],
  },
  {
    slug: "nairaramp",
    name: "NairaRamp",
    oneLiner: "An SDK exploration for NGN ↔ USDC conversion.",
    problem:
      "A few of my friends building Nigerian fintech kept rebuilding the same NGN/USDC bridge — KYC, off-ramp partner, fees. I wanted to see what a single typed SDK could look like.",
    approach:
      "TypeScript SDK with a thin runtime: quote → quote-accept → settle. Provider adapters underneath, so the bridge details swap out without changing app code.",
    outcome:
      "Early-stage. The shape feels right; the provider integrations need real partners to harden.",
    stack: ["TypeScript", "Node.js", "Stellar SDK"],
    highlights: [
      "Provider-agnostic adapter pattern",
      "Typed SDK surface",
      "Quote-rate locking on the type level",
    ],
    status: "prototype",
    year: "2026",
    repo: "https://github.com/BigJohn-dev/NairaRamp-",
    demo: null,
    accent: "#ff5b2e",
    tags: ["SDK", "TypeScript", "Stellar"],
  },

  // ───────── Earlier: learning-phase projects ─────────
  {
    slug: "wallet-system",
    name: "Wallet System",
    oneLiner:
      "A digital wallet for storing payment info, tracking transactions, and basic budgeting.",
    problem:
      "I wanted a project that touched a bunch of things at once — auth, persistence, transactions, money math, validation. A wallet was the perfect excuse.",
    approach:
      "Backend in Python with a clean separation of accounts, transactions, and budgets. Added simple budgeting tools, transaction history, and rewards tracking on top.",
    outcome:
      "Solidified the basics of API design, money handling (never floats), and writing tests that actually catch off-by-one bugs.",
    stack: ["Python", "PostgreSQL", "REST"],
    highlights: [
      "Cleanly separated domain model",
      "Money handled with integer minor units",
      "Transaction history + simple budget primitives",
    ],
    status: "learning",
    year: "2025",
    repo: "https://github.com/BigJohn-org",
    demo: null,
    accent: "#9ad27a",
    tags: ["Backend", "Python", "Fundamentals"],
  },
  {
    slug: "todo-manager",
    name: "ToDo Task Manager",
    oneLiner:
      "A smart to-do app with priorities, deadlines, and shared lists.",
    problem:
      "Classic project — but I used it to dig into the small things that make a CRUD app feel good: deadline reminders, priority sorting, collaborative sharing.",
    approach:
      "Full-stack: simple backend with auth + a small frontend. The whole point was to make it actually pleasant to use, not just functional.",
    outcome:
      "Helped me internalize how much of a 'simple' app is actually about the edges — empty states, loading states, what happens when two people edit the same task.",
    stack: ["JavaScript", "Node.js", "MongoDB"],
    highlights: [
      "Priority + deadline sorting",
      "Collaborative sharing",
      "Built end-to-end as a solo project",
    ],
    status: "learning",
    year: "2025",
    repo: "https://github.com/BigJohn-org",
    demo: null,
    accent: "#efece4",
    tags: ["Full Stack", "JavaScript"],
  },
  {
    slug: "movie-explorer",
    name: "Movie Explorer",
    oneLiner: "Browse, search, and discover movies — ratings and reviews.",
    problem:
      "I wanted a project that actually called external APIs and handled the messy real-world data that comes back.",
    approach:
      "React frontend that talks to The Movie Database (TMDb) API. Search, filtering, detail pages, the basics.",
    outcome:
      "Got more comfortable with React state, debouncing, pagination, and dealing with APIs that don't always return what you expected.",
    stack: ["React", "JavaScript", "TMDb API"],
    highlights: [
      "Debounced search",
      "Detail + listing pages",
      "Real API integration",
    ],
    status: "learning",
    year: "2024",
    repo: "https://github.com/BigJohn-org",
    demo: null,
    accent: "#5c8dff",
    tags: ["Frontend", "React"],
  },
  {
    slug: "calculator",
    name: "Simple Calculator",
    oneLiner: "Basic arithmetic — but cleanly built.",
    problem:
      "Day-one project. Made me think about parsing input, edge cases (divide-by-zero, decimals), and keeping a UI honest about state.",
    approach:
      "Vanilla JS / HTML / CSS. The fun was in keeping it small and tidy — the kind of code I can read a year later without flinching.",
    outcome:
      "A clean, working calculator. The point was less the calculator and more the discipline of finishing.",
    stack: ["JavaScript", "HTML", "CSS"],
    highlights: ["Edge-case-aware input parsing", "Tidy, readable code"],
    status: "archived",
    year: "2024",
    repo: "https://github.com/BigJohn-org",
    demo: null,
    accent: "#8b8d94",
    tags: ["JavaScript", "Fundamentals"],
  },
];

export const comingSoon = {
  slug: "omnist",
  name: "OMNIST",
  category: "Communication OS · Concept",
  status: "In Concept · 2026",
  pitch:
    "An intelligent orchestration layer that sits above WhatsApp, Slack, Telegram, iMessage — and below the relationships those apps are pretending to serve.",
  longPitch:
    "Today's messaging is app-centric: one inbox per silo, no shared memory, no understanding of who actually matters. The idea behind Omnist is to treat messaging as an OS service — conversations, contacts, intents, and context become first-class, and the apps become drivers underneath. It's still very much a concept I'm sketching out; nothing is shipped yet.",
  pillars: [
    {
      title: "One surface",
      body: "All messaging silos behind a single interface. Threads merge by person, not by app.",
    },
    {
      title: "Memory",
      body: "Conversations remember what was said, agreed, promised. The OS holds the rope, you don't.",
    },
    {
      title: "Suggestion, not automation",
      body: "Drafts and follow-ups suggested before you reach for them — never sent without you.",
    },
    {
      title: "Who matters",
      body: "A first-class model of signal vs. noise, with privacy-preserving inference kept local.",
    },
  ],
  capabilities: [
    "Cross-platform message orchestration",
    "Local-first relationship graph",
    "Contextual reply drafting",
    "Meeting / commitment extraction",
    "Latency-aware presence model",
    "End-to-end-respecting routing",
  ],
};
