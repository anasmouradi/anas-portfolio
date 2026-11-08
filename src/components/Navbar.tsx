"use client";

import { motion } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="container pt-5">
        <nav className="glass flex h-16 items-center justify-between px-5 md:px-6">
          <a
            href="#top"
            className="font-mono text-sm font-semibold tracking-tight"
          >
            ANAS<span className="text-violet-500">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-500 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition-colors hover:text-white"
            >
              <Github size={17} />
            </a>

            <a
              href="#contact"
              className="border border-zinc-700 px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition hover:border-violet-500 hover:bg-violet-500/10"
            >
              {"Let's talk"}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-zinc-400 md:hidden"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="glass mt-2 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-zinc-800 py-4 font-mono text-xs uppercase tracking-widest text-zinc-400 last:border-0 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}