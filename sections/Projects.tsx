import { projects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

/**
 * Projects section — responsive grid of project cards.
 */
export default function Projects() {
    return (
        <section id="projects" className="section-padding bg-surface/50">
            <div className="max-w-6xl mx-auto px-6 md:px-8">
                <SectionHeading title="Projects" label="プロジェクト" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
