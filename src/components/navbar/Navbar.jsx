import { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import DarkMode from '../darkMode/DarkMode';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Experience',
    url: '/about',
  },
  {
    id: 3,
    title: 'Projects',
    url: '/info',
  },
  {
    id: 4,
    title: 'Recommendation',
    url: '/Recommendation',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles.container} ${menuOpen ? styles.open : 'none'}`}>
      <Link href="/" className={styles.logo}>
        FOLAHAN's <br/> PORTFOLIO
      </Link>
      <div className={styles.navWrapper}>
        <div className={`${styles.menuIcon} ${menuOpen ? styles.open : 'none'}`} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <div className={styles.links}>
          <DarkMode />
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
