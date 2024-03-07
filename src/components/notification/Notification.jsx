import Link from 'next/link';
import styles from './Notification.module.css'; // Import the styles

const Notification = () => {
    return (
        <div className={styles.notificationContainer}>
            <h1 className={styles.notificationTitle}>Message Sent Successfully!</h1>
            <p className={styles.notificationMessage}>
                Your message has been sent. Folahan will get back to you soon.
            </p>
            <Link href="/">
                <a className={styles.notificationLink}>Go Back Home</a>
            </Link>
        </div>
    );
};

export default Notification;
