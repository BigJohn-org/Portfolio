export type ProjectStatus = "production" | "active" | "prototype" | "archived";

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
  accent: string; // hex
  tags: string[];
};

/**
 * Curated from BigJohn-dev. Forks excluded. Order = strength descending.
 * Case-study copy is drafted from each repo's stated purpose, sharpened.
 */
export const projects: Project[] = [
  {
    slug: "stellar-ussd",
    name: "StellarUSSD",
    oneLiner: "Wallets that work without smartphones or internet.",
    problem:
      "Roughly half of sub-Saharan Africa is unbanked and an even larger share holds feature phones. Stellar's promise of cheap global settlement is invisible to anyone without a smartphone and reliable bandwidth.",
    approach:
      "A Go backend that terminates USSD sessions from telco gateways and translates *123#-style menus into Stellar transactions. Session state, key custody, and rate-limiting live server-side; the phone is just a dumb terminal.",
    outcome:
      "Any cooperative or remittance operator with a short-code can offer a Stellar wallet to feature-phone users — no app, no data plan, no smartphone.",
    stack: ["Go", "Stellar SDK", "PostgreSQL", "Africa's Talking", "Docker"],
    highlights: [
      "Session-state machine survives dropped USSD sessions",
      "Server-side custody with audit log",
      "Telco-agnostic gateway adapter pattern",
    ],
    status: "active",
    year: "2026",
    repo: "https://github.com/BigJohn-dev/StellarUSSD-",
    demo: null,
    accent: "#ff5b2e",
    tags: ["Infrastructure", "Stellar", "Africa"],
  },
  {
    slug: "ajochain",
    name: "AjoChain",
    oneLiner: "Nigeria's rotating-savings tradition, made trustless.",
    problem:
      "Ajo / Esusu / Adashe — informal rotating-savings groups — move billions across Africa annually but rely entirely on social trust. A defaulting collector wipes out the pool with zero recourse.",
    approach:
      "Soroban smart contracts encode the rotation: members deposit on schedule, a determined order pays out, the contract enforces the round. The collector becomes code.",
    outcome:
      "A familiar communal savings primitive, hardened against the social-trust failure that has cost generations of African savers their capital.",
    stack: ["Rust", "Soroban", "Stellar", "TypeScript"],
    highlights: [
      "Schedule-driven payout enforced on-chain",
      "Default handling without group-leader veto",
      "Composable with NGN on/off ramps",
    ],
    status: "active",
    year: "2026",
    repo: "https://github.com/BigJohn-dev/AjoChain",
    demo: null,
    accent: "#5c8dff",
    tags: ["Smart Contracts", "Soroban", "Fintech"],
  },
  {
    slug: "medipay-stellar",
    name: "MediPay Stellar",
    oneLiner: "A decentralized payment layer for emerging-market healthcare.",
    problem:
      "Healthcare payments in Nigeria, Kenya, and Ghana hemorrhage at every settlement step — hospital ↔ HMO ↔ NHIS, weeks of float, frequent disputes. Patients pay cash because nobody trusts the rails.",
    approach:
      "Stellar as the settlement substrate; Rust services to orchestrate provider-payer reconciliation; tokenized claim instruments with deterministic dispute paths.",
    outcome:
      "Hours-not-weeks settlement, programmatic dispute resolution, and a paper trail that survives an audit.",
    stack: ["Rust", "Stellar", "Soroban", "TypeScript"],
    highlights: [
      "Provider/payer reconciliation primitives",
      "Tokenized claim instruments",
      "MIT-licensed reference implementation",
    ],
    status: "active",
    year: "2026",
    repo: "https://github.com/BigJohn-dev/-MediPay-Stellar",
    demo: null,
    accent: "#ff7a3d",
    tags: ["Healthcare", "Stellar", "Rust"],
  },
  {
    slug: "edutoken",
    name: "EduToken",
    oneLiner: "Transparent scholarship rails, on-chain from invoice to payout.",
    problem:
      "Donors fund African scholarships and have no honest answer to 'did the money reach the school?'. NGOs spend more on reporting trust than on tuition.",
    approach:
      "Schools issue fee invoices on Stellar; donors fund them line-item; payouts unlock on attendance/grade attestations. The audit is the chain.",
    outcome:
      "Donor receipts become continuous, not annual. Schools stop chasing wires. Students stop being collateral for paperwork.",
    stack: ["TypeScript", "Stellar SDK", "Next.js", "Postgres"],
    highlights: [
      "Invoice → escrow → release flow on Stellar",
      "Attestation-gated payouts",
      "Donor / school / student tri-portal",
    ],
    status: "active",
    year: "2026",
    repo: "https://github.com/BigJohn-dev/EduToken-",
    demo: null,
    accent: "#5c8dff",
    tags: ["Education", "Stellar", "TypeScript"],
  },
  {
    slug: "nairaramp",
    name: "NairaRamp",
    oneLiner: "An NGN ↔ USDC SDK any Nigerian developer can drop in.",
    problem:
      "Every Nigerian fintech that touches USDC ends up rebuilding the same fragile bridge to NGN — KYC, off-ramp partner, fees, rails. The work is duplicated across every team.",
    approach:
      "An open-source SDK that abstracts the bridge: a single typed surface for quote → quote-accept → settle, swappable provider adapters underneath.",
    outcome:
      "Developer goes from idea to NGN/USDC flow in an afternoon, not a quarter.",
    stack: ["TypeScript", "Node.js", "Stellar SDK"],
    highlights: [
      "Provider-agnostic adapter pattern",
      "Typed SDK with thin runtime",
      "Quoted-rate locking",
    ],
    status: "active",
    year: "2026",
    repo: "https://github.com/BigJohn-dev/NairaRamp-",
    demo: null,
    accent: "#ff5b2e",
    tags: ["SDK", "Fintech", "Nigeria"],
  },
  {
    slug: "agrostella",
    name: "AgroStella",
    oneLiner: "Tokenized invoices that finance the African farmer.",
    problem:
      "Smallholder farmers across Nigeria sell on credit and wait 30-90 days for buyers to pay. Working capital lives in receivables nobody will discount.",
    approach:
      "Invoices become Stellar-issued tokens that micro-lenders can buy at a discount and buyers redeem at maturity. Liquidity meets the receivable.",
    outcome:
      "Farmers get paid faster. Buyers extend terms without strangling the supply chain.",
    stack: ["TypeScript", "Stellar SDK", "Next.js"],
    highlights: [
      "Invoice → token issuance pipeline",
      "Buyer / lender / farmer roles",
      "Maturity-gated redemption",
    ],
    status: "active",
    year: "2026",
    repo: "https://github.com/BigJohn-dev/AgroStella-",
    demo: null,
    accent: "#9ad27a",
    tags: ["AgriTech", "Stellar", "Tokenization"],
  },
  {
    slug: "my-devboard",
    name: "DevBoard",
    oneLiner: "Self-hostable command center for your dev tools.",
    problem:
      "PRs in GitHub, deploys in Vercel, tickets in Jira, incidents in PagerDuty, uptime in Better Stack — the modern dev's attention is fragmented across a dozen tabs.",
    approach:
      "A self-hostable Next.js dashboard with pluggable widgets: GitHub PRs, CI status, Vercel deploys, uptime monitors. One surface, one auth, your own host.",
    outcome:
      "A single morning glance replaces eight tab-switches.",
    stack: ["TypeScript", "Next.js", "Tailwind", "Docker"],
    highlights: [
      "Pluggable widget architecture",
      "Self-host friendly (Docker)",
      "OAuth across providers",
    ],
    status: "prototype",
    year: "2026",
    repo: "https://github.com/BigJohn-dev/My-dev_board",
    demo: null,
    accent: "#efece4",
    tags: ["Developer Tools", "Next.js", "Self-hosted"],
  },
];

