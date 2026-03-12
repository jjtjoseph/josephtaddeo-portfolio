import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { education, skills } from "@/data/experience";

export const metadata = {
    title: "About | Joseph Taddeo",
    description:
        "Full-stack software engineer who builds and owns production systems end to end. Sole technical hire at a $2.5M+ luxury e-commerce operation.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-24 pb-16">
                <div className="container">
                    {/* Page Header */}
                    <div className="max-w-3xl mb-16">
                        <h1 className="mb-6">About</h1>
                        <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
                            Full-stack software engineer who builds and owns production
                            systems end to end.
                        </p>
                    </div>

                    {/* Summary */}
                    <section className="max-w-3xl mb-16">
                        <h2 className="text-lg font-medium mb-4">Background</h2>
                        <div className="space-y-4 text-[var(--color-text-muted)]">
                            <p>
                                Sole technical hire at a $2.5M+ luxury e-commerce operation.
                                Designed, built, and deployed a 75,000+ line production platform,
                                AI-powered automation suite, internal CRM with 17 API endpoints,
                                and proprietary pricing intelligence system — all independently.
                            </p>
                            <p>
                                Systems built during tenure contributed to $350K+ year-over-year
                                revenue growth. I build the entire technical stack from scratch —
                                web platform, CRM, data pipelines, automation — and train the
                                team to use it.
                            </p>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="max-w-3xl mb-16">
                        <h2 className="text-lg font-medium mb-4">Education</h2>
                        <div className="p-6 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg">
                            <h3 className="font-medium">{education.institution}</h3>
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
                    </section>

                    {/* Skills */}
                    <section className="max-w-3xl mb-16">
                        <h2 className="text-lg font-medium mb-6">Skills</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {skills.map((category) => (
                                <div key={category.name}>
                                    <h3 className="text-sm text-[var(--color-text-subtle)] uppercase tracking-wider mb-3">
                                        {category.name}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-sm bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
