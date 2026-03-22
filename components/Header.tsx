"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/data/navigation";
import { developer } from "@/data/developer";
import ThemeToggle from "./ThemeToggle";

/**
 * Fixed header with scroll-aware backdrop blur.
 * Shows nav links that scroll smoothly to sections.
 */
export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-background/80 backdrop-blur-md border-b border-border"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-8">
                <nav className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo / Name */}
                    <a
                        href="#"
                        className="font-serif text-lg tracking-tight hover:text-accent transition-colors duration-200"
                    >
                        {developer.name.split(" ")[0]}
                        <span className="text-accent">.</span>
                    </a>

                    {/* Desktop nav */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="text-sm text-muted hover:text-foreground transition-colors duration-200 tracking-wide"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-5 h-px bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
                                }`}
                        />
                        <span
                            className={`block w-5 h-px bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                                }`}
                        />
                    </button>
                </nav>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
                >
                    <ul className="flex flex-col items-center gap-6 py-8">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-sm text-muted hover:text-foreground transition-colors duration-200 tracking-wide"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.header>
    );
}
