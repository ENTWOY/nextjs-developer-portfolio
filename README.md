# Next.js Developer Portfolio
> A high-performance, minimalist portfolio designed with balance, whitespace, and technical excellence.

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

## ✦ Overview

This project is a modern, frontend-only developer portfolio built using **Next.js 16** and **Tailwind CSS 4**. It serves as a digital garden where technical proficiency meets aesthetic clarity. The architecture is designed for scalability and extreme performance, prioritizing a seamless user experience across all devices.

---

## ✦ Design Philosophy: Asian Minimalism

The aesthetic choice of this portfolio is rooted in the concept of **"Ma" (間)**—the appreciation of negative space. Instead of overwhelming the visitor with information, the design leverages:

*   **Intentional Whitespace**: Creating breathing room to focus on the content.
*   **Visual Balance**: Harmonious layouts inspired by Zen principles of simplicity and naturalness.
*   **Subtle Elegance**: Using micro-interactions and smooth transitions to guide the user without distraction.
*   **Clarity**: Removing redundant elements to ensure a clean, senior-level professional presentation.

---

## ✦ Tech Stack

*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router architecture)
*   **Language**: [TypeScript](https://www.typescriptlang.org/) for type-safe development
*   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) for utility-first responsive design
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) for performant scroll-reveals and interactions
*   **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) supporting light and dark modes
*   **Icons**: [Lucide React](https://lucide.dev/) (Minimalist icon set)

---

## ✦ Features

- **Dark Mode Support**: Seamlessly switch between light and dark themes.
- **Scroll Reveal Animations**: Using custom `ScrollReveal` components to create a dynamic reading flow.
- **Data-Driven Architecture**: Content is decoupled from UI components, stored in the `data/` directory for easy maintenance.
- **Fully Responsive**: Optimized for everything from mobile screens to 4K monitors.
- **SEO Optimized**: Standardized metadata and semantic HTML for search engine discoverability.

---

## ✦ Project Structure

The project follows a scalable component-based architecture:

```text
├── app/               # Next.js App Router (Routes & Pages)
├── components/        # Reusable UI primitives (Buttons, Cards, Modals)
├── sections/          # Page-specific layout sections (Hero, About, Projects)
├── data/              # Centralized content store (JSON-like TypeScript objects)
├── public/            # Static assets (Images, Fonts)
└── styles/            # Global styling and Tailwind configurations
```

---

## ✦ Getting Started

### Prerequisites

*   Node.js 18.x or higher
*   pnpm (recommended) or npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/my-app.git
    cd my-app
    ```
2.  Install dependencies:
    ```bash
    pnpm install
    ```
3.  Run the development server:
    ```bash
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## ✦ Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Optimizes the application for production.
- `pnpm start`: Runs the production-built application.
- `pnpm lint`: Runs ESLint to check for code quality issues.

---

## ✦ Customization

To personalize this portfolio, modify the files within the `data/` directory:

- `developer.ts`: Update personal info, role, and social links.
- `projects.ts`: Add your own portfolio items.
- `experience.ts`: Update your professional timeline.
- `skills.ts`: Customize your technical stack display.

---

## ✦ Deployment

This project is optimized for deployment on **Vercel**:

1.  Push your code to a GitHub repository.
2.  Connect the repository to your Vercel account.
3.  Vercel will automatically detect the Next.js framework and deploy.

Alternatively, you can build it for static hosting using `next export`.

---

## ✦ Future Improvements

- [ ] Interactive blog section using MDX.
- [ ] Multi-language support (i18n).
- [ ] Integration with a headless CMS for dynamic content.
- [ ] Detailed project case studies.

---

## ✦ License

Distributed under the MIT License. See `LICENSE` for more information.
