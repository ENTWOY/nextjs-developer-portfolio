import { developer } from "@/data/developer";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * About section — short bio with a decorative vertical accent line.
 */
export default function About() {
    return (
        <section id="about" className="section-padding">
            <div className="max-w-6xl mx-auto px-6 md:px-8">
                <SectionHeading title="About" label="プロフィール" />

                <div className="max-w-2xl">
                    <ScrollReveal delay={0.1}>
                        <div className="relative pl-6 border-l border-accent/40">
                            <p className="text-muted leading-[1.85] text-base md:text-lg font-light">
                                {developer.bio}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
