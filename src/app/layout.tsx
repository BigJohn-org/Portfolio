import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import Noise from "@/components/ui/Noise";
import IntroSequence from "@/components/ui/IntroSequence";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { baseMetadata, personSchema } from "@/lib/seo";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="bg-ink font-sans text-bone antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
        />
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-bone focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:text-ink"
        >
          Skip to content
        </a>
        <LenisProvider>
          <Noise />
          <ScrollProgress />
          <IntroSequence />
          <Header />
          <main id="top">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
