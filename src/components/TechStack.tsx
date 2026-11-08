import {
  Braces,
  Database,
  Globe,
  Server,
  Terminal,
} from "lucide-react";

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

                <div className="mt-8 flex flex-wrap gap-2">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-zinc-800 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-500 transition-colors group-hover:text-zinc-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}