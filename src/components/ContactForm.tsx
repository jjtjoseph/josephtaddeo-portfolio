"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xykjvaql", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg text-center">
                <p className="text-lg mb-2">Thank you for reaching out!</p>
                <p className="text-[var(--color-text-muted)]">
                    I&apos;ll get back to you as soon as possible.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm text-[var(--color-text-muted)] mb-2"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="block text-sm text-[var(--color-text-muted)] mb-2"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="your@email.com"
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-sm text-[var(--color-text-muted)] mb-2"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                    placeholder="Your message..."
                />
            </div>

            {status === "error" && (
                <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or email me directly.
                </p>
            )}

            <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
}
