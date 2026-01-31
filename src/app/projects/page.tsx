import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
    title: "Projects | Joseph Taddeo",
    description:
        "Featured projects including full-stack websites, desktop automation tools, and data platforms.",
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-24 pb-16">
                <div className="container">
                    {/* Page Header */}
                    <div className="max-w-3xl mb-12">
                        <h1 className="mb-6">Projects</h1>
                        <p className="text-xl text-[var(--color-text-muted)]">
                            A selection of work spanning full-stack development, desktop
                            automation, and data engineering.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
