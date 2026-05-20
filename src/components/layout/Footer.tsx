import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    portfolioData.socials.github,
    portfolioData.socials.linkedin,
    portfolioData.socials.twitter,
    portfolioData.socials.youtube,
  ];

  return (
    <footer className="relative border-t border-bone/10 bg-ink">
      <div className="container-editorial py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-6">// end of page</p>
            <h2 className="font-serif text-display-lg italic text-balance">
              Thanks for <span className="text-accent">stopping by</span>.
            </h2>
            <p className="mt-6 max-w-md text-bone/70">
              Open to junior / mid software engineering roles, open-source
              collaboration, and conversations with people building thoughtful things.
            </p>
            <Link
              href={`mailto:${portfolioData.socials.email}`}
              className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-bone underline-offset-8 hover:text-accent hover:underline"
            >
              {portfolioData.socials.email}
              <ArrowUpRight className="size-4" strokeWidth={1.5} />
            </Link>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-6 lg:grid-cols-3">
            <div>
              <p className="eyebrow mb-3">Site</p>
              <ul className="space-y-2">
                {portfolioData.navLinks.map((l) => (
                  <li key={l.name}>
                    <Link
                      href={l.href}
                      className="text-bone/80 transition-colors hover:text-bone"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <p className="eyebrow mb-3">Elsewhere</p>
              <ul className="space-y-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-bone/80 transition-colors hover:text-bone"
                    >
                      {s.label}
                      <ArrowUpRight
                        className="size-3 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                        strokeWidth={1.5}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="hairline mt-16 pt-6">
          <div className="flex flex-col items-start justify-between gap-3 text-[11px] text-steel sm:flex-row sm:items-center">
            <p className="font-mono uppercase tracking-[0.18em]">
              © {year} {portfolioData.personal.fullName}
            </p>
            <p className="font-mono uppercase tracking-[0.18em]">
              Designed + engineered in Lagos · Next.js · R3F
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
