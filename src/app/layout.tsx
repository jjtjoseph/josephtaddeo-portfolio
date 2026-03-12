import type { Metadata } from "next";
import { Space_Grotesk, Outfit, JetBrains_Mono, Fraunces, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joseph Taddeo | Full-Stack Software Engineer",
  description:
    "Full-stack software engineer who builds and owns production systems end to end. Designed, built, and deployed a 75,000+ line production platform, AI-powered automation suite, internal CRM, and proprietary pricing intelligence system — all independently.",
  keywords: [
    "Joseph Taddeo",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Python",
    "Node.js",
    "Automation",
    "Brooklyn",
    "New York",
  ],
  authors: [{ name: "Joseph Taddeo" }],
  openGraph: {
    title: "Joseph Taddeo | Full-Stack Software Engineer",
    description:
      "Sole technical hire at a $2.5M+ luxury e-commerce operation. 75,000+ lines of production code. AI-powered automation. Internal CRM. Proprietary pricing intelligence.",
    url: "https://josephtaddeo.com",
    siteName: "Joseph Taddeo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Taddeo | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer who builds and owns production systems end to end.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Joseph Taddeo",
              url: "https://josephtaddeo.com",
              jobTitle: "Full-Stack Software Engineer",
              email: "jjtjoseph1@gmail.com",
              telephone: "516-669-9372",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brooklyn",
                addressRegion: "NY",
                addressCountry: "US",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University at Albany, State University of New York",
              },
              sameAs: [
                "https://github.com/jjtjoseph",
                "https://linkedin.com/in/joe-taddeo-25160019b",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${outfit.variable} ${jetbrainsMono.variable} ${fraunces.variable} ${manrope.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
