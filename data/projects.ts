/** Portfolio projects */

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    liveUrl: string;
    repoUrl: string;
    year: number;
}

export const projects: Project[] = [
    {
        id: "kaze-ui",
        title: "Kaze UI",
        description:
            "A component library inspired by Japanese aesthetics. Focused on accessibility, composability, and visual harmony with a neutral color system.",
        technologies: ["React", "TypeScript", "Storybook", "Radix UI"],
        liveUrl: "https://kaze-ui.dev",
        repoUrl: "https://github.com/kenjitanaka/kaze-ui",
        year: 2025,
    },
    {
        id: "mizu-analytics",
        title: "Mizu Analytics",
        description:
            "Real-time analytics dashboard for SaaS products. Features server-side rendering, interactive charts, and a clean data visualization layer.",
        technologies: ["Next.js", "D3.js", "PostgreSQL", "Tailwind CSS"],
        liveUrl: "https://mizu-analytics.app",
        repoUrl: "https://github.com/kenjitanaka/mizu-analytics",
        year: 2025,
    },
    {
        id: "sora-notes",
        title: "Sora Notes",
        description:
            "A markdown-first note-taking app with offline support, nested folders, and a distraction-free writing experience designed for deep focus.",
        technologies: ["Next.js", "IndexedDB", "MDX", "Framer Motion"],
        liveUrl: "https://sora-notes.app",
        repoUrl: "https://github.com/kenjitanaka/sora-notes",
        year: 2024,
    },
    {
        id: "kumo-deploy",
        title: "Kumo Deploy",
        description:
            "CLI tool and web dashboard for deploying containerized applications. Simplifies multi-environment deployments with a minimal configuration approach.",
        technologies: ["Go", "Docker", "React", "WebSocket"],
        liveUrl: "https://kumo-deploy.dev",
        repoUrl: "https://github.com/kenjitanaka/kumo-deploy",
        year: 2024,
    },
];
