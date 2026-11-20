import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScreenGallery } from "./ScreenGallery";
import { studies } from "./work";
import styles from "./design.module.css";

const title = "Frontend Design | Joseph Taddeo";
const description = "A visual portfolio of photography albums, commerce interfaces, lending tools and research applications by Joseph Taddeo.";
export const metadata: Metadata = {
  title, description,
  openGraph: { title, description, url: "https://josephtaddeo.com/design", images: ["https://josephtaddeo.com/design/sunfloat-albums.webp"] },
  twitter: { card: "summary_large_image", title, description, images: ["https://josephtaddeo.com/design/sunfloat-albums.webp"] },
};

export default function DesignPage() {
  return <>
    <Header />
    <main className="container">
      <header className={styles.intro}>
        <h1>Frontend design</h1>
        <p>Interfaces I’ve built for browsing photographs, shopping for a designer piece, comparing loan scenarios and working with research data.</p>
      </header>
      <nav className={styles.index} aria-label="Design projects">
        {studies.map(study => <a key={study.id} href={`#${study.id}`}>{study.name}</a>)}
      </nav>
      {studies.map((study, index) => <section key={study.id} id={study.id}
        aria-labelledby={`${study.id}-title`} className={styles.project}>
        <div className={styles.copy}>
          <p className={styles.meta}>{study.category}</p>
          <h2 id={`${study.id}-title`}>{study.name}</h2>
          <p className={styles.description}>{study.description}</p>
          {study.links && <div className={styles.links}>
            {study.links.map(link => <a key={link.href} href={link.href} className={styles.link}>{link.label}</a>)}
          </div>}
        </div>
        <ScreenGallery screens={study.screens} title={study.name} first={index === 0} />
      </section>)}
    </main>
    <Footer />
  </>;
}
