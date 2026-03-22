"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import ScrollReveal from "./ScrollReveal";

interface ProjectCardProps {
    project: Project;
    index: number;
}

/**
 * Project card with hover overlay revealing technologies and links.
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <ScrollReveal delay={index * 0.1}>
            <motion.article
                className="group relative border border-border rounded-sm p-6 md:p-8 transition-colors duration-300 hover:border-accent/40 bg-background"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {/* Year badge */}
                <span className="text-xs text-muted tracking-widest">{project.year}</span>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl font-medium mt-3 mb-3 tracking-tight">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2.5 py-1 border border-border rounded-sm text-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:text-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 text-sm">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors duration-200 underline underline-offset-4 decoration-border hover:decoration-accent"
                    >
                        Live ↗
                    </a>
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors duration-200 underline underline-offset-4 decoration-border hover:decoration-accent"
                    >
                        Code ↗
                    </a>
                </div>
            </motion.article>
        </ScrollReveal>
    );
}
