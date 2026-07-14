"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Magnetic from "@/components/motion/Magnetic";
import { cn } from "@/lib/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-600 ease-glide",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container-editorial">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-5 transition-all duration-600 ease-glide",
            scrolled ? "py-2 glass-strong" : "py-2.5"
          )}
        >
          <Link
            href="#top"
            className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-bone"
          >
            <span className="relative inline-flex size-2">
              <span className="absolute inset-0 rounded-full bg-accent" />
              <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
            </span>
            <span>IJ</span>
            <span className="text-steel">/</span>
            <span className="hidden text-bone/70 sm:inline">portfolio</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {portfolioData.navLinks.map((link) => (
              <Magnetic key={link.name} strength={0.12}>
                <Link
                  href={link.href}
                  className="rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-bone/70 transition-colors hover:bg-accent/[0.08] hover:text-accent"
                >
                  {link.name}
                </Link>
              </Magnetic>
            ))}
          </nav>

          <div className="hidden md:block">
            <Magnetic strength={0.18}>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-all hover:bg-bone hover:shadow-glow-cyan"
              >
                <span className="size-1.5 rounded-full bg-current" />
                Available
              </Link>
            </Magnetic>
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <div className="flex size-9 flex-col items-center justify-center gap-1.5 rounded-full glass">
              <span
                className={cn(
                  "h-px w-4 bg-bone transition-transform duration-400",
                  open && "translate-y-[3px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-4 bg-bone transition-transform duration-400",
                  open && "-translate-y-[3px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="container-editorial mt-3 md:hidden"
          >
            <div className="glass-strong rounded-2xl p-4">
              {portfolioData.navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-bone/5 py-3 font-serif text-2xl text-bone last:border-0"
                >
                  {link.name}
                  <span className="font-mono text-[10px] text-steel">↗</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
