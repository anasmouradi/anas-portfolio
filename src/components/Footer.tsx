"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-900 bg-[#0a0a0a] py-14">
      <div className="container">
        
        {/* Main Footer Row */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          
          {/* Brand info */}
          <div className="space-y-2">
            <a
              href="#top"
              className="font-mono text-base font-semibold tracking-tight text-white"
            >
              ANAS<span className="text-violet-500">.</span>
            </a>
            <p className="text-xs text-zinc-500 max-w-sm">
              Full-Stack Software Engineer specializing in modern scalable web
              applications, Java, Spring Boot and React.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-500">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/anasmouradi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center border border-zinc-800 text-zinc-400 hover:border-violet-500 hover:text-white transition-colors"
            >
              <Github size={15} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center border border-zinc-800 text-zinc-400 hover:border-violet-500 hover:text-white transition-colors"
            >
              <Linkedin size={15} />
            </a>

            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center border border-zinc-800 text-zinc-400 hover:border-violet-500 hover:text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>

        </div>

        {/* Sub-footer copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-600">
          <p>
            © {new Date().getFullYear()} Anas Mouradi. All rights reserved.
          </p>

          <p>
            Designed &amp; Engineered with Next.js &amp; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
