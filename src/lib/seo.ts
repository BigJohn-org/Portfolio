import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://imeobongjohn.dev";

const TITLE = `${portfolioData.personal.name} — ${portfolioData.personal.role}`;
const DESCRIPTION = portfolioData.personal.bio;

export const siteUrl = SITE_URL;

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${portfolioData.personal.name}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Imeobong John",
    "John Imeobong Abasiediedu",
    "Backend engineer Nigeria",
    "Fintech infrastructure engineer",
    "Stellar developer",
    "Soroban engineer",
    "Rust smart contracts",
    "Go backend developer",
    "Full stack developer Lagos",
    "Web3 Africa",
  ],
  authors: [{ name: portfolioData.personal.name, url: SITE_URL }],
  creator: portfolioData.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: portfolioData.personal.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: portfolioData.personal.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.personal.name,
    jobTitle: portfolioData.personal.role,
    email: portfolioData.socials.email,
    url: SITE_URL,
    image: `${SITE_URL}${portfolioData.personal.image}`,
    sameAs: [
      portfolioData.socials.github.url,
      portfolioData.socials.linkedin.url,
      portfolioData.socials.site.url,
    ].filter(Boolean),
    description: portfolioData.personal.bio,
    knowsAbout: portfolioData.skills.map((s) => s.name),
  } as const;
}
