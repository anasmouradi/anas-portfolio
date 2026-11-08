import { ArrowUpRight, Download, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section border-b border-[#1d293d] bg-[#020618]">
      <div className="container">

        {/* Section header */}
        <div className="technical-label mb-8">
          01 — About &amp; Engineering Profile
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-start">

          {/* Main content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-[-1.2px] text-white leading-tight">
              Software engineering <br />
              <span className="text-[#00dc82]">built for performance.</span>
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-[#90a1b9] max-w-2xl">
              <p>
                I am <strong className="text-white">Anas Mouradi</strong>, an Ingénieur d&apos;État in Software Engineering
                and Full-Stack Developer based in Casablanca, Morocco.
              </p>

              <p>
                My expertise spans the entire software lifecycle: from architecting low-latency backend
                microservices (Java, Spring Boot, Node.js, PHP/Laravel) to designing responsive and intuitive
                interfaces (React, Next.js, Angular, Tailwind CSS), database modeling, and automated computer vision pipelines.
              </p>

              <p>
                Whether building centralized fleet management systems (MDM), automated OCR pipelines,
                or e-commerce applications, I emphasize clean architecture, strict type safety, and maintainable systems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="btn-nuxt-signal text-sm"
              >
                <span>Let&apos;s work together</span>
                <ArrowUpRight size={15} className="ml-2 stroke-[2.5]" />
              </a>

              <a
                href="/cv/Anas-Mouradi-CV.pdf"
                download
                className="btn-dark-outline text-sm"
              >
                <Download size={14} className="mr-2 text-[#00dc82]" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Profile information — Midnight Panel */}
          <div>
            <div className="rounded-[8px] border border-[#1d293d] bg-[#080e21] overflow-hidden">

              <div className="border-b border-[#1d293d] bg-[#0f172b] px-6 py-4 flex items-center justify-between">
                <span className="font-mono-code text-xs uppercase tracking-wider text-[#00dc82] font-semibold">
                  credentials.json
                </span>
                <span className="flex h-2 w-2 rounded-full bg-[#00dc82]" />
              </div>

              <div className="divide-y divide-[#1d293d]">

                <InfoRow
                  label="Role"
                  value="Software Engineer — Full Stack"
                />

                <InfoRow
                  label="Degree"
                  value="Diplôme d'Ingénieur d'État en Génie Logiciel"
                />

                <InfoRow
                  label="Institution"
                  value="ESTEM, Casablanca (2021 – 2026)"
                />

                <InfoRow
                  label="Location"
                  value="Casablanca, Morocco (Open to Remote)"
                />

                <InfoRow
                  label="Email"
                  value="mouradianas90@gmail.com"
                />

                <InfoRow
                  label="Phone"
                  value="+212 659157983"
                />

                <InfoRow
                  label="Languages"
                  value="Arabe (Maternelle) / Français / Anglais"
                />

                <InfoRow
                  label="Status"
                  value="Available for Full-Time / Contract"
                  highlight
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
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-6 px-6 py-4">
      <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#90a1b9] shrink-0">
        {label}
      </span>

      <span
        className={`text-right text-xs sm:text-sm font-medium ${
          highlight ? "text-[#00dc82] font-semibold" : "text-[#e2e8f0]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
