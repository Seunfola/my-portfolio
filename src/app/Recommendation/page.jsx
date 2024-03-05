import React from "react";
import styles from "./page.module.css";
import ProfileCard from "@/components/card/card";
// import flex1 from '../../../public/flex1.jpg';



const recommendation = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Recommendations</h1>
      <div className={styles.item}>
      <div className={styles.items}>
        
          <ProfileCard
            header="Felix Afolayan"
            picture="/flex1.jpg" // Assuming the image is in the public folder
            comment="I'm a software engineer who loves to write clean and efficient code. Excited about the future of web development!"
            title="Bet 365, UK"
          />
        </div>
      <div className={styles.items}>

        <ProfileCard
          header="Adetoun Olayemi"
          picture="/Toun.jpeg" // Assuming the image is in the public folder
          comment="I'm a software engineer who loves to write clean and efficient code. Excited about the future of web development!"
          title="Credo Lagos, Nigeria"
        />
      </div>
      <div className={styles.items}>

        <ProfileCard
          header="Ajani Bolaji"
          picture="/Ajani Bolaji.jpeg" // Assuming the image is in the public folder
          comment="I'm a software engineer who loves to write clean and efficient code. Excited about the future of web development!"
          title="GIV Energy, UK"
        />
      </div>
    </div>
    </div>
  );
};

export default recommendation;