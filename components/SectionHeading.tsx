import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
    title: string;
    /** Small decorative label displayed above the title (katakana/kanji) */
    label: string;
}

/**
 * Consistent section heading with a Japanese decorative label,
 * a hairline divider, and the main title.
 */
export default function SectionHeading({ title, label }: SectionHeadingProps) {
    return (
        <ScrollReveal className="mb-16 md:mb-20">
            <div className="flex items-center gap-4 mb-4">
                <span className="text-xs tracking-[0.3em] uppercase text-muted font-light">
                    {label}
                </span>
                <div className="flex-1 h-px bg-border" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
                {title}
            </h2>
        </ScrollReveal>
    );
}
