/** Work experience entries — displayed in the Experience timeline section */

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
}

export const experience: Experience[] = [
    {
        id: "exp-1",
        role: "Frontend Engineer",
        company: "Rakuten Group, Inc.",
        period: "2026 — Present",
        description:
            "Leading the design system team to build and maintain a unified component library used across 15+ products. Focused on accessibility, performance optimisation, and developer experience. Reduced page load times by 40% through code-splitting and lazy-loading strategies.",
        technologies: ["React", "TypeScript", "Next.js", "Storybook", "Figma"],
    },
    {
        id: "exp-2",
        role: "Fullstack Developer",
        company: "CyberAgent, Inc.",
        period: "2023 — 2025",
        description:
            "Built and shipped customer-facing web applications for the advertising platform, handling millions of daily requests. Designed REST APIs, implemented real-time dashboards, and collaborated closely with product designers to deliver polished UIs.",
        technologies: ["Vue.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
    },
    {
        id: "exp-3",
        role: "Junior Developer",
        company: "Freelance & Open Source",
        period: "2020 — 2023",
        description:
            "Worked with startups and small businesses to create responsive websites and e-commerce solutions. Contributed to open-source projects in the React ecosystem, gaining deep understanding of component architecture and state management patterns.",
        technologies: ["React", "JavaScript", "Sass", "Firebase", "Git"],
    },
];
