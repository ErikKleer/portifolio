import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Erik Kleer | AI, Cloud & Automation",
  icons: {
    icon: `${publicBasePath}/icon.png`,
    shortcut: `${publicBasePath}/icon.png`,
  },
  description:
    "Portfolio of Erik Bassi Kleer, a software developer building AI-powered products, cloud workflows, and developer tools with TypeScript, React, Java, Python, AWS, and Docker.",
  openGraph: {
    title: "Erik Kleer | AI, Cloud & Automation",
    description:
      "Portfolio of Erik Bassi Kleer, a software developer building AI-powered products, cloud workflows, and developer tools with TypeScript, React, Java, Python, AWS, and Docker.",
    type: "website",
  },
};

const themeBootstrap = `
(function () {
  try {
    var key = "portfolio-theme";
    var stored = window.localStorage.getItem(key);
    var isDark =
      stored === "dark" ||
      (stored !== "light" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    var root = document.documentElement;
    root.classList.toggle("dark", isDark);
    root.style.setProperty("color-scheme", isDark ? "dark" : "light");
  } catch (error) {
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body
        className={`${outfit.variable} ${jetBrainsMono.variable} text-slate-900 antialiased dark:text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
