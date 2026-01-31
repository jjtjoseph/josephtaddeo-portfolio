import type { Experience } from "@/data/experience";

interface ExperienceCardProps {
    experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <article className="relative pl-8 pb-12 last:pb-0">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-0 w-px bg-[var(--color-border)]" />

            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3px] rounded-full bg-[var(--color-accent)]" />

            <div className="mb-2">
                <h3 className="text-lg font-medium">{experience.company}</h3>
                <p className="text-[var(--color-accent)]">{experience.role}</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--color-text-subtle)] mb-4">
                <span>{experience.period}</span>
                <span>{experience.location}</span>
            </div>

            <ul className="space-y-2">
                {experience.bullets.map((bullet, i) => (
                    <li
                        key={i}
                        className="text-[var(--color-text-muted)] text-sm leading-relaxed flex gap-3"
                    >
                        <span className="text-[var(--color-accent)] mt-2 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                        {bullet}
                    </li>
                ))}
            </ul>
        </article>
    );
}
