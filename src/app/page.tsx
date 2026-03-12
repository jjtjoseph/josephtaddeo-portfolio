import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/data/projects";
import { experience, education, skills } from "@/data/experience";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-16">
        {/* ═══════════════════════════════════════════════════════════════
                    HERO SECTION
                    Full-height hero with Fraunces display name
                ═══════════════════════════════════════════════════════════════ */}
        <section id="hero" className="min-h-[90vh] flex items-center relative overflow-hidden">
          {/* Subtle radial gradient background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(168,181,196,0.06), transparent)",
            }}
          />

          <div className="container relative">
            <div className="max-w-4xl">
              <p className="text-[var(--color-accent)] text-sm uppercase tracking-[0.2em] mb-8 animate-fade-in section-label">
                Software Engineer
              </p>
              <h1
                className="text-5xl md:text-7xl lg:text-8xl mb-8 animate-fade-in hero-name"
                style={{ animationDelay: "100ms" }}
              >
                Joseph Taddeo
              </h1>
              <p
                className="text-xl md:text-2xl text-[var(--color-text-muted)] leading-relaxed mb-6 max-w-2xl animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                I ship production systems solo — from architecture to deployment to user training.
              </p>
              <p
                className="text-base text-[var(--color-text-subtle)] leading-relaxed mb-16 max-w-2xl animate-fade-in"
                style={{ animationDelay: "250ms" }}
              >
                Sole technical hire at a $2.5M+ luxury e-commerce operation. 75,000+ lines of
                production code. AI-powered automation. Internal CRM. Proprietary pricing intelligence.
                Brooklyn, NY.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-in"
                style={{ animationDelay: "350ms" }}
              >
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-full font-medium hover:bg-[var(--color-accent)] transition-all duration-300 hover:scale-105"
                  style={{ color: "#0a0a0a" }}
                >
                  View Projects
                </Link>
                <a
                  href="https://luxeswap.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-full font-medium hover:bg-[var(--color-accent-muted)] transition-all duration-300"
                >
                  See Live Work — luxeswap.com ↗
                </a>
                <a
                  href="/Joseph_Taddeo_Resume.pdf"
                  download
                  className="inline-flex items-center justify-center px-8 py-4 border border-[var(--color-border)] rounded-full font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Gradient divider */}
        <div className="accent-line" />

        {/* ═══════════════════════════════════════════════════════════════
                    ABOUT SECTION
                    Professional identity — no personal background
                ═══════════════════════════════════════════════════════════════ */}
        <section id="about" className="py-32">
          <div className="container">
            {/* Section Header */}
            <div className="flex items-baseline gap-4 mb-16">
              <span className="text-6xl md:text-8xl font-light text-[var(--color-bg-subtle)]">01</span>
              <h2 className="text-3xl md:text-4xl font-light">About</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column - Photo + Summary */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* Headshot */}
                <div className="shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-[var(--color-border)] relative">
                    <Image
                      src="/projects/HeadShot.JPG"
                      alt="Joseph Taddeo"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                {/* Summary */}
                <div>
                  <p className="text-xl md:text-2xl text-[var(--color-text-muted)] leading-relaxed mb-6">
                    Full-stack software engineer who builds and owns production
                    systems end to end.
                  </p>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    Sole technical hire at a $2.5M+ luxury e-commerce operation.
                    Designed, built, and deployed a 75,000+ line production platform,
                    AI-powered automation suite, internal CRM with 17 API endpoints,
                    and proprietary pricing intelligence system — all independently.
                    Systems built during tenure contributed to $350K+ year-over-year
                    revenue growth.
                  </p>
                </div>
              </div>

              {/* Right Column - Education */}
              <div className="space-y-12">
                {/* Education */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-4 section-label">
                    Education
                  </h3>
                  <div className="p-6 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl">
                    <h4 className="font-medium text-lg">{education.institution}</h4>
                    <p className="text-[var(--color-text-muted)]">{education.degree}</p>
                    <p className="text-sm text-[var(--color-text-subtle)] mt-2">
                      {education.period}
                    </p>
                    {education.capstone && (
                      <p className="text-sm text-[var(--color-accent)] mt-3">
                        Capstone: {education.capstone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Key Numbers */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-4 section-label">
                    By the Numbers
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "75K+", label: "Lines of Production Code" },
                      { value: "26K+", label: "Items Processed Annually" },
                      { value: "750+", label: "Active Accounts Managed" },
                      { value: "$350K+", label: "YoY Revenue Growth" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl">
                        <p className="metric-value text-2xl mb-1">{stat.value}</p>
                        <p className="text-xs text-[var(--color-text-subtle)]">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="mt-24">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-8 section-label">
                Technical Skills
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
                {skills.map((category) => (
                  <div key={category.name} className="p-5 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl">
                    <h4 className="text-sm font-medium mb-3 text-[var(--color-accent)]">
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs text-[var(--color-text-muted)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gradient divider */}
        <div className="accent-line" />

        {/* ═══════════════════════════════════════════════════════════════
                    PROJECTS SECTION
                    Featured work — metrics-forward
                ═══════════════════════════════════════════════════════════════ */}
        <section id="projects" className="py-32 bg-[var(--color-bg-elevated)]">
          <div className="container">
            {/* Section Header */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl md:text-8xl font-light text-[var(--color-bg-subtle)]">02</span>
              <h2 className="text-3xl md:text-4xl font-light">Projects</h2>
            </div>
            <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mb-16">
              Production systems built independently — from architecture to
              deployment. Every project leads with its impact.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Gradient divider */}
        <div className="accent-line" />

        {/* ═══════════════════════════════════════════════════════════════
                    EXPERIENCE SECTION
                    Professional timeline
                ═══════════════════════════════════════════════════════════════ */}
        <section id="experience" className="py-32">
          <div className="container">
            {/* Section Header */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl md:text-8xl font-light text-[var(--color-bg-subtle)]">03</span>
              <h2 className="text-3xl md:text-4xl font-light">Experience</h2>
            </div>
            <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mb-16">
              Roles where I&apos;ve built and shipped production systems independently.
            </p>

            <div className="max-w-3xl">
              {experience.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        </section>

        {/* Gradient divider */}
        <div className="accent-line" />

        {/* ═══════════════════════════════════════════════════════════════
                    CONTACT SECTION
                    Get in touch
                ═══════════════════════════════════════════════════════════════ */}
        <section id="contact" className="py-32 bg-[var(--color-bg-elevated)]">
          <div className="container">
            {/* Section Header */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl md:text-8xl font-light text-[var(--color-bg-subtle)]">04</span>
              <h2 className="text-3xl md:text-4xl font-light">Contact</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left - Form */}
              <div>
                <p className="text-xl text-[var(--color-text-muted)] mb-12">
                  Interested in working together? Let&apos;s talk.
                </p>
                <ContactForm />
              </div>

              {/* Right - Direct Contact */}
              <div className="lg:pt-16">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-6 section-label">
                  Direct Contact
                </h3>
                <div className="space-y-4 mb-12">
                  <Link
                    href="mailto:jjtjoseph1@gmail.com"
                    className="block text-xl hover:text-[var(--color-accent)] transition-colors"
                  >
                    jjtjoseph1@gmail.com
                  </Link>
                  <Link
                    href="tel:516-669-9372"
                    className="block text-xl hover:text-[var(--color-accent)] transition-colors"
                  >
                    516-669-9372
                  </Link>
                </div>

                <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-6 section-label">
                  Connect
                </h3>
                <div className="flex gap-6">
                  <Link
                    href="https://github.com/jjtjoseph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    GitHub
                  </Link>
                  <Link
                    href="https://linkedin.com/in/joe-taddeo-25160019b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="https://luxeswap.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    Live Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
