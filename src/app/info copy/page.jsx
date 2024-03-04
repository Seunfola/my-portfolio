import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Faq = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Our Services</h1>
      <div className={styles.items}>
        <Link href="/info/illustrations" className={styles.item}>
          <span className={styles.title}>Ajani Bolaji</span>
        </Link>
        <Link href="/info/websites" className={styles.item}>
          <span className={styles.title}>Adetoun Olayemi</span>
        </Link>
        <Link href="/info/application" className={styles.item}>
          <span className={styles.title}>Felix Afolayan</span>
        </Link>
      </div>
    </div>
  );
};

export default Faq;