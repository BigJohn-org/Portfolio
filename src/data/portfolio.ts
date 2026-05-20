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
    role: "Junior Software Engineer",
    tagline: "Building clean, reliable, and practical software — one commit at a time.",
    bio: "I'm a junior software engineer focused on building clean, reliable, and practical digital solutions. I work with Python, Java, JavaScript, Go, and modern web technologies — building APIs, full-stack applications, and small tools that solve concrete problems.",
    subBio:
      "I trained at Semicolon Africa, where I worked through backend systems, object-oriented programming, system design, and collaborative software delivery. Lately I've also been exploring the Stellar ecosystem — writing Soroban smart contracts and building small products around them as I learn.",
    location: "Lagos, Nigeria",
    statusBadge: "Open to junior / mid software engineering roles",
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

  // Rotating taglines in the hero — voice should sound like the developer's, not a startup deck.
  taglines: [
    "Steady commits over loud launches.",
    "Currently learning Soroban out loud.",
    "Clarity > cleverness.",
    "Backend muscle. Frontend curiosity.",
    "Small tools, real users.",
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
