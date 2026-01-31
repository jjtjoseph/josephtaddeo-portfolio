import type { Metadata } from "next";
import { Space_Grotesk, Outfit, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Joseph Taddeo | Operations & Software Engineer",
  description:
    "Operations and software professional building internal tools, automating workflows, and coordinating cross-functional work. Based in New York.",
  keywords: [
    "Joseph Taddeo",
    "Software Engineer",
    "Operations",
    "React",
    "Python",
    "Automation",
    "New York",
  ],
  authors: [{ name: "Joseph Taddeo" }],
  openGraph: {
    title: "Joseph Taddeo | Operations & Software Engineer",
    description:
      "Operations and software professional building internal tools, automating workflows, and coordinating cross-functional work.",
    url: "https://josephtaddeo.com",
    siteName: "Joseph Taddeo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Taddeo | Operations & Software Engineer",
    description:
      "Operations and software professional building internal tools and automating workflows.",
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
              jobTitle: "Operations & Software Engineer",
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
                "https://linkedin.com/in/josephtaddeo",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
