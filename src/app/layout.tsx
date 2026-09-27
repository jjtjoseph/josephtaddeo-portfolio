import type { Metadata } from "next";
import { Space_Grotesk, Outfit, JetBrains_Mono, Fraunces, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { profile } from "@/data/profile";

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
  title: profile.title,
  description:
    profile.description,
  keywords: [
    "Joseph Taddeo",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Python",
    "Node.js",
    "Automation",
    "GTM Engineering",
    "Data Engineering",
    "Real Estate Finance",
    "New York",
  ],
  authors: [{ name: "Joseph Taddeo" }],
  openGraph: {
    title: profile.title,
    description:
      profile.description,
    url: "https://josephtaddeo.com",
    siteName: "Joseph Taddeo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.title,
    description:
      profile.description,
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
              jobTitle: "GTM & Operations Engineer",
              worksFor: { "@type": "Organization", name: "MoFin Lending Corporation" },
              email: "jjtjoseph1@gmail.com",
              telephone: "516-669-9372",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New York",
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
