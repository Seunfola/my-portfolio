import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Button from '@/app/button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} alt='image' className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>About ME:</h1>
          <h2 className={styles.imgDesc}>Front-End Web Developer</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.itemTitle}>The Bulb Africa, Lagos April 2022 </h1>
          <ul className={styles.itemDesc}>
            <li> Developed and hosted a robust backend database using MongoDB, Prisma, Postman, and Node.js
          as the runtime server.</li>
            <li> Implemented optimization strategies, including code-splitting, Server-Side Rendering, and
              advanced state management, resulting in a substantial improvement in web application
          performance.</li>
            <li>Delivered optimal architectural patterns tailored to project needs, ensuring efficiency and
              scalability.</li>
            <li> Worked in a team that redesign the company’s User Interface, introducing an improved layout
              and seamlessly integrating an intuitive routing system to enhance overall user experience</li>
          </ul>

        </div>
        <div className={styles.item}>
          <h1 className={styles.itemTitle}> What We Do?</h1>
          <ul className={styles.itemDesc}>
            <li>
              Excellent interpersonal, communication, and teamwork skills</li>
            <li>Good project management techniques</li>
            <li>Honest and transparent with a great sense of responsibility </li>
            <li>Precise numerical, analytical, and presentation skills</li>
            <li>Expert user of MS word, Excel, and PowerPoint</li>
            <li>Highly innovative—sees better ways of doing things</li>
            <li>Teachable—apt to learn with great attention to details</li>
    
          </ul>
          <Button url="/contact" text="contact" />
        </div>
      </div>
    </div>
  )
}

export default About