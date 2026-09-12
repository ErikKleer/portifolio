import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const GLASS = [
  "backdrop-blur-xl",
  "border border-slate-200/80 border-t-white/80 bg-white/45 shadow-xl shadow-slate-200/50",
  "dark:border-white/5 dark:border-t-white/15 dark:bg-zinc-900/45 dark:shadow-2xl dark:shadow-black/80",
].join(" ");

const CARD_SURFACE = [
  "border border-slate-200/80 border-t-white/80 bg-white/45 shadow-xl shadow-slate-200/50",
  "dark:border-white/5 dark:border-t-white/15 dark:bg-zinc-900/45 dark:shadow-2xl dark:shadow-black/80",
].join(" ");

const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]";

const SHELL = "mx-auto w-full max-w-6xl px-4 md:px-8";
const PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const profile = {
  name: "Erik Kleer",
  headline: "Software Developer focused on AI, Cloud & Automation",
  summary:
    "Full-stack developer building AI-powered products, developer tooling, and cloud workflows with TypeScript, React, Java, Python, and AWS.",
  email: "erikbkleer@gmail.com",
  github: "https://github.com/erikkleer",
  linkedin: "https://www.linkedin.com/in/erikkleer",
  portraitImage: "",
};

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
];

interface Project {
  id: string;
  title: string;
  synopsis: string;
  tags: string[];
  previewImage: string;
  demoUrl: string;
  repoUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "projeto-vortice-aws",
    title: "Vortex Project: On-Demand Minecraft Server on AWS",
    synopsis:
      "A serverless, event-driven platform that starts a private Minecraft server on demand and shuts it down after inactivity, reducing idle costs. Includes a web dashboard, monitoring, security, and automated backups.",
    tags: ["AWS", "Python", "Lambda", "EC2", "API Gateway", "CloudWatch"],
    previewImage: "/projects/vortex-black-hole.svg",
    demoUrl: "",
    repoUrl: "https://github.com/ErikKleer/projeto-vortice-aws",
    featured: true,
  },
  {
    id: "scommit",
    title: "SCOMMIT: AI-Powered Git Commit Assistant",
    synopsis:
      "A TypeScript CLI that analyzes staged diffs to generate Conventional Commits, structured pull request summaries, and a 1-to-5 risk score, with review-friendly dry runs and explicit commit actions.",
    tags: ["TypeScript", "Node.js", "Zod", "LLMs", "DevTools", "CLI"],
    previewImage: "/projects/scommit-signal-board.svg",
    demoUrl: "",
    repoUrl: "https://github.com/ErikKleer/scommit",
  },
];

interface StackGroup {
  id: string;
  label: string;
  items: string[];
}

const stackGroups: StackGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java"],
  },
  {
    id: "interfaces",
    label: "Interfaces",
    items: ["React", "Node.js", "TypeScript", "JavaScript"],
  },
  {
    id: "data",
    label: "Data and services",
    items: ["PostgreSQL", "RabbitMQ", "AWS", "Azure", "Azure DevOps"],
  },
  {
    id: "platform",
    label: "Platform",
    items: ["Docker", "CI/CD", "GitHub", "Git", "SOLID", "Linux"],
  },
];

interface ExperienceEntry {
  id: string;
  period: string;
  role: string;
  organization: string;
  metric: string;
  detail: string;
}

const experience: ExperienceEntry[] = [
  {
    id: "role-current",
    period: "Mar 2025 to now",
    role: "Software Engineering Intern",
    organization: "CI&T",
    metric: "90% less search time",
    detail:
      "Built a Dockerized AI Agent with MCP and a React/Vite dashboard that unifies GitHub, Jira, and Wiki data. Also improved LLM-driven developer workflows, AWS SQS throughput, and repository security automation.",
  },
  {
    id: "role-previous",
    period: "Apr 2022 to Jan 2024",
    role: "Full-Stack Developer (Intern to Junior)",
    organization: "GEOvendas Pessoas",
    metric: "8x map rendering performance",
    detail:
      "Optimized PostgreSQL queries and Java APIs for interactive geographic maps. Developed a Java/TypeScript product showcase with automated PDF catalogs and redesigned responsive interfaces.",
  },
];

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200/80 bg-white/35 px-3 py-1 text-xs text-slate-600 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300">
      {children}
    </span>
  );
}

