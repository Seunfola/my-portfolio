import React from 'react';
import styles from './button.module.css'
import Link from 'next/link';

const Button = ({ text, url, download }) => {
    if (download) {
        // Render an <a> tag for downloads
        return (
            <a href={url} download className={styles.container}>
                {text}
            </a>
        );
    }
    return (

        <Link href={url}>
            <div className={styles.container}>{text}</div>
        </Link>
    )
}

export default Button