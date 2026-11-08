"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <div className="technical-label mb-6">
              03 — Selected Work
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              Things I&apos;ve
              <br />
              <span className="text-zinc-500">built.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-500 md:text-right">
            A selection of projects focused on solving real problems through
            modern software architecture, clean interfaces and reliable
            technology.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block"
      >
        <article
          className={`
            relative overflow-hidden rounded-2xl border border-zinc-800
            bg-[#111111] transition-all duration-500
            hover:border-zinc-600 hover:bg-[#141414]
            ${project.featured ? "min-h-[620px]" : "min-h-[480px]"}
          `}
        >

          {/* Background grid */}
          <div className="absolute inset-0 opacity-[0.035]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Purple glow */}
          <div
            className="
              absolute -right-40 -top-40
              h-96 w-96 rounded-full
              bg-violet-600/10 blur-[120px]
              transition-all duration-700
              group-hover:bg-violet-600/20
            "
          />

          <div className="relative z-10 flex h-full min-h-inherit flex-col p-7 md:p-10 lg:p-12">

            {/* Top */}
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-zinc-600">
                  {project.number}
                </span>

                <span className="h-px w-8 bg-zinc-700" />

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  {project.category}
                </span>
              </div>

              <div
                className="
                  flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-full border border-zinc-800
                  transition-all duration-300
                  group-hover:border-violet-500/50
                  group-hover:bg-violet-500/10
                "
              >
                <ArrowUpRight
                  size={18}
                  className="
                    text-zinc-500 transition-all duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-violet-400
                  "
                />
              </div>
            </div>

            {/* Main */}
            <div className="mt-auto grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">

              {/* Title + description */}
              <div>
                <h3
                  className="
                    max-w-3xl
                    text-4xl font-semibold tracking-[-0.04em]
                    text-white
                    transition-colors duration-300
                    group-hover:text-violet-100
                    md:text-6xl
                  "
                >
                  {project.title}
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full border border-zinc-800
                        bg-zinc-900/50 px-3 py-1.5
                        font-mono text-[10px]
                        uppercase tracking-wider
                        text-zinc-500
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="hidden lg:block">
                <div className="border-l border-zinc-800 pl-8">
                  <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                    Key capabilities
                  </p>

                  <div className="space-y-3">
                    {project.features.slice(0, 4).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-xs text-zinc-500"
                      >
                        <span className="h-1 w-1 rounded-full bg-violet-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom */}
            <div className="mt-10 flex items-center justify-between border-t border-zinc-800 pt-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                View case study
              </span>

              <ExternalLink
                size={14}
                className="text-zinc-600 transition-colors group-hover:text-violet-400"
              />
            </div>

          </div>
        </article>
      </Link>
    </motion.div>
  );
}