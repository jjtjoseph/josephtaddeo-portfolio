import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { posts } from "@/data/posts";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Joseph Taddeo`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-16">
                <article className="container py-24">
                    <div className="max-w-3xl mx-auto">
                        {/* Back link */}
                        <Link
                            href="/blog"
                            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-8 inline-block"
                        >
                            ← Back to Blog
                        </Link>

                        {/* Header */}
                        <header className="mb-12">
                            <time className="text-sm text-[var(--color-text-subtle)]">
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </time>
                            <h1 className="text-3xl md:text-4xl font-light mt-4 mb-6">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-xs bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </header>

                        {/* Content */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            {post.content.split("\n").map((paragraph, i) => {
                                if (paragraph.startsWith("## ")) {
                                    return (
                                        <h2 key={i} className="text-2xl font-medium mt-12 mb-4">
                                            {paragraph.replace("## ", "")}
                                        </h2>
                                    );
                                }
                                if (paragraph.startsWith("### ")) {
                                    return (
                                        <h3 key={i} className="text-xl font-medium mt-8 mb-3">
                                            {paragraph.replace("### ", "")}
                                        </h3>
                                    );
                                }
                                if (paragraph.startsWith("- ")) {
                                    return (
                                        <li key={i} className="text-[var(--color-text-muted)] ml-4">
                                            {paragraph.replace("- ", "")}
                                        </li>
                                    );
                                }
                                if (paragraph.trim() === "") return null;
                                return (
                                    <p key={i} className="text-[var(--color-text-muted)] mb-4 leading-relaxed">
                                        {paragraph}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
