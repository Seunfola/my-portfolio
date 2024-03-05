'use client'

import Image from 'next/image'
import styles from './page.module.css'



const Home = () => {

  return (
    <div className={styles.envelope}>
      
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>I am a seasoned Software Engineer.</h1>
          <p className={styles.desc}>interactive and extensible web applications using modern technologies and stack. <br />
            I love writing clean, optimized, extensible and self-explanatory code that meets industry standard.</p>
        </div>
        <div className={styles.item}>
          <Image src='/foli.jpg' width={200} height={200} alt='hero image' className={styles.img} />
        </div>
        
        
      </div>
      <div className={styles.Hero}>
        
      </div>

    </div>

  )
}
export default Home