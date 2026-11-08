import { ArrowUpRight, Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section border-t border-zinc-900">
      <div className="container">

        {/* Section header */}
        <div className="technical-label">
          01 — About
        </div>

        <div className="mt-12 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Main content */}
          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl text-white">
              I build software
              <br />
              <span className="text-zinc-500">
                with purpose.
              </span>
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-zinc-400">
              <p>
                I&apos;m Anas Mouradi, a Software Engineer and Full-Stack Developer
                focused on building modern web applications, scalable architectures and digital solutions.
              </p>

              <p>
                My experience spans the full development lifecycle — from backend
                APIs (Java, Spring Boot, Node.js) to responsive user interfaces (React, Next.js),
                databases, computer vision pipelines and cloud deployment.
              </p>

              <p>
                I enjoy turning complex business requirements into simple, reliable
                and maintainable software products.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="group inline-flex items-center border-b border-zinc-700 pb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-300 transition-colors hover:border-violet-500 hover:text-white"
              >
                Let&apos;s work together
                <ArrowUpRight
                  size={14}
                  className="ml-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="/cv/Anas-Mouradi-CV.pdf"
                download
                className="group inline-flex items-center border-b border-zinc-700 pb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-300 transition-colors hover:border-violet-500 hover:text-white"
              >
                Download CV (PDF)
                <Download
                  size={14}
                  className="ml-2 transition-transform group-hover:translate-y-0.5 text-violet-400"
                />
              </a>
            </div>
          </div>

          {/* Profile information */}
          <div className="lg:pt-2">
            <div className="border border-zinc-800 bg-zinc-950/50">

              <div className="border-b border-zinc-800 px-6 py-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
                  Profile &amp; Credentials
                </span>
              </div>

              <div className="divide-y divide-zinc-800">

                <InfoRow
                  label="Role"
                  value="Software Engineer — Full Stack"
                />

                <InfoRow
                  label="Degree"
                  value="Ingénieur d'État en Génie Logiciel"
                />

                <InfoRow
                  label="School"
                  value="ESTEM, Casablanca"
                />

                <InfoRow
                  label="Location"
                  value="Casablanca, Morocco"
                />

                <InfoRow
                  label="Languages"
                  value="Arabe / Français / Anglais"
                />

                <InfoRow
                  label="Status"
                  value="Available for Opportunities"
                />

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-6 px-6 py-5">
      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-600">
        {label}
      </span>

      <span className="text-right text-sm text-zinc-300">
        {value}
      </span>
    </div>
  );
}
