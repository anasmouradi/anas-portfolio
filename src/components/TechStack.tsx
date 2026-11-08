"use client";

import {
  Database,
  Globe,
  Server,
  Terminal,
} from "lucide-react";

interface TechItem {
  name: string;
  color: string;
  svg: React.ReactNode;
}

const TECH_ICONS: Record<string, TechItem> = {
  // Backend
  Java: {
    name: "Java",
    color: "#EA2D2E",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M8.85 16.84c0 .08.2.14.44.14.54 0 1.25-.38 2.05-.38.74 0 1.15.35 1.84.35 1.08 0 1.94-.78 1.94-.78s-.68.23-1.32.23c-.76 0-1.13-.3-1.89-.3-.88 0-1.52.41-2.18.41-.54 0-.88-.23-.88-.23v.56zm-1.07 2.1c.5.07 1.34.07 2.13-.09.77-.16 1.77-.52 2.62-.52 1.32 0 2.45.64 3.7.64 1.35 0 2.13-.56 2.13-.56s-.79.3-1.63.3c-1.12 0-2-.52-3.1-.52-.96 0-1.9.43-2.73.55-.8.12-1.74.07-2.31.02l-.81.18zm-.91 2.37c.88.08 2.34.09 3.78-.18 1.41-.26 3.19-.87 4.77-.87 2.42 0 4.19 1.05 4.19 1.05s-1.42-.56-2.92-.56c-1.99 0-3.56.88-5.55.88-1.73 0-3.18-.7-4.27-.32zm7.15-18.31c.42.5-.2 1.1-.2 1.1.9-.38 1.48-1.03 1.03-1.72-.61-.92-2.1-.96-3.12-.34 0 0 1.41-.01 2.29.96zm-3.32 3.14c.33.39-.16.86-.16.86.71-.3 1.17-.81.81-1.35-.48-.72-1.66-.75-2.46-.27 0 0 1.11-.01 1.81.76zm4.84 5.37c0-.28-.2-.55-.57-.84-.36-.28-.9-.55-1.56-.81-.66-.26-1.42-.51-2.22-.72-.8-.21-1.62-.38-2.41-.49-.79-.11-1.52-.16-2.14-.16-.62 0-1.1.05-1.39.14-.14.05-.2.1-.2.1s.06-.05.2-.1c.29-.09.77-.14 1.39-.14.62 0 1.35.05 2.14.16.79.11 1.61.28 2.41.49.8.21 1.56.46 2.22.72.66.26 1.2.53 1.56.81.37.29.57.56.57.84z"/>
      </svg>
    ),
  },
  "Spring Boot": {
    name: "Spring Boot",
    color: "#6DB33F",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.07 14.86c-2.39-.24-4.28-2.25-4.28-4.71 0-1.56.76-2.94 1.93-3.81l1.52 2.64c-.38.33-.62.82-.62 1.36 0 .99.78 1.8 1.76 1.84l-.31 2.68zm2.45-1.12l-1.3-2.25c.34-.17.59-.49.66-.88l2.67.31c-.24 1.4-1.09 2.56-2.03 2.82zm2.93-3.79l-2.67-.31c.07-.39-.07-.78-.36-1.04l1.52-2.64c1.17.87 1.93 2.25 1.93 3.81 0 .06 0 .12-.01.18h-.41z"/>
      </svg>
    ),
  },
  "Node.js": {
    name: "Node.js",
    color: "#5FA04E",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm-.9 4.3v11.4l6.4-3.7V9.7l-6.4-3.4zm-1.8 1.2L4.8 9.8v5.8l4.5 2.6V7.5z"/>
      </svg>
    ),
  },
  Express: {
    name: "Express",
    color: "#FFFFFF",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-5h2zm-1-6.5a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 12 10z"/>
      </svg>
    ),
  },
  PHP: {
    name: "PHP",
    color: "#777BB4",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-5 13h-2l1.5-6h2.5c1.4 0 2.2.8 2 2.2-.2 1.4-1.2 2.2-2.5 2.2H8l-.5 2zm9.5 0h-2l1.5-6h2.5c1.4 0 2.2.8 2 2.2-.2 1.4-1.2 2.2-2.5 2.2h-1.5l-.5 2zm-4.7-6h1.8l-1.5 6h-1.8l1.5-6z"/>
      </svg>
    ),
  },
  Laravel: {
    name: "Laravel",
    color: "#FF2D20",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M9.7 5.6L12 4.3l2.3 1.3v8.5L12 15.4l-2.3-1.3V5.6zm-4.4 3L8 7.1l1.8 1-2.7 1.5v6.2l-1.8-1V8.6zm13.4 0v6.2l-1.8 1V9.6l-2.7-1.5 1.8-1 2.7 1.5z"/>
      </svg>
    ),
  },
  "REST API": {
    name: "REST API",
    color: "#38BDF8",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
        <path d="M4 12h16m-4-4l4 4-4 4M20 7V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      </svg>
    ),
  },
  WebSocket: {
    name: "WebSocket",
    color: "#F59E0B",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },

  // Frontend
  React: {
    name: "React",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.8" />
      </svg>
    ),
  },
  "Next.js": {
    name: "Next.js",
    color: "#FFFFFF",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.3 14.5l-4.8-6.4v6.4H9v-9h1.7l4.8 6.4V7.5h1.5v9h-1.7z"/>
      </svg>
    ),
  },
  Angular: {
    name: "Angular",
    color: "#DD0031",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 2.5l8.7 3.1-1.3 11.2L12 21.5l-7.4-4.7L3.3 5.6 12 2.5zm0 3.3L7.7 15.5h2.1l.9-2.2h5.6l.9 2.2h2.1L12 5.8zm-1.8 6.1L12 8l1.8 3.9h-3.6z"/>
      </svg>
    ),
  },
  JavaScript: {
    name: "JavaScript",
    color: "#F7DF1E",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M3 3h18v18H3V3zm12.3 14.7c1.3 0 2.2-.6 2.6-1.5l-1.4-.8c-.3.5-.7.8-1.2.8-.7 0-1.1-.4-1.1-1.1v-4.8h-1.7v4.9c0 1.6.9 2.5 2.8 2.5zm-5.6-.1c1.2 0 1.9-.6 2.2-1.3l-1.3-.8c-.2.4-.5.6-1 .6-.6 0-1-.3-1-.8 0-.4.3-.7 1.1-.9l.5-.2c1.4-.4 2-1 2-2 0-1.3-1-2.1-2.5-2.1-1.4 0-2.2.7-2.5 1.5l1.3.8c.2-.4.5-.6.9-.6.5 0 .8.3.8.7 0 .4-.3.6-.9.8l-.5.2c-1.4.5-2.1 1.1-2.1 2.2 0 1.4 1.1 2.1 2.3 2.1z"/>
      </svg>
    ),
  },
  HTML5: {
    name: "HTML5",
    color: "#E34F26",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M4.2 3.5l1.4 16.1L12 21.5l6.4-1.9 1.4-16.1H4.2zm12.5 5.2h-7l.2 2.1h6.6l-.6 6.3L12 18.2l-3.9-1.1-.3-3.1h2l.2 1.6 2 .5 2-.5.3-3.2H8.3L7.7 6.6h9.3l-.3 2.1z"/>
      </svg>
    ),
  },
  CSS3: {
    name: "CSS3",
    color: "#1572B6",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M4.2 3.5l1.4 16.1L12 21.5l6.4-1.9 1.4-16.1H4.2zm11.5 4.3H8.3l.2 2.1h7.2l-.6 6.3L12 17.3l-3.1-1.1-.2-2h2l.1 1 1.2.4 1.2-.4.2-2.3H8.1L7.5 5.7h9.5l-.3 2.1z"/>
      </svg>
    ),
  },

  // Database
  MySQL: {
    name: "MySQL",
    color: "#4479A1",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16.5c-3.58 0-6.5-2.92-6.5-6.5s2.92-6.5 6.5-6.5 6.5 2.92 6.5 6.5-2.92 6.5-6.5 6.5zm-1-8h2v5h-2zm0-3h2v2h-2z"/>
      </svg>
    ),
  },
  PostgreSQL: {
    name: "PostgreSQL",
    color: "#336791",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 4.1 2.5 7.6 6.1 9.1-.1-.7-.1-1.5 0-2.3.3-1.6 1.4-2.7 2.8-3.4-.6-.9-1-2-1-3.2 0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.2-.4 2.3-1 3.2 1.4.7 2.5 1.8 2.8 3.4.1.8.1 1.6 0 2.3 3.6-1.5 6.1-5 6.1-9.1 0-5.4-4.4-9.8-9.8-9.8z"/>
      </svg>
    ),
  },
  MongoDB: {
    name: "MongoDB",
    color: "#47A248",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12.1 2.2s-.3.3-.7 1.3C10.6 5.4 9 9.1 9 12.3c0 3.8 2.5 6.8 3.1 7.4.6-.6 3.1-3.6 3.1-7.4 0-3.2-1.6-6.9-2.4-8.8-.4-1-.7-1.3-.7-1.3zm-.1 3.7c.3 1.1 1.5 4.3 1.5 6.4 0 2.4-1.3 4.5-1.5 4.8-.2-.3-1.5-2.4-1.5-4.8 0-2.1 1.2-5.3 1.5-6.4z"/>
      </svg>
    ),
  },
  Oracle: {
    name: "Oracle",
    color: "#F80000",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 4.5C6.8 4.5 2.5 7.9 2.5 12s4.3 7.5 9.5 7.5 9.5-3.4 9.5-7.5-4.3-7.5-9.5-7.5zm0 12.2c-3.7 0-6.7-2.1-6.7-4.7s3-4.7 6.7-4.7 6.7 2.1 6.7 4.7-3 4.7-6.7 4.7z"/>
      </svg>
    ),
  },

  // DevOps
  Docker: {
    name: "Docker",
    color: "#2496ED",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M22.5 10.8c-.3-.2-1.1-.3-1.8 0-.3-.8-.9-1.5-1.6-1.8l-.6-.3-.4.5c-.4.5-.5 1.3-.4 2-.8.5-1.8.6-2.8.2l-.3-.1-.2.3c-.6.8-.7 1.9-.3 2.8-.7.2-1.5.1-2.1-.3H2.8C2 15 2 16 2.8 17c2.3 2.7 6.4 4.5 10.9 4.5 6.3 0 10.1-3.5 10.1-8.5 0-.8-.1-1.6-.3-2.2zm-12.8-1h2.2v2.2H9.7V9.8zm-3.3 0h2.2v2.2H6.4V9.8zm6.5 0h2.2v2.2h-2.2V9.8zm-6.5-3.3h2.2v2.2H6.4V6.5zm3.3 0h2.2v2.2H9.7V6.5zm3.3 0h2.2v2.2h-2.2V6.5z"/>
      </svg>
    ),
  },
  Git: {
    name: "Git",
    color: "#F05032",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M21.7 10.8L13.2 2.3c-.4-.4-1.1-.4-1.5 0L9.4 4.6l2.3 2.3c.4-.1.9 0 1.2.3.4.4.5.9.3 1.4l2.2 2.2c.5-.2 1-.1 1.4.3.5.5.5 1.4 0 2-.5.5-1.4.5-2 0-.4-.4-.5-.9-.3-1.4l-2.1-2.1v4.7c.3.2.5.5.5.9 0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4c0-.4.2-.7.5-.9V8.6c-.3-.2-.5-.5-.5-.9 0-.5.2-.9.5-1.2L8.3 4.2 2.3 10.2c-.4.4-.4 1.1 0 1.5l8.5 8.5c.4.4 1.1.4 1.5 0l9.4-9.4c.4-.4.4-1.1 0-1.5z"/>
      </svg>
    ),
  },
  "CI/CD": {
    name: "CI/CD",
    color: "#10B981",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
  },
};

