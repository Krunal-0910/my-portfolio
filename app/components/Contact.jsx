"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ContactLinks from './ContactLinks';

const Contact = () => (
  <section id="connect">
    <div className="container">
      <div className="section-title">
        <h2>Let's Connect</h2>
        </div>
        <div className="max-w-2xl mx-8" style={{}}>
        <p>
          Thank you for exploring my portfolio! I'm passionate about creating innovative solutions and always open to new opportunities and collaborations.
          I am actively seeking to collaborate with industry leaders and forward-thinking individuals who are striving to redefine the technological landscape. 
          If you are interested in partnering on impactful projects or discussing emerging trends, I encourage you to connect. Let’s innovate and inspire together!
        </p>
      </div>
      <div className='Contacts-social-links'>
      <ContactLinks />
      </div>
    </div>
  </section>
);

export default Contact;