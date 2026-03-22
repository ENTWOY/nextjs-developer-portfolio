import type { Metadata } from "next";
import { Inter, Noto_Serif_JP } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

/* ── Typography ────────────────────────────────── */

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

/* ── Metadata ──────────────────────────────────── */

export const metadata: Metadata = {
  title: "Kenji Tanaka — Developer & Designer",
  description:
    "Design-driven fullstack developer crafting minimal digital experiences. Based in Tokyo, Japan.",
  openGraph: {
    title: "Kenji Tanaka — Developer & Designer",
    description:
      "Design-driven fullstack developer crafting minimal digital experiences.",
    type: "website",
    locale: "en_US",
  },
};

/* ── Root Layout ───────────────────────────────── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSerifJP.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
