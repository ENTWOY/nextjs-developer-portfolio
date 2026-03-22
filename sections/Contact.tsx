import { developer } from "@/data/developer";
import SectionHeading from "@/components/SectionHeading";
import SocialLink from "@/components/SocialLink";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Contact section — CTA with email link and social icons.
 */
export default function Contact() {
    return (
        <section id="contact" className="section-padding bg-surface/50">
            <div className="max-w-6xl mx-auto px-6 md:px-8">
                <SectionHeading title="Contact" label="お問い合わせ" />

                <div className="max-w-xl">
                    <ScrollReveal delay={0.1}>
                        <p className="text-muted text-base md:text-lg font-light leading-relaxed mb-8">
                            Interested in working together or just want to say hello?
                            I&apos;m always open to conversations about new projects,
                            creative ideas, or opportunities.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <a
                            href={`mailto:${developer.email}`}
                            className="inline-block text-lg md:text-xl font-serif tracking-tight text-foreground hover:text-accent transition-colors duration-300 underline underline-offset-8 decoration-1 decoration-border hover:decoration-accent"
                        >
                            {developer.email}
                        </a>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="flex items-center gap-5 mt-10">
                            {developer.socials.map((social) => (
                                <SocialLink key={social.label} social={social} />
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
