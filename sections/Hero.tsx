"use client";

import { motion } from "framer-motion";
import { developer } from "@/data/developer";

/**
 * Full-viewport hero section with staggered fade-in animations.
 * Shows developer name, tagline, and a subtle scroll indicator.
 */
export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6"
        >
            <div className="max-w-3xl text-center">
                {/* Location label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xs tracking-[0.35em] uppercase text-muted mb-8"
                >
                    {developer.location}
                </motion.p>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6"
                >
                    {developer.name}
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="text-muted text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto"
                >
                    {developer.tagline}
                </motion.p>

                {/* Accent line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="w-12 h-px bg-accent mx-auto mt-10 origin-left"
                />
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] tracking-[0.25em] uppercase text-muted">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-8 bg-border"
                />
            </motion.div>
        </section>
    );
}
