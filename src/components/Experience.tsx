"use client";

import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section border-b border-[#1d293d] bg-[#020618]">
      <div className="container">

        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="technical-label mb-6">
              04 — Experience &amp; Engineering Stages
            </div>

            <h2 className="max-w-3xl text-3xl sm:text-5xl font-bold tracking-[-1.2px] text-white">
              Professional experience &amp; <br />
              <span className="text-[#00dc82]">production deliveries.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#90a1b9] md:text-right">
            Verified engineering track record in enterprise systems,
            computer vision pipelines, and full-stack web platforms.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-[#1d293d] ml-3 md:ml-6 pl-6 md:pl-10 space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative group"
            >
              {/* Timeline Terminal Node */}
              <div
                className="
                  absolute -left-[31px] md:-left-[47px] top-6
                  h-3.5 w-3.5 rounded-full
                  border-2 border-[#020618] bg-[#1d293d]
                  group-hover:border-[#00dc82] group-hover:bg-[#00dc82]
                  transition-all duration-200
                "
              />

              {/* Experience Card — Midnight Panel with 1px Steel Outline */}
              <div className="rounded-[8px] border border-[#1d293d] bg-[#080e21] p-6 sm:p-8 transition-all duration-200 hover:border-[#314158] hover:bg-[#0c132c]">
                
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#1d293d]">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#0f172b] border border-[#1d293d] font-mono-code text-xs font-semibold text-white">
                      <Building2 size={13} className="text-[#00dc82]" />
                      {exp.company}
                    </span>

                    <span className="font-mono-code text-xs text-[#90a1b9]">
                      {exp.type}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 font-mono-code text-xs text-[#90a1b9]">
                    <Calendar size={13} className="text-[#00dc82]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-5">
                  {exp.role}
                </h3>

                {/* Description bullet points */}
                <ul className="mt-4 space-y-2.5">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#90a1b9]">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00dc82] shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="mt-6 pt-5 border-t border-[#1d293d] flex flex-wrap items-center gap-2">
                  <span className="font-mono-code text-[11px] text-[#314158] font-bold mr-1">
                    STACK:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-[4px] border border-[#1d293d] bg-[#020618] px-2.5 py-1 font-mono-code text-[10px] text-[#e2e8f0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
