"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-background opacity-70" />

      {/* Main glow */}
      <div className="accent-glow left-[45%] top-[20%] -translate-x-1/2" />

      {/* Secondary glow */}
      <div className="accent-glow -right-64 bottom-[-300px] opacity-40" />

      <div className="container relative z-10 pt-32 pb-24">
        <div className="max-w-6xl">

          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="technical-label mb-8"
          >
            Software Engineer / Full Stack Developer
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-bold leading-[0.86] tracking-[-0.065em]"
          >
            <span className="block text-white">
              I BUILD DIGITAL
            </span>

            <span className="block text-zinc-500">
              PRODUCTS THAT
            </span>

            <span className="block text-gradient">
              MAKE AN IMPACT.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="mt-10 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg"
          >
            Full-Stack Engineer focused on building modern web applications,
            scalable APIs and digital solutions using Java, Spring Boot,
            React and modern technologies.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="btn-primary group"
            >
              View my work

              <ArrowUpRight
                size={16}
                className="ml-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="/cv/Anas-Mouradi-CV.pdf"
              download
              className="btn-secondary group"
            >
              Download CV

              <Download
                size={15}
                className="ml-3 transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
            }}
            className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            {[
              "Java",
              "Spring Boot",
              "React",
              "Next.js",
              "Node.js",
              "Docker",
              "PostgreSQL",
            ].map((technology) => (
              <span
                key={technology}
                className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600 transition-colors hover:text-zinc-300"
              >
                {technology}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-zinc-600 md:flex"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.2em]">
          Scroll
        </span>

        <ArrowDown
          size={14}
          className="animate-bounce"
        />
      </motion.a>
    </section>
  );
}