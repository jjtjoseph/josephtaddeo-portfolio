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
                    Full-height hero with strong visual impact
                ═══════════════════════════════════════════════════════════════ */}
        <section id="hero" className="min-h-[90vh] flex items-center relative" style={{ background: 'radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(139, 92, 246, 0.06) 0%, transparent 50%)' }}>
          <div className="container">
            <div className="max-w-4xl">
              <p className="text-[var(--color-accent)] text-sm uppercase tracking-[0.2em] mb-8 animate-fade-in">
                Operations & Software Engineer
              </p>
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 animate-fade-in leading-[1.1]"
                style={{ animationDelay: "100ms" }}
              >
                Joseph Taddeo
              </h1>
              <p
                className="text-xl md:text-2xl text-[var(--color-text-muted)] leading-relaxed mb-16 max-w-2xl animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                Building internal tools, automating workflows, and coordinating
                cross-functional work. Based in New York.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-in"
                style={{ animationDelay: "300ms" }}
              >
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-full font-medium hover:bg-[var(--color-accent)] transition-all duration-300 hover:scale-105"
                  style={{ color: '#0a0a0a' }}
                >
                  View Projects
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-[var(--color-border)] rounded-full font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
                >
                  Get in Touch
                </Link>
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

        {/* ═══════════════════════════════════════════════════════════════
                    ABOUT SECTION
                    Professional summary with visual hierarchy
                ═══════════════════════════════════════════════════════════════ */}
        <section id="about" className="py-32 border-t border-[var(--color-border)]">
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
                    Software engineer building scalable data pipelines, AI-integrated
                    backend systems, and production desktop applications.
                  </p>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    Built an ETL system processing 15,000+ items with AI-powered
                    classification (sentence-transformers, GPT integration) that
                    enabled over $250K in annual revenue for a luxury consignment business.
                  </p>
                </div>
              </div>

              {/* Right Column - Education & Languages */}
              <div className="space-y-12">
                {/* Education */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-4">
                    Education
                  </h3>
                  <div className="p-6 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl">
                    <h4 className="font-medium text-lg">{education.institution}</h4>
                    <p className="text-[var(--color-text-muted)]">{education.degree}</p>
                    <p className="text-sm text-[var(--color-text-subtle)] mt-2">
                      {education.period}
                    </p>
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-4">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-full text-sm">
                      English — Fluent
                    </span>
                    <span className="px-4 py-2 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-full text-sm">
                      Italian — Basic
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="mt-24">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-8">
                Technical Skills
              </h3>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {skills.map((category) => (
                  <div key={category.name} className="p-6 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl">
                    <h4 className="text-sm font-medium mb-4 text-[var(--color-accent)]">
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm text-[var(--color-text-muted)]"
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

        {/* ═══════════════════════════════════════════════════════════════
                    PROJECTS SECTION
                    Featured work with large visuals
                ═══════════════════════════════════════════════════════════════ */}
        <section id="projects" className="py-32 bg-[var(--color-bg-elevated)] border-t border-[var(--color-border)]">
          <div className="container">
            {/* Section Header */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl md:text-8xl font-light text-[var(--color-bg-subtle)]">02</span>
              <h2 className="text-3xl md:text-4xl font-light">Projects</h2>
            </div>
            <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mb-16">
              A selection of work spanning full-stack development, desktop
              automation, and data engineering.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
                    EXPERIENCE SECTION
                    Professional timeline
                ═══════════════════════════════════════════════════════════════ */}
        <section id="experience" className="py-32 border-t border-[var(--color-border)]">
          <div className="container">
            {/* Section Header */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl md:text-8xl font-light text-[var(--color-bg-subtle)]">03</span>
              <h2 className="text-3xl md:text-4xl font-light">Experience</h2>
            </div>
            <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mb-16">
              Roles where I&apos;ve combined operations expertise with technical problem-solving.
            </p>

            <div className="max-w-3xl">
              {experience.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
                    CONTACT SECTION
                    Get in touch
                ═══════════════════════════════════════════════════════════════ */}
        <section id="contact" className="py-32 bg-[var(--color-bg-elevated)] border-t border-[var(--color-border)]">
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
                <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-6">
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

                <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-6">
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
                    href="https://linkedin.com/in/josephtaddeo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    LinkedIn
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
