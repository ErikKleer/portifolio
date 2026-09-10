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

export const metadata: Metadata = {
  title: "Erik Bassi Kleer, Full-Stack Developer",
  description:
    "Portfolio of Erik Bassi Kleer, a full-stack developer working with TypeScript, React, Java, Python, AWS, and Docker.",
  openGraph: {
    title: "Erik Bassi Kleer, Full-Stack Developer",
    description:
      "Portfolio of Erik Bassi Kleer, a full-stack developer working with TypeScript, React, Java, Python, AWS, and Docker.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Erik Bassi Kleer, Full-Stack Developer",
    description:
      "Portfolio of Erik Bassi Kleer, a full-stack developer working with TypeScript, React, Java, Python, AWS, and Docker.",
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
