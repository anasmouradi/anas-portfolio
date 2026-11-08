import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers3,
  Server,
  Database,
  Cpu,
  Github,
  Calendar,
  UserCheck,
} from "lucide-react";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-900 bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <Link
            href="/#work"
            className="flex items-center gap-2.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} className="text-violet-400" />
            <span>Back to portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-zinc-500">
              {project.number} / PROJECT
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="absolute right-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px]" />

        <div className="container relative py-20 md:py-32">
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="technical-label">
              {project.category}
            </div>

            <span className="font-mono text-xs text-zinc-500 border border-zinc-800 px-3 py-1 rounded-full">
              {project.timeline}
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.05em] text-white leading-[1.08]">
            {project.title}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            {project.description}
          </p>

          {/* Quick action buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={project.githubUrl || "https://github.com/anasmouradi/anas-portfolio"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github size={16} className="mr-2" />
              <span>View Repository</span>
              <ArrowUpRight size={16} className="ml-2" />
            </a>

            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 px-4 py-3 border border-zinc-800 rounded-lg bg-zinc-950/40">
              <UserCheck size={14} className="text-violet-400" />
              <span>Role: {project.role}</span>
            </div>
          </div>

          {/* Technologies Chips */}
          <div className="mt-10 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full border border-zinc-800
                  bg-zinc-900/40 px-3.5 py-1.5
                  font-mono text-[10px]
                  uppercase tracking-wider
                  text-zinc-400
                "
              >
                {technology}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* Metrics Highlights Bar */}
      {project.metrics && (
        <section className="border-b border-zinc-900 bg-[#0E0E0E]">
          <div className="container py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="border-l border-zinc-800 pl-6">
                  <div className="font-semibold text-3xl md:text-4xl text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="font-mono text-xs text-zinc-500 mt-1 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Overview */}
      <section className="section">
        <div className="container">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <div className="technical-label mb-6">
                01 — Overview
              </div>

              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl text-white">
                Context &amp;
                <br />
                <span className="text-zinc-500">
                  Engineering Scope.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-8 text-zinc-400 md:text-base">
              {project.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Key capabilities */}
      <section className="border-y border-zinc-900 bg-[#0D0D0D]">
        <div className="container py-24">

          <div className="technical-label mb-12">
            02 — Key Capabilities &amp; Features
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <div
                key={feature}
                className="bg-[#111111] p-7 transition-colors hover:bg-[#141414]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <CheckCircle2
                    size={16}
                    className="text-violet-400"
                  />
                </div>

                <p className="text-sm font-medium text-zinc-200 leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Architecture */}
      <section className="section">
        <div className="container">

          <div className="technical-label mb-8">
            03 — Architecture &amp; System Layers
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.04em] md:text-5xl text-white">
                From user interface
                <br />
                <span className="text-zinc-500">
                  to data infrastructure.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-8 text-zinc-400">
                A decoupled multi-tier architectural approach ensures modularity,
                scalability, high maintainability, and clean boundaries between presentation,
                business logic, and persistent storage.
              </p>
            </div>

            {/* Architecture visual */}
            <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-6 sm:p-8 space-y-2">

              <ArchitectureLayer
                icon={<Code2 size={18} className="text-violet-400" />}
                title="Frontend Layer"
                description={project.architecture.frontend}
              />

              <div className="ml-5 h-6 border-l border-dashed border-zinc-700" />

              <ArchitectureLayer
                icon={<Server size={18} className="text-violet-400" />}
                title="Backend & Services"
                description={project.architecture.backend}
              />

              <div className="ml-5 h-6 border-l border-dashed border-zinc-700" />

              <ArchitectureLayer
                icon={<Database size={18} className="text-violet-400" />}
                title="Persistence & Data"
                description={project.architecture.database}
              />

              <div className="ml-5 h-6 border-l border-dashed border-zinc-700" />

              <ArchitectureLayer
                icon={<Layers3 size={18} className="text-violet-400" />}
                title="Deployment & Workflow"
                description={project.architecture.devops}
              />

            </div>

          </div>

        </div>
      </section>

      {/* Next project */}
      <section className="section border-t border-zinc-900">
        <div className="container">

          <div className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Continue exploring
          </div>

          <NextProject currentSlug={project.slug} />

        </div>
      </section>

      {/* Case Study Footer */}
      <footer className="border-t border-zinc-900 py-10 text-center font-mono text-xs text-zinc-600">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/#work" className="hover:text-white transition-colors">
            ← Return to Portfolio Home
          </Link>
          <span>© {new Date().getFullYear()} Anas Mouradi</span>
        </div>
      </footer>

    </main>
  );
}

function ArchitectureLayer({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-zinc-800/90 bg-[#151515] p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-[#111111] text-zinc-400 mt-0.5">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function NextProject({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentSlug
  );

  const nextProject =
    projects[(currentIndex + 1) % projects.length];

  return (
    <Link
      href={`/projects/${nextProject.slug}`}
      className="
        group block rounded-2xl border border-zinc-800
        bg-[#111111] p-8 transition-all duration-500
        hover:border-zinc-600 hover:bg-[#141414]
        md:p-12
      "
    >
      <div className="flex items-end justify-between gap-8">

        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-400">
            Next project case study
          </span>

          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl group-hover:text-violet-200 transition-colors">
            {nextProject.title}
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500">
            {nextProject.description}
          </p>
        </div>

        <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-zinc-800 md:flex">
          <ArrowUpRight
            size={18}
            className="text-zinc-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400"
          />
        </div>

      </div>
    </Link>
  );
}
