import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { education, skills } from "@/data/experience";

export const metadata = {
    title: "About | Joseph Taddeo",
    description:
        "Operations and software professional with experience building internal tools, automating workflows, and coordinating cross-functional work.",
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
                            Operations and software professional with experience building
                            internal tools, automating workflows, and coordinating
                            cross-functional work at a growing business.
                        </p>
                    </div>

                    {/* Summary */}
                    <section className="max-w-3xl mb-16">
                        <h2 className="text-lg font-medium mb-4">Background</h2>
                        <div className="space-y-4 text-[var(--color-text-muted)]">
                            <p>
                                I built automation systems that reduced processing time by 80%
                                and increased throughput by 20%. I created a full-stack
                                marketing website for a luxury consignment business. Currently
                                focused on roles at the intersection of operations, technology,
                                and fast-paced startup environments.
                            </p>
                            <p>
                                My approach combines hands-on technical work with genuine
                                curiosity about how operations actually function. I&apos;m most
                                engaged when building tools that solve real problems for the
                                people who use them.
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

                    {/* Languages */}
                    <section className="max-w-3xl">
                        <h2 className="text-lg font-medium mb-4">Languages</h2>
                        <div className="flex gap-6 text-[var(--color-text-muted)]">
                            <div>
                                <span className="font-medium text-[var(--color-text)]">English</span>
                                <span className="text-sm ml-2">— Fluent</span>
                            </div>
                            <div>
                                <span className="font-medium text-[var(--color-text)]">Italian</span>
                                <span className="text-sm ml-2">— Basic</span>
                            </div>
                            <div>
                                <span className="font-medium text-[var(--color-text)]">Ukrainian</span>
                                <span className="text-sm ml-2">— Elementary</span>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
