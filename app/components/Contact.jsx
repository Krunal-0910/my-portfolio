"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => (
  <section id="connect">
    <div className="container">
      <h2 className="section-title">Let's Connect</h2>
      <div className="max-w-2xl mx-auto text-center mb-8">
        <p>
          Thank you for exploring my portfolio! I'm passionate about creating innovative solutions 
          and always open to new opportunities and collaborations.
        </p>
      </div>
      <div className="social-links flex justify-center gap-6">
        <a href="https://github.com/yourusername"><FaGithub size={24} /></a>
        <a href="https://linkedin.com/in/yourusername"><FaLinkedin size={24} /></a>
        <a href="mailto:your.email@example.com"><FaEnvelope size={24} /></a>
      </div>
    </div>
  </section>
);

export default Contact;