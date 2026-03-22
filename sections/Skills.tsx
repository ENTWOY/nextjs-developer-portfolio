import { skills } from "@/data/skills";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Skills section — categories with badge grids.
 */
export default function Skills() {
    return (
        <section id="skills" className="section-padding">
            <div className="max-w-6xl mx-auto px-6 md:px-8">
                <SectionHeading title="Skills" label="スキル" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                    {skills.map((category, i) => (
                        <ScrollReveal key={category.category} delay={i * 0.1}>
                            <h3 className="text-sm font-medium tracking-wide mb-5 text-foreground">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {category.items.map((skill) => (
                                    <SkillBadge key={skill} name={skill} />
                                ))}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