function PreviewFrame({ src, title }: { src: string; title: string }) {
  const hasImage = src.trim().length > 0;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-200/70 bg-slate-100 dark:border-white/5 dark:bg-zinc-950/60">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_120%_at_12%_0%,var(--accent-soft),transparent_62%)]"
      />
      {hasImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${PUBLIC_BASE_PATH}${src}`}
          alt={`${title} preview`}
          loading="lazy"
          decoding="async"
          className="relative h-full w-full object-cover"
        />
      ) : (
        <p className="relative flex h-full w-full items-center justify-center px-6 text-center text-xs text-slate-500 dark:text-zinc-500">
          16:9 preview area. Add an image path to previewImage.
        </p>
      )}
    </div>
  );
}

function ProjectLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const base = `inline-flex min-h-10 items-center rounded-full px-4 text-sm font-medium transition ${FOCUS}`;

  if (href.trim().length === 0 || href === "#") {
    return (
      <span
        aria-disabled="true"
        title="Add a URL in the projects array"
        className={`${base} cursor-not-allowed border border-dashed border-slate-300 text-slate-400 dark:border-white/10 dark:text-zinc-500`}
      >
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`${base} bg-[var(--accent)] text-[var(--accent-contrast)] hover:brightness-110 active:scale-[0.98]`}
    >
      {label}
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isFeatured = project.featured === true;

  return (
    <article
      data-glass
      className={`${CARD_SURFACE} group flex flex-col gap-5 rounded-2xl p-4 transition duration-300 hover:-translate-y-0.5 md:p-6 ${
        isFeatured ? "md:col-span-2 md:flex-row md:items-center md:gap-8" : ""
      }`}
    >
      <div className={isFeatured ? "md:w-[48%] md:shrink-0" : ""}>
        <PreviewFrame src={project.previewImage} title={project.title} />
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3
            className={`font-medium tracking-tight ${
              isFeatured ? "text-xl md:text-2xl" : "text-lg"
            }`}
          >
            {project.title}
          </h3>
          <p className="max-w-[58ch] text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
            {project.synopsis}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.demoUrl.trim().length > 0 ? (
            <ProjectLink href={project.demoUrl} label="Live demo" />
          ) : null}
          <ProjectLink href={project.repoUrl} label="Source" />
        </div>
      </div>
    </article>
  );
}

function SectionHeading({
  id,
  title,
  lede,
}: {
  id: string;
  title: string;
  lede: string;
}) {
  return (
    <div className="max-w-[52ch]">
      <h2
        id={`${id}-heading`}
        className="text-2xl font-medium tracking-tight md:text-3xl"
      >
        {title}
      </h2>
      <p className="mt-3 text-pretty text-slate-600 dark:text-zinc-400">{lede}</p>
    </div>
  );
}

export default function Home() {
  const orderedProjects = [...projects].sort(
    (a, b) => Number(b.featured === true) - Number(a.featured === true),
  );

  const year = new Date().getFullYear();

  return (
    <div className="relative isolate min-h-[100dvh]">
      <a
        href="#main"
        className={`sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--accent-contrast)] ${FOCUS}`}
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-40">
        <div className={`${SHELL} py-3`}>
          <div
            data-glass
            className={`${GLASS} flex h-14 items-center justify-between gap-3 rounded-2xl pr-2 pl-4 md:pl-5`}
          >
            <a
              href="#main"
              className={`rounded-full px-1 text-sm font-medium tracking-tight whitespace-nowrap md:text-base ${FOCUS}`}
            >
              {profile.name}
            </a>

            <div className="flex items-center gap-1 md:gap-2">
              <nav aria-label="Sections">
                <ul className="hidden items-center gap-1 min-[420px]:flex md:gap-2">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className={`inline-flex min-h-10 items-center rounded-full px-2.5 text-[13px] text-slate-600 transition hover:text-slate-900 md:px-3 md:text-sm dark:text-zinc-400 dark:hover:text-zinc-50 ${FOCUS}`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main id="main" className="relative z-10">
        <section className={`${SHELL} flex min-h-[100dvh] items-center pt-24 pb-16`}>
          <div className="grid w-full items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
            <div>
              <h1
                className="reveal max-w-[16ch] text-4xl leading-[1.06] font-medium tracking-tight text-balance md:text-5xl lg:text-6xl"
                style={{ animationDelay: "60ms" }}
              >
                {profile.headline}
              </h1>
              <p
                className="reveal mt-6 max-w-[52ch] text-base leading-relaxed text-slate-600 md:text-lg dark:text-zinc-400"
                style={{ animationDelay: "160ms" }}
              >
                {profile.summary}
              </p>
              <div
                className="reveal mt-8 flex flex-wrap gap-3"
                style={{ animationDelay: "260ms" }}
              >
                <a
                  href="#work"
                  className={`inline-flex min-h-11 items-center rounded-full bg-[var(--accent)] px-5 text-sm font-medium text-[var(--accent-contrast)] transition hover:brightness-110 active:scale-[0.98] ${FOCUS}`}
                >
                  View projects
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  data-glass
                  className={`${GLASS} inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium transition hover:-translate-y-0.5 active:scale-[0.98] ${FOCUS}`}
                >
                  Email me
                </a>
              </div>
            </div>

            <div
              data-glass
              className={`${GLASS} reveal rounded-2xl p-3`}
              style={{ animationDelay: "360ms" }}
            >
              <div className="relative aspect-[4/5] max-h-[58dvh] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-zinc-950/60">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(120%_100%_at_20%_0%,var(--accent-soft),transparent_65%)]"
                />
                {profile.portraitImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={profile.portraitImage}
                    alt={`Portrait of ${profile.name}`}
                    className="relative h-full w-full object-cover"
                  />
                ) : (
                  <p className="relative flex h-full items-center justify-center px-8 text-center text-sm text-slate-500 dark:text-zinc-500">
                    Portrait image coming soon.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section
          id="stack"
          aria-labelledby="stack-heading"
          className={`${SHELL} scroll-mt-24 py-16 md:py-24`}
        >
          <SectionHeading
            id="stack"
            title="Stack"
            lede="The tools I reach for first, grouped by where they sit in a system."
          />

          <div className="mt-10 flex flex-col">
            {stackGroups.map((group) => (
              <div
                key={group.id}
                className="grid gap-3 border-t border-slate-200/80 py-6 md:grid-cols-[180px_1fr] md:gap-8 dark:border-white/5"
              >
                <h3 className="text-sm text-slate-500 dark:text-zinc-500">
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge>{item}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="work"
          aria-labelledby="work-heading"
          className={`${SHELL} scroll-mt-24 py-16 md:py-24`}
        >
          <SectionHeading
            id="work"
            title="Selected work"
            lede="Recent builds and the architectural choices behind them."
          />

          {orderedProjects.length === 0 ? (
            <div
              data-glass
              className={`${GLASS} mt-10 rounded-2xl px-6 py-14 text-center`}
            >
              <p className="font-medium">No projects yet</p>
              <p className="mx-auto mt-2 max-w-[40ch] text-sm text-slate-600 dark:text-zinc-400">
                Add an entry to the projects array in this file and it appears here.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-6">
              {orderedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section>

        <section
          id="experience"
          aria-labelledby="experience-heading"
          className={`${SHELL} scroll-mt-24 py-16 md:py-24`}
        >
          <SectionHeading
            id="experience"
            title="Experience"
            lede="Where I have worked, and the one number that mattered in each role."
          />

          <ol className="mt-10">
            {experience.map((entry, index) => {
              const isLast = index === experience.length - 1;

              return (
                <li
                  key={entry.id}
                  className={`grid grid-cols-[12px_1fr] gap-x-4 md:grid-cols-[12px_1fr] md:gap-x-6 ${
                    isLast ? "" : "pb-10"
                  }`}
                >
                  <div aria-hidden className="relative flex justify-center">
                    <span className="absolute top-[7px] h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                    {isLast ? null : (
                      <span className="mt-[7px] h-full w-px bg-slate-200 dark:bg-white/10" />
                    )}
                  </div>

                  <div className="flex flex-col gap-2 md:grid md:grid-cols-[140px_1fr] md:gap-6">
                    <p className="type-mono text-xs text-slate-500 md:pt-1 dark:text-zinc-500">
                      {entry.period}
                    </p>
                    <div>
                      <h3 className="font-medium tracking-tight">
                        {entry.role},{" "}
                        <span className="text-slate-600 dark:text-zinc-400">
                          {entry.organization}
                        </span>
                      </h3>
                      <p className="type-mono mt-1.5 text-sm text-[var(--accent)]">
                        {entry.metric}
                      </p>
                      <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                        {entry.detail}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      </main>

      <footer className="relative z-10 border-t border-slate-200/80 dark:border-white/5">
        <div
          className={`${SHELL} flex flex-wrap items-center justify-between gap-x-4 gap-y-3 py-10 text-sm`}
        >
          <p className="min-w-0 text-slate-600 dark:text-zinc-400">
            {profile.name}. Open to opportunities.
          </p>

          <nav aria-label="Contact">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className={`rounded-full text-slate-600 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 dark:text-zinc-400 dark:decoration-white/20 dark:hover:text-zinc-50 ${FOCUS}`}
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`rounded-full text-slate-600 transition hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-50 ${FOCUS}`}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`rounded-full text-slate-600 transition hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-50 ${FOCUS}`}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>

          <p className="shrink-0 whitespace-nowrap text-slate-400 dark:text-zinc-600">
            {year}
          </p>
        </div>
      </footer>
    </div>
  );
}
