import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExperienceCard from "@/components/ExperienceCard";
import { experience } from "@/data/experience";

export const metadata = {
    title: "Experience | Joseph Taddeo",
    description:
        "Professional experience in operations and software engineering, including work at LuxeSwap and FedEx.",
};

export default function ExperiencePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-24 pb-16">
                <div className="container">
                    {/* Page Header */}
                    <div className="max-w-3xl mb-12">
                        <h1 className="mb-6">Experience</h1>
                        <p className="text-xl text-[var(--color-text-muted)]">
                            Roles where I&apos;ve combined operations expertise with technical
                            problem-solving.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="max-w-2xl">
                        {experience.map((exp) => (
                            <ExperienceCard key={exp.id} experience={exp} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
