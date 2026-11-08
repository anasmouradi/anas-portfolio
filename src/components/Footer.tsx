"use client";

import { ArrowUp, Github, Linkedin, Terminal } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#1d293d] bg-[#020618] py-12">
      <div className="container">
        
        {/* Main Footer Row */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-[6px] bg-[#080e21] border border-[#1d293d] flex items-center justify-center text-[#00dc82]">
              <Terminal size={14} className="stroke-[2.5]" />
            </div>
            <div>
              <span className="font-semibold text-sm tracking-tight text-white block">
                ANAS<span className="text-[#00dc82]">.</span>MOURADI
              </span>
              <span className="text-xs text-[#90a1b9] font-mono-code">
                Full-Stack Software Engineer
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#90a1b9]">
            <a href="#about" className="hover:text-[#00dc82] transition-colors">
              About
            </a>
            <a href="#toolbox" className="hover:text-[#00dc82] transition-colors">
              Toolbox
            </a>
            <a href="#work" className="hover:text-[#00dc82] transition-colors">
              Selected Work
            </a>
            <a href="#experience" className="hover:text-[#00dc82] transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-[#00dc82] transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/anasmouradi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#1d293d] bg-[#080e21] text-[#90a1b9] hover:border-[#00dc82] hover:text-[#00dc82] transition-colors"
            >
              <Github size={14} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#1d293d] bg-[#080e21] text-[#90a1b9] hover:border-[#00dc82] hover:text-[#00dc82] transition-colors"
            >
              <Linkedin size={14} />
            </a>

            <button
              onClick={scrollToTop}
              className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#1d293d] bg-[#080e21] text-[#90a1b9] hover:border-[#00dc82] hover:text-[#00dc82] transition-colors cursor-pointer"
              title="Return to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        {/* Sub-footer copyright */}
        <div className="mt-8 pt-6 border-t border-[#1d293d] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-[11px] text-[#90a1b9]">
          <p>
            © {new Date().getFullYear()} Anas Mouradi. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00dc82]" />
            <span>Nuxt Terminal Dark Theme · Next.js &amp; Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
