"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Terminal, CheckCircle2, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const commandText = "npx anas-mouradi --profile";

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(commandText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#020618] border-b border-[#1d293d]"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Headline & Direct Actions */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Release Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#1d293d] bg-[#080e21] px-3.5 py-1 text-xs font-semibold text-[#00dc82]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00dc82] animate-pulse" />
              <span>Full-Stack Software Engineer · Casablanca, Morocco</span>
            </motion.div>

            {/* Display Headline — 72px / 700 with -1.8px tracking */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-[-1.8px] leading-[1.04]"
            >
              Building scalable <br />
              web systems with <br />
              <span className="text-[#00dc82]">engineered precision.</span>
            </motion.h1>

            {/* Body Copy — Muted Fog */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-base sm:text-lg leading-relaxed text-[#90a1b9]"
            >
              I am <strong className="text-white">Anas Mouradi</strong>, an Ingénieur d&apos;État in Software Engineering.
              I architect high-performance backends in Java &amp; Spring Boot, reactive interfaces in React &amp; Next.js,
              and automated computer vision workflows.
            </motion.p>

            {/* Actions Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#work"
                className="btn-nuxt-signal"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight size={16} className="ml-2 stroke-[2.5]" />
              </a>

              <a
                href="/cv/Anas-Mouradi-CV.pdf"
                download
                className="btn-dark-outline"
              >
                <Download size={15} className="mr-2" />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Terminal Command Snippet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2"
            >
              <div className="inline-flex items-center justify-between gap-4 rounded-[6px] border border-[#1d293d] bg-[#020618] px-3.5 py-2 font-mono-code text-xs text-[#e2e8f0]">
                <div className="flex items-center gap-2">
                  <span className="text-[#00dc82]">$</span>
                  <span>{commandText}</span>
                </div>
                <button
                  onClick={handleCopyCommand}
                  className="text-[#90a1b9] hover:text-white transition-colors cursor-pointer"
                  title="Copy command"
                >
                  {copied ? <Check size={14} className="text-[#00dc82]" /> : <Copy size={14} />}
                </button>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Code Demonstration Panel (Midnight Panel) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-[8px] border border-[#1d293d] bg-[#080e21] overflow-hidden shadow-2xl">
              
              {/* Editor Tab Rail */}
              <div className="flex items-center justify-between border-b border-[#1d293d] bg-[#020618] px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1d293d]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1d293d]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1d293d]" />
                </div>

                <div className="flex items-center gap-1 font-mono-code text-[11px]">
                  <span className="px-2.5 py-1 rounded-[6px] bg-[#0f172b] text-white border border-[#1d293d]">
                    engineer.profile.ts
                  </span>
                  <span className="px-2.5 py-1 text-[#90a1b9]">
                    stack.config.json
                  </span>
                </div>

                <span className="text-[10px] font-mono-code text-[#00dc82] bg-[#00dc82]/10 border border-[#00dc82]/30 px-2 py-0.5 rounded">
                  LIVE
                </span>
              </div>

              {/* Code Snippet Body */}
              <div className="p-5 font-mono-code text-xs leading-6 text-[#90a1b9] overflow-x-auto space-y-1">
                <div>
                  <span className="text-[#314158]">{"// Software Engineer Profile"}</span>
                </div>
                <div>
                  <span className="text-[#00dc82]">export const</span>{" "}
                  <span className="text-white">engineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-[#e2e8f0]">name:</span>{" "}
                  <span className="text-[#42b883]">&quot;Anas Mouradi&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#e2e8f0]">degree:</span>{" "}
                  <span className="text-[#42b883]">&quot;Ingénieur d&apos;État en Génie Logiciel&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#e2e8f0]">school:</span>{" "}
                  <span className="text-[#42b883]">&quot;ESTEM Casablanca&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#e2e8f0]">focus:</span> [
                  <span className="text-[#42b883]">&quot;Java / Spring Boot&quot;</span>,{" "}
                  <span className="text-[#42b883]">&quot;React / Next.js&quot;</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-[#e2e8f0]">status:</span>{" "}
                  <span className="text-[#00dc82]">&quot;AVAILABLE_FOR_HIRE&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#e2e8f0]">location:</span>{" "}
                  <span className="text-[#42b883]">&quot;Casablanca, Morocco&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#e2e8f0]">contact:</span> &#123;
                </div>
                <div className="pl-8">
                  <span className="text-[#e2e8f0]">email:</span>{" "}
                  <span className="text-[#42b883]">&quot;mouradianas90@gmail.com&quot;</span>,
                </div>
                <div className="pl-8">
                  <span className="text-[#e2e8f0]">phone:</span>{" "}
                  <span className="text-[#42b883]">&quot;+212 659157983&quot;</span>
                </div>
                <div className="pl-4">&#125;</div>
                <div>&#125;;</div>
              </div>

              {/* Panel Status Footer */}
              <div className="border-t border-[#1d293d] bg-[#020618] px-4 py-2 flex items-center justify-between text-[11px] font-mono-code text-[#90a1b9]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={12} className="text-[#00dc82]" />
                  <span>All tests passing</span>
                </div>
                <span>UTF-8 · TypeScript</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
