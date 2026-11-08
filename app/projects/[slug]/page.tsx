import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers3,
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
      <nav className="border-b border-zinc-900">
        <div className="container flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>

          <span className="font-mono text-xs text-zinc-600">
            {project.number} / PROJECT
          </span>
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

        <div className="container relative py-24 md:py-36">

          <div className="technical-label mb-8">
            {project.category}
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-8xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
            {project.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full border border-zinc-800
                  bg-zinc-900/40 px-4 py-2
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

      {/* Overview */}
      <section className="section">
        <div className="container">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <div className="technical-label mb-6">
                01 — Overview
              </div>

              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                Building a solution
                <br />
                <span className="text-zinc-500">
                  around a real problem.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-8 text-zinc-500 md:text-base">
              <p>
                This project focused on building a complete software solution
                around the requirements of the product and its users.
              </p>

              <p>
                The application combines backend services, frontend
                interfaces, data management and API communication into a
                unified platform.
              </p>

              <p>
                The implementation was developed with a focus on maintainable
                architecture, clear separation of responsibilities and a
                practical user experience.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Key capabilities */}
      <section className="border-y border-zinc-900 bg-[#0D0D0D]">
        <div className="container py-24">

          <div className="technical-label mb-12">
            02 — Key Capabilities
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 md:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <div
                key={feature}
                className="bg-[#111111] p-7 transition-colors hover:bg-[#151515]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <CheckCircle2
                    size={16}
                    className="text-zinc-700"
                  />
                </div>

                <p className="text-sm font-medium text-zinc-300">
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
            03 — Architecture
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                From interface
                <br />
                <span className="text-zinc-500">
                  to infrastructure.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-8 text-zinc-500">
                The project brings together multiple layers of the
                application stack, from the user interface and backend
                services to APIs and persistent data.
              </p>
            </div>

            {/* Architecture visual */}
            <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-8">

              <ArchitectureLayer
                icon={<Code2 size={18} />}
                title="Frontend"
                description="User interface and application experience"
              />

              <div className="ml-5 h-8 border-l border-dashed border-zinc-700" />

              <ArchitectureLayer
                icon={<ArrowUpRight size={18} />}
                title="API / Services"
                description="Application logic and communication"
              />

              <div className="ml-5 h-8 border-l border-dashed border-zinc-700" />

              <ArchitectureLayer
                icon={<Layers3 size={18} />}
                title="Data Layer"
                description="Persistent application data"
              />

            </div>

          </div>

        </div>
      </section>

      {/* Technologies */}
      <section className="border-y border-zinc-900 bg-[#0D0D0D]">
        <div className="container py-24">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <div className="technical-label mb-6">
                04 — Technologies
              </div>

              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                Tools used to
                <br />
                <span className="text-zinc-500">
                  bring it to life.
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {project.technologies.map((technology) => (
                <div
                  key={technology}
                  className="
                    rounded-xl border border-zinc-800
                    bg-[#111111] px-5 py-4
                    text-sm text-zinc-400
                    transition-all duration-300
                    hover:border-violet-500/40
                    hover:text-white
                  "
                >
                  {technology}
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Next project */}
      <section className="section">
        <div className="container">

          <div className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            Continue exploring
          </div>

          <NextProject currentSlug={project.slug} />

        </div>
      </section>

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
    <div className="flex items-center gap-5 rounded-xl border border-zinc-800 bg-[#151515] p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-[#111111] text-zinc-500">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-medium text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs text-zinc-600">
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
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            Next project
          </span>

          <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {nextProject.title}
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600">
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