'use client'
import { useRef, useState } from 'react';
import styles from './page.module.css'; // Adjust path if necessary
import Image from 'next/image';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser'; // Correct import statement
import { useRouter } from 'next/navigation';// Import for programmatic navigation

const Contact = () => {
  
  const form = useRef();
  const [isSending, setIsSending] = useState(false); 
  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); // Indicate the start of the sending process
    
    emailjs.sendForm('your_service_id', 'your_template_id', form.current, 'your_user_id')
      .then((result) => {
        console.log(result.text);
        toast.success('Message Sent and delivered successfully.'); // Display success toast
      })
      .catch((error) => {
        console.error(error.text);
        toast.error('Failed to send the message. Please try again.'); // Display error toast
      })
      .finally(() => {
        setIsSending(false); // Reset the sending state
        router.push('/notification'); // Redirect to Notification page regardless of the outcome
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/Cont.png" alt="contact pic" layout="fill" objectFit="cover" />
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input type='text' placeholder='Name' id='name' name='user_name' className={styles.input} required />
          <input type='email' placeholder='Email' id='email' name='user_email' className={styles.input} required />
          <textarea name='message' placeholder="Your Message Here" className={styles.textArea} required></textarea>
          <button type="submit" className={styles.submitButton} disabled={isSending}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