export const comingSoon = {
  slug: "omnist",
  name: "OMNIST",
  category: "Communication OS",
  status: "In Concept · 2026",
  pitch:
    "An intelligent orchestration layer above WhatsApp, Slack, Telegram, iMessage — and below the human relationships those apps are pretending to serve.",
  longPitch:
    "Today's messaging is app-centric: one inbox per silo, no shared memory, no semantic understanding of who matters and why. Omnist treats messaging as an operating system service. Conversations, contacts, intents, and context become first-class — apps become drivers underneath.",
  pillars: [
    {
      title: "Unified surface",
      body: "All messaging silos behind one interface. Threads merge by person, not by app.",
    },
    {
      title: "Contextual memory",
      body: "Every conversation remembers what was said, agreed, promised. The OS holds the rope, you don't.",
    },
    {
      title: "Predictive intent",
      body: "Replies, follow-ups, and meeting-scheduling suggested before you reach for them — never sent without you.",
    },
    {
      title: "Relationship graph",
      body: "A first-class model of who matters, signal vs. noise, with privacy-preserving inference local-first.",
    },
  ],
  capabilities: [
    "Cross-platform message orchestration",
    "Local-first relationship graph",
    "Contextual reply generation",
    "Meeting / commitment extraction",
    "Latency-aware presence model",
    "End-to-end-respecting routing",
  ],
};
