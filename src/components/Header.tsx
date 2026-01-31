"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--color-bg)]/80 border-b border-[var(--color-border)]">
            <nav className="container flex items-center justify-between h-16">
                <Link
                    href="/"
                    className="font-[var(--font-display)] text-lg font-medium tracking-tight"
                >
                    JT
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const href = item.href.startsWith("#") && pathname !== "/"
                            ? `/${item.href}`
                            : item.href;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={href}
                                    className={`text-sm transition-colors ${pathname === item.href
                                        ? "text-[var(--color-text)]"
                                        : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 -mr-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        {isMenuOpen ? (
                            <path d="M6 6l12 12M6 18L18 6" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-[var(--color-bg)] border-b border-[var(--color-border)]">
                    <ul className="container py-4 space-y-4">
                        {navItems.map((item) => {
                            const href = item.href.startsWith("#") && pathname !== "/"
                                ? `/${item.href}`
                                : item.href;
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={href}
                                        className={`block text-lg ${pathname === item.href
                                            ? "text-[var(--color-text)]"
                                            : "text-[var(--color-text-muted)]"
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </header>
    );
}
