/** Skills organized by category */

export interface SkillCategory {
    category: string;
    items: string[];
}

export const skills: SkillCategory[] = [
    {
        category: "Frontend",
        items: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "HTML / CSS",
        ],
    },
    {
        category: "Backend",
        items: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma",
            "REST APIs",
            "GraphQL",
        ],
    },
    {
        category: "Tools & Design",
        items: [
            "Git",
            "Docker",
            "Figma",
            "Vercel",
            "CI/CD",
            "Storybook",
        ],
    },
];
