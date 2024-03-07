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
            comment="
I've had the genuine pleasure of working closely with Folahan Mosunmola for quite some time now. Throughout this period, he han't just stood out as a beacon of technical expertise in his role as a frontend Engineer but he has also deeply impressed me with his unwavering commitment"
            title="Bet 365, UK"
          />
        </div>
      <div className={styles.items}>

        <ProfileCard
          header="Adetoun Olayemi"
          picture="/Toun.jpeg" // Assuming the image is in the public folder
            comment=" Folahan's willingness to share knowledge and support his peers embodies the essence of mentorship from an early stage in his career. He approaches every project with a team-first attitude, contributing to a supportive and innovative work environment."
            title="Credo, Lagos, Nigeria"
        />
      </div>
      <div className={styles.items}>

        <ProfileCard
          header="Ajani Bolaji"
          picture="/Ajani Bolaji.jpeg" // Assuming the image is in the public folder
            comment="Having worked with and mentored Folahan is his genuine enthusiasm for technology and his proactive approach to professional development. He consistently goes beyond to expand his skill set, embracing new technologies and methodologies with an eagerness that is contagious."
          title="GIV Energy, UK"
        />
      </div>
    </div>
    </div>
  );
};

export default recommendation;