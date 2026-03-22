interface SkillBadgeProps {
    name: string;
}

/** Minimal pill badge for a single skill */
export default function SkillBadge({ name }: SkillBadgeProps) {
    return (
        <span className="inline-block text-sm px-4 py-2 border border-border rounded-sm text-muted hover:text-foreground hover:border-accent/40 transition-all duration-300 cursor-default">
            {name}
        </span>
    );
}
