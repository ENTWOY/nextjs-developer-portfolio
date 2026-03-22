/** Developer profile — single source of truth for personal data */

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "email";
}

export interface Developer {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  socials: SocialLink[];
}

export const developer: Developer = {
  name: "Kenji Tanaka",
  tagline: "Design-driven fullstack developer crafting minimal digital experiences.",
  bio: "I'm a developer and designer based in Tokyo, focused on building clean, performant web applications. With over 6 years of experience spanning frontend architecture, UI/UX design, and backend systems, I strive to create products that feel effortless — where simplicity meets precision. Currently working on projects that bridge the gap between modern design and scalable engineering.",
  email: "hello@kenjitanaka.dev",
  location: "Tokyo, Japan",
  socials: [
    { label: "GitHub", href: "https://github.com/kenjitanaka", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/kenjitanaka", icon: "linkedin" },
    { label: "Twitter", href: "https://twitter.com/kenjitanaka", icon: "twitter" },
    { label: "Email", href: "mailto:hello@kenjitanaka.dev", icon: "email" },
  ],
};
