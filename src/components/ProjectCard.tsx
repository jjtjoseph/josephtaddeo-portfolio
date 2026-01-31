import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="group bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg card-hover overflow-hidden">
            {/* Project Image */}
            {project.image && (
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            )}

            <div className="p-6 flex flex-col">
                <div className="mb-4">
                    <p className="text-xs text-[var(--color-text-subtle)] uppercase tracking-wider mb-2">
                        {project.type}
                    </p>
                    <h3 className="text-xl font-medium mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                        {project.description}
                    </p>
                </div>

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
                <ul className="text-sm text-[var(--color-text-muted)] space-y-1 mb-4">
                    {project.metrics.slice(0, 3).map((metric, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="text-[var(--color-accent)] mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                            {metric}
                        </li>
                    ))}
                </ul>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-[var(--color-border)]">
                    {project.liveUrl && (
                        <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
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
