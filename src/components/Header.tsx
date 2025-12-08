"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { twMerge } from "tailwind-merge";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-2xl font-bold text-white hover:text-primary transition-colors"
                >
                    {portfolioData.personal.name}
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8">
                    {portfolioData.navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={twMerge(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === link.href ? "text-primary" : "text-slate-300"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span
                            className={twMerge(
                                "w-full h-0.5 bg-current transition-all duration-300",
                                isOpen ? "rotate-45 translate-y-2" : ""
                            )}
                        />
                        <span
                            className={twMerge(
                                "w-full h-0.5 bg-current transition-all duration-300",
                                isOpen ? "opacity-0" : ""
                            )}
                        />
                        <span
                            className={twMerge(
                                "w-full h-0.5 bg-current transition-all duration-300",
                                isOpen ? "-rotate-45 -translate-y-2.5" : ""
                            )}
                        />
                    </div>
                </button>
            </nav>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {portfolioData.navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={twMerge(
                                        "text-lg font-medium py-2 transition-colors hover:text-primary",
                                        pathname === link.href ? "text-primary" : "text-slate-300"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
