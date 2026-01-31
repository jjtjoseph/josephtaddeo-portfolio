import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";

export const metadata = {
    title: "Blog | Joseph Taddeo",
    description: "Thoughts on software engineering, automation, and building tools.",
};

export default function BlogPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-16">
                <section className="container py-24">
                    <div className="max-w-3xl mb-16">
                        <h1 className="text-4xl md:text-5xl font-light mb-6">Blog</h1>
                        <p className="text-xl text-[var(--color-text-muted)]">
                            Thoughts on software engineering, automation, and building tools.
                        </p>
                    </div>

                    <div className="max-w-3xl space-y-12">
                        {posts.map((post) => (
                            <article key={post.slug} className="group">
                                <Link href={`/blog/${post.slug}`} className="block">
                                    <time className="text-sm text-[var(--color-text-subtle)]">
                                        {new Date(post.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </time>
                                    <h2 className="text-2xl font-medium mt-2 mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-[var(--color-text-muted)] mb-4">
                                        {post.excerpt}
                                    </p>
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
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
