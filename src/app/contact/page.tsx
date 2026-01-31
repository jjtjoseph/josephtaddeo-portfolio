import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Contact | Joseph Taddeo",
    description:
        "Get in touch with Joseph Taddeo for opportunities in operations and software engineering.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-24 pb-16">
                <div className="container">
                    <div className="max-w-xl mx-auto">
                        {/* Page Header */}
                        <div className="text-center mb-12">
                            <h1 className="mb-6">Get in Touch</h1>
                            <p className="text-xl text-[var(--color-text-muted)]">
                                Interested in working together? Let&apos;s talk.
                            </p>
                        </div>

                        {/* Contact Form */}
                        <ContactForm />

                        {/* Direct Contact */}
                        <div className="mt-12 pt-12 border-t border-[var(--color-border)] text-center">
                            <p className="text-[var(--color-text-muted)] mb-6">
                                Or reach out directly:
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link
                                    href="mailto:jjtjoseph1@gmail.com"
                                    className="text-[var(--color-accent)] hover:underline"
                                >
                                    jjtjoseph1@gmail.com
                                </Link>
                                <Link
                                    href="tel:516-669-9372"
                                    className="text-[var(--color-accent)] hover:underline"
                                >
                                    516-669-9372
                                </Link>
                            </div>
                            <div className="flex justify-center gap-6 mt-6">
                                <Link
                                    href="https://github.com/jjtjoseph"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                                >
                                    GitHub
                                </Link>
                                <Link
                                    href="https://linkedin.com/in/josephtaddeo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                                >
                                    LinkedIn
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
