"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, Building2 } from "lucide-react";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-zinc-900">
      <div className="container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <div className="technical-label mb-6">
              04 — Experience
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              Work &amp;
              <br />
              <span className="text-zinc-500">experience.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-500 md:text-right">
            Practical industry engineering track record across enterprise solutions,
            document automation systems and web application development.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-800 ml-3 md:ml-6 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Glowing Node Dot */}
              <div
                className="
                  absolute -left-[31px] md:-left-[47px] top-6
                  h-4 w-4 rounded-full
                  border-2 border-zinc-900 bg-zinc-700
                  group-hover:border-violet-500 group-hover:bg-violet-600
                  group-hover:shadow-[0_0_16px_rgba(124,58,237,0.8)]
                  transition-all duration-300
                "
              />

              {/* Experience Card */}
              <div
                className={`
                  relative overflow-hidden rounded-2xl border border-zinc-800
                  bg-[#111111] p-6 md:p-8 transition-all duration-500
                  hover:border-zinc-700 hover:bg-[#131313]
                  ${exp.featured ? "shadow-[0_0_40px_rgba(124,58,237,0.06)]" : ""}
                `}
              >
                {/* Subtle purple hover glow */}
                <div
                  className="
                    absolute -right-32 -top-32 h-64 w-64 rounded-full
                    bg-violet-600/5 blur-[90px]
                    transition-all duration-700 group-hover:bg-violet-600/15
                    pointer-events-none
                  "
                />

                {/* Top metadata row */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 font-mono text-xs font-semibold text-white">
                      <Building2 className="w-3.5 h-3.5 text-violet-400" />
                      {exp.company}
                    </span>

                    <span className="font-mono text-xs text-zinc-500">
                      {exp.type}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role title */}
                <div className="relative z-10 pt-5">
                  <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                    {exp.role}
                  </h3>
                </div>

                {/* Bullet points of description */}
                <ul className="relative z-10 mt-5 space-y-3">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-400">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used */}
                <div className="relative z-10 mt-6 pt-5 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mr-2">
                    Technologies:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-zinc-800 bg-zinc-900/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400 group-hover:border-zinc-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
