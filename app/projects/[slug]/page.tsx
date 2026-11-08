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
  Github,
  Calendar,
  UserCheck,
  Terminal,
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
    <main className="min-h-screen bg-[#020618] text-[#90a1b9]">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 h-16 border-b border-[#1d293d] bg-[#020618]/90 backdrop-blur-md">
        <div className="container h-full flex items-center justify-between">
          <Link
            href="/#work"
            className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#90a1b9] transition-colors hover:text-[#00dc82]"
          >
            <ArrowLeft size={15} className="text-[#00dc82]" />
            <span>Return to Portfolio</span>
          </Link>

          <div className="flex items-center gap-2 font-mono-code text-xs">
            <span className="text-[#00dc82] font-semibold">{project.number}</span>
            <span className="text-[#314158]">/</span>
            <span className="text-white uppercase tracking-wider">{project.category}</span>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="relative border-b border-[#1d293d] py-16 sm:py-24 bg-[#020618]">
        <div className="container">
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="technical-label">
              Case Study Specification
            </span>

            <span className="font-mono-code text-xs text-[#90a1b9] border border-[#1d293d] bg-[#080e21] px-3 py-1 rounded-[4px]">
              {project.timeline}
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-1.2px] text-white leading-tight">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#90a1b9]">
            {project.description}
          </p>

          {/* Action Row */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={project.githubUrl || "https://github.com/anasmouradi/anas-portfolio"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nuxt-signal text-sm"
            >
              <Github size={15} className="mr-2" />
              <span>Inspect Source Repository</span>
              <ArrowUpRight size={14} className="ml-2 stroke-[2.5]" />
            </a>

            <div className="flex items-center gap-2 font-mono-code text-xs text-[#90a1b9] px-3.5 py-2.5 rounded-[6px] border border-[#1d293d] bg-[#080e21]">
              <UserCheck size={14} className="text-[#00dc82]" />
              <span>Role: {project.role}</span>
            </div>
          </div>

          {/* Technologies Chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-[4px] border border-[#1d293d]
                  bg-[#080e21] px-3 py-1
                  font-mono-code text-[11px]
                  text-[#e2e8f0]
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
        <section className="border-b border-[#1d293d] bg-[#080e21]">
          <div className="container py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="border-l border-[#1d293d] pl-5">
                  <div className="font-bold text-2xl sm:text-4xl text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="font-mono-code text-[11px] text-[#00dc82] mt-1 uppercase tracking-wider font-semibold">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Overview & Engineering Scope */}
      <section className="section border-b border-[#1d293d]">
        <div className="container">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] items-start">

            <div>
              <div className="technical-label mb-5">
                01 — Overview
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Context &amp; <br />
                <span className="text-[#00dc82]">Engineering Scope.</span>
              </h2>
            </div>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-[#90a1b9]">
              {project.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Key capabilities */}
      <section className="section border-b border-[#1d293d] bg-[#080e21]">
        <div className="container">

          <div className="technical-label mb-8">
            02 — Key Capabilities &amp; System Deliverables
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <div
                key={feature}
                className="rounded-[6px] border border-[#1d293d] bg-[#020618] p-6 transition-colors hover:border-[#314158]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono-code text-xs text-[#314158] font-bold">
                    0{index + 1}
                  </span>

                  <CheckCircle2
                    size={16}
                    className="text-[#00dc82]"
                  />
                </div>

                <p className="text-sm font-medium text-[#e2e8f0] leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Architecture layers */}
      <section className="section border-b border-[#1d293d]">
        <div className="container">

          <div className="technical-label mb-8">
            03 — Architecture &amp; System Anatomy
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Decoupled multi-tier <br />
                <span className="text-[#00dc82]">application layers.</span>
              </h2>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#90a1b9] max-w-lg">
                Engineered with strict separation of concerns, resilient communication protocols,
                normalized data schemas, and containerized deployment pipelines.
              </p>
            </div>

            <div className="rounded-[8px] border border-[#1d293d] bg-[#080e21] p-6 sm:p-8 space-y-2">
              <ArchitectureLayer
                icon={<Code2 size={16} className="text-[#00dc82]" />}
                title="Frontend Presentation Layer"
                description={project.architecture.frontend}
              />

              <div className="ml-4 h-5 border-l border-dashed border-[#1d293d]" />

              <ArchitectureLayer
                icon={<Server size={16} className="text-[#00dc82]" />}
                title="Backend Services &amp; APIs"
                description={project.architecture.backend}
              />

              <div className="ml-4 h-5 border-l border-dashed border-[#1d293d]" />

              <ArchitectureLayer
                icon={<Database size={16} className="text-[#00dc82]" />}
                title="Persistence &amp; Relational Store"
                description={project.architecture.database}
              />

              <div className="ml-4 h-5 border-l border-dashed border-[#1d293d]" />

              <ArchitectureLayer
                icon={<Layers3 size={16} className="text-[#00dc82]" />}
                title="Deployment &amp; Workflows"
                description={project.architecture.devops}
              />
            </div>

          </div>

        </div>
      </section>

      {/* Next project */}
      <section className="section border-b border-[#1d293d] bg-[#080e21]">
        <div className="container">

          <div className="mb-6 font-mono-code text-[11px] uppercase tracking-wider text-[#00dc82] font-semibold">
            Next Case Study
          </div>

          <NextProject currentSlug={project.slug} />

        </div>
      </section>

      {/* Case Study Footer */}
      <footer className="py-8 text-center font-mono-code text-xs text-[#90a1b9]">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/#work" className="hover:text-[#00dc82] transition-colors">
            ← Return to Selected Work
          </Link>
          <span>© 2026 Anas Mouradi · Nuxt Style Spec</span>
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
    <div className="flex items-start gap-3.5 rounded-[6px] border border-[#1d293d] bg-[#020618] p-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] border border-[#1d293d] bg-[#080e21] mt-0.5">
        {icon}
      </div>

      <div>
        <h3 className="text-xs sm:text-sm font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs text-[#90a1b9] leading-relaxed">
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
      className="group block rounded-[8px] border border-[#1d293d] bg-[#020618] p-7 transition-all duration-200 hover:border-[#00dc82]"
    >
      <div className="flex items-center justify-between gap-6">
        <div>
          <span className="font-mono-code text-xs text-[#90a1b9] uppercase tracking-wider">
            {nextProject.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#00dc82] transition-colors mt-1">
            {nextProject.title}
          </h3>
          <p className="mt-2 text-sm text-[#90a1b9] max-w-xl">
            {nextProject.description}
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] border border-[#1d293d] bg-[#080e21] text-[#90a1b9] group-hover:border-[#00dc82] group-hover:bg-[#00dc82] group-hover:text-[#0f172b] transition-all">
          <ArrowUpRight size={18} className="stroke-[2.5]" />
        </div>
      </div>
    </Link>
  );
}
