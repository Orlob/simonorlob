import Image from "next/image";
import smartCaravanImg from "@/public/blog/smart-caravan/header.webp";
import { styles } from "../../types";
import type { articleType } from "../../types";
import { categories, categorySlugs } from "../../_assets/categories";
import { authors, authorSlugs } from "../../_assets/authors";

export const articleData: Omit<articleType, "content"> = {
  slug: "smart-caravan",
  title: "Building a Smart Caravan with Raspberry Pi",
  description: "Transform your caravan into a smart living space using Raspberry Pi and various sensors for monitoring temperature, humidity, leveling, and energy consumption.",
  categories: [
    categories.find((category) => category.slug === categorySlugs.camping),
    categories.find((category) => category.slug === categorySlugs.technology),
    categories.find((category) => category.slug === categorySlugs.software),
  ],
  author: authors.find((author) => author.slug === authorSlugs.simon),
  publishedAt: "2024-03-20",
  image: {
    src: smartCaravanImg,
    urlRelative: "/blog/smart-caravan/header.webp",
    alt: "Smart Caravan with Raspberry Pi monitoring system",
  },
};

export default function SmartCaravan() {
  return (
    <>
      <Image
        src={smartCaravanImg}
        alt="Smart Caravan with Raspberry Pi monitoring system"
        width={700}
        height={500}
        priority={true}
        className="rounded-box"
        placeholder="blur"
      />
      <section>
        <h2 className={styles.h2}>Einführung</h2>
        <p className={styles.p}>
          Mein Caravan soll smart werden! Mit einem Raspberry Pi und verschiedenen 
          Sensoren möchte ich wichtige Parameter wie Temperatur, Feuchtigkeit, 
          Ausrichtung und Energieverbrauch überwachen. Dieses Projekt wird meinen 
          Camping-Alltag komfortabler und effizienter gestalten.
        </p>
      </section>

      <section>
        <h3 className={styles.h3}>1. Benötigte Hardware</h3>
        <p className={styles.p}>
          Für dieses Projekt verwende ich folgende Komponenten:
        </p>

        <ul className={styles.ul}>
          <li className={styles.li}>Raspberry Pi (Model 4 oder 3B+)</li>
          <li className={styles.li}>DHT22 Sensoren für Temperatur und Luftfeuchtigkeit</li>
          <li className={styles.li}>MPU6050 für Nivellierung/Ausrichtung</li>
          <li className={styles.li}>Energiemessmodul für Stromverbrauch</li>
          <li className={styles.li}>Verkabelung und Gehäuse</li>
        </ul>
      </section>

      <section>
        <h3 className={styles.h3}>2. Sensorplatzierung</h3>
        <p className={styles.p}>
          Die Temperatur- und Feuchtigkeitssensoren werden an verschiedenen Stellen 
          im Caravan platziert:
        </p>

        <ul className={styles.ul}>
          <li className={styles.li}>Hauptraum</li>
          <li className={styles.li}>Schlafbereich</li>
          <li className={styles.li}>Außenbereich</li>
          <li className={styles.li}>Stauraum (zur Schimmelprävention)</li>
        </ul>
      </section>

      <section>
        <h3 className={styles.h3}>3. Datenerfassung und Visualisierung</h3>
        <p className={styles.p}>
          Die Sensordaten werden vom Raspberry Pi gesammelt und können über eine 
          Weboberfläche eingesehen werden. Wichtige Werte wie schiefe Stellplätze 
          oder kritische Temperaturen lösen automatische Benachrichtigungen aus.
        </p>
      </section>
    </>
  );
} 