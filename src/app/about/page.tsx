import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { education, skills } from "@/data/experience";
import { profile } from "@/data/profile";

export const metadata = {
    title: "About | Joseph Taddeo",
    description:
        profile.description,
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
                            {profile.headline}
                        </p>
                    </div>

                    {/* Summary */}
                    <section className="max-w-3xl mb-16">
                        <h2 className="text-lg font-medium mb-4">Background</h2>
                        <div className="space-y-4 text-[var(--color-text-muted)]">
                            <p>
                                {profile.introduction}
                            </p>
                            <p>
                                {profile.background}
                            </p>
                            <p>{profile.previous}</p>
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
