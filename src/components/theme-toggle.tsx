"use client";

import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

type Theme = "light" | "dark";

/** Keep in sync with the bootstrap script in src/app/layout.tsx. */
const THEME_STORAGE_KEY = "portfolio-theme";

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function storedTheme(): Theme | null {
  try {
    const value = window.localStorage.getItem(THEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.setProperty("color-scheme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(storedTheme() ?? systemTheme());
  }, []);

  useEffect(() => {
    if (theme === null) return;
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (storedTheme() !== null) return;
      setTheme(event.matches ? "dark" : "light");
    };

    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  const isDark = theme === "dark";

  const toggle = useCallback(() => {
    const next: Theme = isDark ? "light" : "dark";
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
    }
    setTheme(next);
  }, [isDark]);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Activate light theme" : "Activate dark theme"}
      onClick={toggle}
      className="relative inline-flex h-10 w-[76px] shrink-0 items-center rounded-full border border-slate-200/80 bg-white/60 px-1 backdrop-blur-md transition-colors hover:bg-white active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] focus-visible:outline-none dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]"
    >
      <span className="pointer-events-none relative z-10 flex w-full items-center justify-between px-[7px] text-slate-500 dark:text-zinc-400">
        <Sun aria-hidden size={15} weight="bold" />
        <Moon aria-hidden size={15} weight="bold" />
      </span>
      <span
        aria-hidden
        className={`absolute top-1 left-1 h-8 w-8 rounded-full bg-white shadow-md shadow-slate-300/60 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-800 dark:shadow-black/60 ${
          theme === null
            ? "opacity-0"
            : isDark
              ? "translate-x-[34px] opacity-100"
              : "translate-x-0 opacity-100"
        }`}
      />
    </button>
  );
}
