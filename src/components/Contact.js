import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>You can reach me at <a href="mailto:mallika8105@gmail.com">mallika8105@gmail.com</a></p>
      <div className="social-links">
        <a href="https://github.com/mallika8105" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/mallika-m-95538225b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
