"use client";

import { useState } from "react";
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
    <section id="contact" className="section border-b border-[#1d293d] bg-[#020618]">
      <div className="container">

        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="technical-label mb-6">
              05 — Contact &amp; Engagement
            </div>

            <h2 className="max-w-3xl text-3xl sm:text-5xl font-bold tracking-[-1.2px] text-white">
              Initiate technical <br />
              <span className="text-[#00dc82]">collaboration.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#90a1b9] md:text-right">
            Available for full-time engineering positions, consulting, or technical advisory.
            Reach out through the direct channel or submit a project brief.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid gap-10 lg:grid-cols-12 items-start">

          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[8px] border border-[#1d293d] bg-[#080e21] p-7 sm:p-9">
              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-[6px] bg-[#00dc82]/10 border border-[#00dc82]/30 flex items-center justify-center text-[#00dc82] mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Transmission received</h3>
                  <p className="text-sm text-[#90a1b9] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. I have received your message and will review it promptly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 btn-dark-outline text-xs"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === "error" && (
                    <div className="p-3 rounded-[6px] bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono-code">
                      Error: Please provide your name, valid email, and project message.
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="block font-mono-code text-[11px] uppercase tracking-wider text-[#90a1b9]">
                        Full Name <span className="text-[#00dc82]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        required
                        className="w-full rounded-[6px] border border-[#1d293d] bg-[#020618] px-3.5 py-2.5 text-sm text-[#e2e8f0] placeholder-[#314158] focus:border-[#00dc82] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-mono-code text-[11px] uppercase tracking-wider text-[#90a1b9]">
                        Email Address <span className="text-[#00dc82]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        required
                        className="w-full rounded-[6px] border border-[#1d293d] bg-[#020618] px-3.5 py-2.5 text-sm text-[#e2e8f0] placeholder-[#314158] focus:border-[#00dc82] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono-code text-[11px] uppercase tracking-wider text-[#90a1b9]">
                      Subject / Role Title
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Software Engineer Role / Project Consultation"
                      className="w-full rounded-[6px] border border-[#1d293d] bg-[#020618] px-3.5 py-2.5 text-sm text-[#e2e8f0] placeholder-[#314158] focus:border-[#00dc82] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono-code text-[11px] uppercase tracking-wider text-[#90a1b9]">
                      Message Body <span className="text-[#00dc82]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Discuss technical requirements, team fit, or architecture scope..."
                      required
                      className="w-full rounded-[6px] border border-[#1d293d] bg-[#020618] px-3.5 py-2.5 text-sm text-[#e2e8f0] placeholder-[#314158] focus:border-[#00dc82] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-nuxt-signal w-full sm:w-auto text-sm cursor-pointer disabled:opacity-50"
                  >
                    <span>{status === "loading" ? "Dispatching..." : "Send Message"}</span>
                    <Send size={14} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-[8px] border border-[#1d293d] bg-[#080e21] p-7 space-y-6">
              
              <div className="border-b border-[#1d293d] pb-4 flex items-center justify-between">
                <div>
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#00dc82] font-semibold">
                    Direct Channels
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Contact Coordinates
                  </h3>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#00dc82] animate-ping" />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <span className="font-mono-code text-[11px] text-[#90a1b9] uppercase tracking-wider">
                  Primary Email
                </span>
                <div className="flex items-center justify-between gap-3 p-3 rounded-[6px] border border-[#1d293d] bg-[#020618]">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail size={15} className="text-[#00dc82] shrink-0" />
                    <a
                      href="mailto:mouradianas90@gmail.com"
                      className="text-xs sm:text-sm font-medium text-white hover:text-[#00dc82] transition-colors truncate font-mono-code"
                    >
                      mouradianas90@gmail.com
                    </a>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-1 rounded text-[#90a1b9] hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy email"
                  >
                    {copied ? <Check size={14} className="text-[#00dc82]" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <span className="font-mono-code text-[11px] text-[#90a1b9] uppercase tracking-wider">
                  Phone / WhatsApp
                </span>
                <div className="flex items-center justify-between gap-3 p-3 rounded-[6px] border border-[#1d293d] bg-[#020618]">
                  <div className="flex items-center gap-2.5">
                    <Phone size={15} className="text-[#00dc82] shrink-0" />
                    <a
                      href="tel:+212659157983"
                      className="text-xs sm:text-sm font-medium text-white hover:text-[#00dc82] transition-colors font-mono-code"
                    >
                      +212 659157983
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 pt-2">
                <div className="p-2 rounded-[6px] border border-[#1d293d] bg-[#020618] text-[#00dc82]">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="font-mono-code text-[11px] text-[#90a1b9] uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm text-[#e2e8f0] font-medium">
                    Casablanca, Morocco — Open to Remote Worldwide
                  </span>
                </div>
              </div>

              {/* Availability badge */}
              <div className="pt-4 border-t border-[#1d293d] flex items-center justify-between font-mono-code text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00dc82]" />
                  <span className="text-[#e2e8f0]">Open to Opportunities</span>
                </div>
                <span className="text-[#00dc82] font-semibold">Immediate</span>
              </div>

            </div>

            {/* Social profiles */}
            <div className="rounded-[8px] border border-[#1d293d] bg-[#080e21] p-5 flex items-center justify-between">
              <div>
                <span className="font-mono-code text-[10px] uppercase tracking-wider text-[#90a1b9] block">
                  Developer Profiles
                </span>
                <span className="text-xs font-semibold text-white">
                  GitHub &amp; Professional Network
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/anasmouradi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#1d293d] bg-[#020618] text-[#90a1b9] hover:border-[#00dc82] hover:text-[#00dc82] transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#1d293d] bg-[#020618] text-[#90a1b9] hover:border-[#00dc82] hover:text-[#00dc82] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
