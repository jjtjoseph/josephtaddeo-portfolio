import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/case-studies";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  return { title: study ? `${study.title} | Joseph Taddeo` : "Project Not Found", description: study?.summary };
}
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-20">
        <article className="container">
          <div className="max-w-3xl mx-auto">
            <Link href={`/projects#${study.projectId}`} className="text-sm text-[var(--color-accent)] hover:underline">← All projects</Link>
            <header className="mt-10 mb-10">
              <p className="section-label text-sm uppercase tracking-widest text-[var(--color-text-subtle)] mb-4">MoFin · Engineering case study</p>
              <h1 className="text-3xl md:text-5xl leading-tight mb-6">{study.title}</h1>
              <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">{study.summary}</p>
              <ul className="flex flex-wrap gap-2 mt-6" aria-label="Technologies and methods">
                {study.stack.map((item) => <li key={item} className="px-3 py-1 rounded bg-[var(--color-accent-muted)] text-sm text-[var(--color-accent)]">{item}</li>)}
              </ul>
            </header>
            <figure className="mb-14">
              <Image src={study.image} alt={study.imageAlt} width={1200} height={675} priority className="rounded-xl border border-[var(--color-border)] w-full h-auto" />
              <figcaption className="text-xs text-[var(--color-text-subtle)] mt-3">Conceptual workflow; no customer records or production interface shown.</figcaption>
            </figure>
            <div className="space-y-12">
              {study.sections.map((section) => <section key={section.title}>
                <h2 className="text-2xl mb-4">{section.title}</h2>
                <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                  {section.paragraphs.map((text) => <p key={text}>{text}</p>)}
                </div>
              </section>)}
            </div>
            <div className="flex flex-wrap gap-6 mt-14 pt-8 border-t border-[var(--color-border)]">
              <Link href="/projects" className="text-[var(--color-accent)] hover:underline">Explore more work →</Link>
              <a href="/Joseph_Taddeo_Resume.pdf" className="text-[var(--color-accent)] hover:underline">Download resume</a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