const categories = [
  {
    icon: Server,
    title: "Backend",
    description: "APIs, services & application logic",
    technologies: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express",
      "PHP",
      "Laravel",
      "REST API",
      "WebSocket",
    ],
  },
  {
    icon: Globe,
    title: "Frontend",
    description: "Modern interfaces & web applications",
    technologies: [
      "React",
      "Next.js",
      "Angular",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    icon: Database,
    title: "Database",
    description: "Data modeling & persistence",
    technologies: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Oracle",
    ],
  },
  {
    icon: Terminal,
    title: "DevOps",
    description: "Development & deployment workflow",
    technologies: [
      "Docker",
      "Git",
      "CI/CD",
    ],
  },
];

export default function TechStack() {
  return (
    <section className="section border-t border-zinc-900">
      <div className="container">

        <div className="technical-label">
          02 — Toolbox
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group border border-zinc-800 bg-zinc-950/40 p-7 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/40"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="mb-5 flex h-10 w-10 items-center justify-center border border-zinc-800 text-zinc-500 transition-colors group-hover:border-violet-500/50 group-hover:text-violet-400">
                      <Icon size={17} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-lg font-medium text-white">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-600">
                      {category.description}
                    </p>
                  </div>

                  <span className="font-mono text-[10px] text-zinc-700">
                    {String(categories.indexOf(category) + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {category.technologies.map((techName) => {
                    const tech = TECH_ICONS[techName];
                    return (
                      <div
                        key={techName}
                        className="
                          group/tech flex items-center gap-2
                          rounded-lg border border-zinc-800
                          bg-zinc-900/50 px-3 py-1.5
                          transition-all duration-200
                          hover:border-zinc-700 hover:bg-zinc-800/60 hover:scale-[1.02]
                        "
                      >
                        {tech?.svg && (
                          <div
                            className="shrink-0 transition-transform duration-200 group-hover/tech:scale-110"
                            style={{ color: tech.color }}
                          >
                            {tech.svg}
                          </div>
                        )}
                        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 group-hover/tech:text-white transition-colors">
                          {techName}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
