import type { Experience } from "@/data/experience";
import ScrollReveal from "./ScrollReveal";

interface ExperienceCardProps {
    experience: Experience;
    index: number;
}

/**
 * Timeline-style card for a single work experience entry.
 * Uses a vertical accent line on the left, consistent with the About section.
 */
export default function ExperienceCard({ experience: exp, index }: ExperienceCardProps) {
    return (
        <ScrollReveal delay={index * 0.12}>
            <article className="relative pl-8 pb-12 last:pb-0 group">
                {/* Timeline line */}
                <div className="absolute left-0 top-2 bottom-0 w-px bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent" />

                {/* Timeline dot */}
                <div className="absolute left-[-3.5px] top-[9px] w-[8px] h-[8px] rounded-full border border-accent bg-background transition-colors duration-300 group-hover:bg-accent" />

                {/* Period */}
                <p className="text-xs tracking-[0.2em] uppercase text-accent my-2 font-medium">
                    {exp.period}
                </p>

                {/* Role & Company */}
                <h3 className="text-lg md:text-xl font-medium tracking-tight mb-1 text-foreground">
                    {exp.role}
                </h3>
                <p className="text-sm text-muted mb-4 font-light">
                    {exp.company}
                </p>

                {/* Description */}
                <p className="text-muted text-sm md:text-base leading-[1.8] font-light mb-5 max-w-2xl">
                    {exp.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full border border-border text-muted hover:border-accent/50 hover:text-foreground transition-colors duration-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </article>
        </ScrollReveal>
    );
}
