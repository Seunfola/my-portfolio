'use client';
import { useRef, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm('service_pqa1jq8', 'template_rzv6244', form.current, '_8GeNeGxFow4XwMnF')
      .then((result) => {
        console.log(result.text);
        setIsSending(false);
        setMessageStatus('success');
        toast.success('Message Sent and delivered successfully.');
      })
      .catch((error) => {
        console.error(error.text);
        setIsSending(false);
        setMessageStatus('error');
        toast.error('Failed to send the message. Please try again.');
      });
  };

  const isFormDisabled = isSending || messageStatus === 'success';

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/Cont.png" alt="contact pic" layout="fill" objectFit="cover" />
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input type='text' placeholder='Name' id='name' name='user_name' className={styles.input} required disabled={isFormDisabled} />
          <input type='email' placeholder='Email' id='email' name='user_email' className={styles.input} required disabled={isFormDisabled} />
          <textarea name='message' placeholder="Your Message Here" className={styles.textArea} required disabled={isFormDisabled}></textarea>
          <button type="submit" className={styles.submitButton} disabled={isFormDisabled}>
            Send
          </button>
        </form>
        {messageStatus === 'success' && <p className={styles.successMessage}>Your message has been successfully sent. Folahan will get back to you soon.</p>}
        {messageStatus === 'error' && <p className={styles.errorMessage}>There was an error sending your message. Please try again later.</p>}
      </div>
    </div>
  );
};

export default Contact;
