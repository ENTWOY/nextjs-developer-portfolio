import { experience } from "@/data/experience";
import SectionHeading from "@/components/SectionHeading";
import ExperienceCard from "@/components/ExperienceCard";

/**
 * Experience section — vertical timeline of work history entries.
 * Placed before Projects as a priority section.
 */
export default function Experience() {
    return (
        <section id="experience" className="section-padding bg-surface/50">
            <div className="max-w-6xl mx-auto px-6 md:px-8">
                <SectionHeading title="Experience" label="経験" />

                <div className="max-w-3xl">
                    {experience.map((exp, i) => (
                        <ExperienceCard key={exp.id} experience={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
