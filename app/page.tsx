import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />

        <section
          id="experience"
          className="section min-h-[500px]"
        >
          <div className="container">
            <div className="technical-label">
              04 — Experience
            </div>

            <h2 className="mt-8 text-4xl font-semibold text-white md:text-6xl">
              Experience
            </h2>
          </div>
        </section>

        <section
          id="contact"
          className="section min-h-[500px]"
        >
          <div className="container">
            <div className="technical-label">
              05 — Contact
            </div>

            <h2 className="mt-8 text-4xl font-semibold text-white md:text-6xl">
              Let&apos;s work together.
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}