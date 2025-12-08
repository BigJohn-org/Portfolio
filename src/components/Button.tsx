import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "outline";
}

export default function Button({
    href,
    onClick,
    children,
    className,
    variant = "primary",
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary:
            "bg-primary text-white hover:bg-blue-600 shadow-lg hover:shadow-blue-500/30 focus:ring-blue-500",
        outline:
            "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-blue-500",
    };

    const combinedStyles = twMerge(baseStyles, variants[variant], className);

    if (href) {
        return (
            <Link href={href} className={combinedStyles}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedStyles}>
            {children}
        </button>
    );
}
