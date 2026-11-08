"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, ArrowUpRight, Github, Linkedin, Copy, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "error") setStatus("idle");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mouradianas90@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulation d'envoi immédiat et propre
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section border-t border-zinc-900">
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
              05 — Contact
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              Let&apos;s work
              <br />
              <span className="text-zinc-500">together.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-500 md:text-right">
            Have a project in mind, an engineering opportunity, or simply want
            to connect? Get in touch via the form or through direct email.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-7 md:p-10">
              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-violet-600/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Message sent!</h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. I will review your message and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 inline-flex items-center gap-2 border border-zinc-700 px-5 py-2 font-mono text-xs uppercase tracking-wider text-zinc-300 hover:border-violet-500 hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && (
                    <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                      Please complete all required fields (Name, Email, Message).
                    </div>
                  )}

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                        Name <span className="text-violet-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        required
                        className="w-full rounded-lg border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-violet-500 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                        Email <span className="text-violet-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        required
                        className="w-full rounded-lg border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-violet-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry / Full-time role"
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-violet-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                      Message <span className="text-violet-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline or technical goals..."
                      required
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-violet-500 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full sm:w-auto cursor-pointer disabled:opacity-50"
                  >
                    <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                    <Send className="ml-2 w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column: Direct Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-7 md:p-8 space-y-6">
              <div className="border-b border-zinc-800 pb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                  Direct Channel
                </span>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Get in touch
                </h3>
              </div>

              {/* Direct email row */}
              <div className="space-y-2">
                <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                  Email
                </span>
                <div className="flex items-center justify-between gap-3 p-3.5 rounded-lg border border-zinc-800 bg-zinc-950/40">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                    <a
                      href="mailto:mouradianas90@gmail.com"
                      className="text-sm font-medium text-white hover:text-violet-400 transition-colors truncate"
                    >
                      mouradianas90@gmail.com
                    </a>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 pt-2">
                <div className="p-2 rounded-lg border border-zinc-800 bg-zinc-950/40 text-violet-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-sm text-zinc-300 font-medium">
                    Casablanca, Morocco — Open to Remote
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 pt-1">
                <div className="p-2 rounded-lg border border-zinc-800 bg-zinc-950/40 text-violet-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block">
                    Phone
                  </span>
                  <a
                    href="tel:+212659157983"
                    className="text-sm text-zinc-300 font-medium hover:text-white transition-colors"
                  >
                    +212 659157983
                  </a>
                </div>
              </div>

              {/* Availability badge */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs text-zinc-400">
                    Status: Available
                  </span>
                </div>
                <span className="font-mono text-[11px] text-violet-400">
                  Full-Time / Contract
                </span>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-6 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500 block">
                  Network
                </span>
                <span className="text-sm font-medium text-white">
                  Social Profiles
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/anasmouradi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-violet-500 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-violet-500 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
