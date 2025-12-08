import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-auto">
            <div className="container mx-auto px-4 text-center">
                <p className="text-slate-400 mb-4">
                    © {new Date().getFullYear()} {portfolioData.personal.name}. Built with care. All rights reserved.
                </p>
                <div className="flex justify-center gap-6">
                    <Link
                        href={portfolioData.socials.github}
                        target="_blank"
                        className="text-slate-400 hover:text-primary transition-colors"
                    >
                        GitHub
                    </Link>
                    <Link
                        href={portfolioData.socials.linkedin}
                        target="_blank"
                        className="text-slate-400 hover:text-primary transition-colors"
                    >
                        LinkedIn
                    </Link>
                </div>
            </div>
        </footer>
    );
}
