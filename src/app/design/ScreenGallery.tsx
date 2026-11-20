"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./design.module.css";

export interface Screen {
  label: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

export function ScreenGallery({ screens, title, first = false }: {
  screens: Screen[];
  title: string;
  first?: boolean;
}) {
  const [selected, setSelected] = useState(0);
  const screen = screens[selected];

  return (
    <figure className={styles.figure}>
      {screens.length > 1 && (
        <div className={styles.switcher} role="group" aria-label={`${title} views`}>
          {screens.map((item, index) => (
            <button key={item.image} type="button" aria-pressed={index === selected}
              onClick={() => setSelected(index)}>
              {item.label}
            </button>
          ))}
        </div>
      )}
      <div className={styles.frame}>
        <a href={screen.image} target="_blank" rel="noreferrer"
          aria-label={`Open full-size ${title} ${screen.label} image in a new tab`}>
          <Image src={screen.image} alt={screen.alt} width={screen.width} height={screen.height}
            unoptimized loading={first ? "eager" : "lazy"} />
        </a>
      </div>
      <figcaption className={styles.caption} aria-live="polite">
        <span>{screen.caption}</span>
        <a href={screen.image} target="_blank" rel="noreferrer" aria-label={`Full size: ${screen.label} (new tab)`}>Full size</a>
      </figcaption>
    </figure>
  );
}
