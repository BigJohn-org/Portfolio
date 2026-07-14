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
 * Project islands — each floats in the digital universe with its own
 * signature accent. Ordered flagship-first, matching the CV.
 */
export const projects: Project[] = [
  // ───────── Flagship: fintech infrastructure ─────────
  {
    slug: "stellar-ussd",
    name: "StellarUSSD",
    oneLiner: "A Stellar wallet for feature phones — crypto access over *123#.",
    problem:
      "Millions of Nigerians without smartphones or data are excluded from typical wallet apps. Mobile money already works over USSD — so a crypto wallet should too.",
    approach:
      "A Go backend that translates USSD menu interactions into Stellar network transactions. The phone stays dumb: server-side key custody, session state that survives dropped connections, and a telco-agnostic gateway adapter all live on the backend.",
    outcome:
      "A working end-to-end prototype that proves the idea. Currently hardening the session state machine and custody model toward production readiness.",
    stack: ["Go", "Stellar SDK", "PostgreSQL", "Docker"],
    highlights: [
      "Session state survives dropped connections",
      "Server-side key custody",
      "Telco-agnostic gateway adapter",
    ],
    status: "active",
    year: "2026",
    repo: "https://github.com/BigJohn-dev/StellarUSSD-",
    demo: null,
    accent: "#00E5FF",
    tags: ["Backend", "Fintech Infrastructure", "Stellar"],
  },
  {
    slug: "ajochain",
    name: "AjoChain",
    oneLiner: "Nigerian rotating savings (Ajo/Esusu), enforced on-chain.",
    problem:
      "Ajo groups run on trust: friends pool money monthly and take turns receiving the pot. When trust fails, people lose savings. The rules deserve stronger enforcement than a group leader's goodwill.",
    approach:
      "Soroban smart contracts in Rust encoding the full rules of the rotation — schedule-driven payouts, default handling, and transparent rotation logic, all enforced at the contract level.",
    outcome:
      "Working contract with the core rotation logic on-chain. Iterating on the contract economics and default-recovery paths.",
    stack: ["Rust", "Soroban", "Stellar"],
    highlights: [
      "Schedule-driven payouts enforced on-chain",
      "Default handling without leader veto",
      "Transparent rotation logic",
    ],
    status: "active",
    year: "2026",
    repo: "https://github.com/BigJohn-dev/AjoChain",
    demo: null,
    accent: "#00FFA3",
    tags: ["Smart Contracts", "Soroban", "Fintech"],
  },
  {
    slug: "nairaramp",
    name: "NairaRamp",
    oneLiner: "A typed NGN ↔ USDC conversion SDK for Nigerian fintech.",
    problem:
      "Every Nigerian fintech rebuilding the same NGN/USDC bridge — KYC, off-ramp partners, fees — duplicates the same integration work. One well-typed SDK could absorb that.",
    approach:
      "A TypeScript SDK with a provider-agnostic adapter pattern and a clean quote → accept → settle flow. Rate-locking semantics are enforced at the type level, so misuse fails at compile time.",
    outcome:
      "The SDK surface is stable and the adapter pattern proven; provider integrations need real partners to harden.",
    stack: ["TypeScript", "Node.js", "Stellar SDK"],
    highlights: [
      "Provider-agnostic adapter pattern",
      "Quote → accept → settle flow",
      "Rate-locking enforced by the type system",
    ],
    status: "prototype",
    year: "2026",
    repo: "https://github.com/BigJohn-dev/NairaRamp-",
    demo: null,
    accent: "#3B82F6",
    tags: ["SDK", "TypeScript", "Payments"],
  },
  {
    slug: "medipay-stellar",
    name: "MediPay Stellar",
    oneLiner: "A healthcare settlement layer for hospital–HMO reconciliation.",
    problem:
      "Hospital ↔ HMO settlement in Nigeria is slow and dispute-heavy. Stellar's cheap, fast, deterministic transaction model looked like a genuine fit for claim settlement.",
    approach:
      "A reconciliation service prototyped in Rust that tokenizes claim instruments on the Stellar network for deterministic processing — domain modelling for healthcare payment disputes using Stellar's account model.",
    outcome:
      "A working reconciliation prototype and a much deeper understanding of tokenized state. MIT-licensed for anyone to fork and extend.",
    stack: ["Rust", "Stellar", "TypeScript"],
    highlights: [
      "Claim instruments tokenized on-chain",
      "Deterministic reconciliation primitives",
      "Healthtech domain modelling",
    ],
    status: "prototype",
    year: "2026",
    repo: "https://github.com/BigJohn-dev/-MediPay-Stellar",
    demo: null,
    accent: "#EC4899",
    tags: ["Healthtech", "Rust", "Stellar"],
  },

  // ───────── Foundation: the fundamentals ─────────
  {
    slug: "wallet-system",
    name: "Wallet System",
    oneLiner: "A digital payment backend — accounts, transactions, budgets.",
    problem:
      "One project touching everything that matters in fintech backend work at once: auth, persistence, transactions, money math, and validation.",
    approach:
      "A Python backend with a cleanly separated domain model — accounts, transactions, budgets. Money represented as integer minor units to eliminate floating-point errors, with comprehensive test coverage on the money paths.",
    outcome:
      "Transaction history, rewards tracking, and input validation that holds up. The foundation for how I still handle money in code today.",
    stack: ["Python", "PostgreSQL", "REST"],
    highlights: [
      "Money as integer minor units — never floats",
      "Cleanly separated domain model",
      "Comprehensive test coverage",
    ],
    status: "learning",
    year: "2025",
    repo: "https://github.com/BigJohn-org",
    demo: null,
    accent: "#6C5CE7",
    tags: ["Backend", "Python", "Fundamentals"],
  },
  {
    slug: "portfolio",
    name: "This Portfolio",
    oneLiner: "An interactive digital universe — the site you're inside right now.",
    problem:
      "A resume tells; it doesn't show. I wanted a portfolio that demonstrates engineering craft through the experience itself — motion, depth, and performance budgets instead of adjectives.",
    approach:
      "Next.js App Router with React Three Fiber for the living background, GSAP-grade scroll choreography via Framer Motion + Lenis, GLSL shaders for the nebula, and a fully data-driven content layer. Deployed on Vercel.",
    outcome:
      "60fps target on mid-range hardware, lazy-loaded scenes, and a design system that reskins the entire site from a single token file.",
    stack: ["Next.js", "React Three Fiber", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Custom GLSL nebula + particle field",
      "Scroll-driven cinematic camera moves",
      "Single-source-of-truth content layer",
    ],
    status: "production",
    year: "2026",
    repo: "https://github.com/BigJohn-dev",
    demo: "https://imeobongjohn.vercel.app",
    accent: "#B87333",
    tags: ["Frontend", "Three.js", "Craft"],
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
