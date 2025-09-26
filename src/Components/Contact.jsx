import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <a href="https://forms.gle/WKMGsuCuESGqUBy39" target='_blank'>
        <button>Register</button>
      </a>
    </section>
  );
}