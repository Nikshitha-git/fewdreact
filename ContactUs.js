// ContactUs.js

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id', // replace with your actual ID
      'your_template_id', // replace with your template ID
      form.current,
      'your_public_key'   // replace with your public key
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send message, please try again.');
      console.log(error.text);
    });
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          style={styles.input}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="6"
          style={styles.textarea}
        ></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px'
  },
  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
    marginBottom: '10px'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default ContactUs;
