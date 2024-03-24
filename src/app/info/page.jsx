import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Info = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Our Services</h1>
      <div className={styles.items}>
        <Link href="/info/LearnlyDashboard" className={styles.item}>
          <span className={styles.title}>Task Note</span>
        </Link>
        <Link href="/info/OnlineStore" className={styles.item}>
          <span className={styles.title}>Breed-Store</span>
        </Link>
        <Link href="/info/BreedRealEstate" className={styles.item}>
          <span className={styles.title}>Breed-Real-Estate</span>
        </Link>
      </div>
    </div>
  );
};

export default Info;

