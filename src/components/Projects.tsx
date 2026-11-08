"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="section border-b border-[#1d293d] bg-[#020618]">
      <div className="container">

        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="technical-label mb-6">
              03 — Selected Work &amp; Case Studies
            </div>

            <h2 className="max-w-3xl text-3xl sm:text-5xl font-bold tracking-[-1.2px] text-white">
              Engineered solutions &amp; <br />
              <span className="text-[#00dc82]">product platforms.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#90a1b9] md:text-right">
            Featured applications focusing on enterprise fleet administration,
            computer vision OCR pipelines, and high-conversion e-commerce systems.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block rounded-[8px] border border-[#1d293d] bg-[#080e21] p-7 md:p-9 transition-all duration-200 hover:border-[#00dc82] hover:bg-[#0c132c]"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                
                <div className="space-y-4 max-w-3xl">
                  {/* Category & Number badge */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono-code text-xs font-bold text-[#00dc82]">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-mono-code text-[#314158]">/</span>
                    <span className="font-mono-code text-xs text-[#90a1b9] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="hidden sm:inline-block text-xs font-mono-code text-[#314158]">·</span>
                    <span className="hidden sm:inline-block font-mono-code text-xs text-[#90a1b9]">
                      {project.timeline}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#00dc82] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base leading-relaxed text-[#90a1b9]">
                    {project.description}
                  </p>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-[4px] border border-[#1d293d] bg-[#020618] px-2.5 py-1 font-mono-code text-[10px] text-[#e2e8f0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Arrow Action */}
                <div className="flex items-center gap-3 shrink-0 self-start lg:self-center">
                  <span className="hidden lg:inline-block text-xs font-mono-code text-[#90a1b9] group-hover:text-white transition-colors">
                    View Case Study
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-[6px] border border-[#1d293d] bg-[#020618] text-[#90a1b9] group-hover:border-[#00dc82] group-hover:bg-[#00dc82] group-hover:text-[#0f172b] transition-all">
                    <ArrowUpRight size={18} className="stroke-[2.5]" />
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
