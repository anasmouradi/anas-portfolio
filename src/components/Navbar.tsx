"use client";

import { motion } from "framer-motion";
import { Github, Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Toolbox", href: "#toolbox" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full h-16 bg-[#020618]/90 backdrop-blur-md border-b border-[#1d293d] transition-all">
      <div className="container h-full flex items-center justify-between">
        
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-2.5 font-medium tracking-tight text-white hover:opacity-90 transition-opacity"
        >
          <div className="w-7 h-7 rounded-[6px] bg-[#080e21] border border-[#1d293d] flex items-center justify-center text-[#00dc82]">
            <Terminal size={14} className="stroke-[2.5]" />
          </div>
          <span className="font-semibold text-sm tracking-tight text-white">
            ANAS<span className="text-[#00dc82]">.</span>MOURADI
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-[#90a1b9] hover:text-[#e2e8f0] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Socials */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/anasmouradi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#080e21] border border-[#1d293d] text-[#90a1b9] hover:text-[#e2e8f0] hover:border-[#314158] transition-colors"
          >
            <Github size={15} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[6px] bg-[#00dc82] text-[#0f172b] font-semibold text-xs tracking-wide hover:bg-[#05e98d] transition-colors shadow-sm"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight size={13} className="stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#1d293d] bg-[#080e21] text-[#90a1b9] md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-[#1d293d] bg-[#080e21] px-6 py-6 md:hidden space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-[#90a1b9] hover:text-[#00dc82] transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#1d293d] flex items-center justify-between">
            <a
              href="https://github.com/anasmouradi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-[#90a1b9]"
            >
              <Github size={14} />
              <span>github.com/anasmouradi</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-1.5 rounded-[6px] bg-[#00dc82] text-[#0f172b] font-semibold text-xs"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
