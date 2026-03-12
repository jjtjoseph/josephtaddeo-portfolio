import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const isFeatured = project.featured;

    return (
        <article
            className={`group overflow-hidden rounded-xl ${isFeatured
                    ? "glass-card md:col-span-2"
                    : "bg-[var(--color-bg-elevated)] border border-[var(--color-border)] card-hover"
                }`}
        >
            {/* Project Image */}
            {project.image && (
                <div className={`relative overflow-hidden ${isFeatured ? "aspect-[2.4/1]" : "aspect-video"}`}>
                    <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay for featured */}
                    {isFeatured && (
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                    )}
                </div>
            )}

            <div className={`p-6 flex flex-col ${isFeatured ? "md:p-8" : ""}`}>
                <div className="mb-4">
                    <p className="text-xs text-[var(--color-text-subtle)] uppercase tracking-wider mb-2 section-label">
                        {project.type}
                    </p>
                    <h3 className={`font-medium mb-3 group-hover:text-[var(--color-accent)] transition-colors ${isFeatured ? "text-2xl md:text-3xl" : "text-xl"
                        }`}>
                        {project.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Business Impact Callout */}
                {project.businessImpact && (
                    <div className="mb-4 px-4 py-3 rounded-lg bg-[var(--color-accent-muted)] border border-[rgba(168,181,196,0.1)]">
                        <p className="text-sm text-[var(--color-accent)] font-medium">
                            ↗ {project.businessImpact}
                        </p>
                    </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-[var(--color-accent-muted)] text-[var(--color-accent)] rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Key Metrics */}
                <ul className="text-sm text-[var(--color-text-muted)] space-y-1.5 mb-4">
                    {project.metrics.map((metric, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="text-[var(--color-accent)] mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                            {metric}
                        </li>
                    ))}
                </ul>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-[var(--color-border)] mt-auto">
                    {project.liveUrl && (
                        <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[var(--color-accent)] hover:text-[var(--color-text)] transition-colors font-medium"
                        >
                            View Live →
                        </Link>
                    )}
                    {project.githubUrl && (
                        <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                        >
                            GitHub →
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
}
