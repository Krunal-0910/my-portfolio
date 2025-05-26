"use client";
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaGithub, FaUser, FaFolder, FaEnvelope, FaLinkedin, FaCertificate, FaBusinessTime } from 'react-icons/fa';
import ContactLinks from './ContactLinks'

const Navbar = () => (
  <header id="header">
    <div className="profile">
      <img
        src="/img/Krunal.jpg"
        alt class="img-fluid rounded-circle hoverZoomLink"
        width={120}
        height={120}
      />
      <h1><a href="/">Krunal Patel</a></h1>
      <ContactLinks />
    </div>
    <nav className="nav-menu">
      <ul>
        <li><a href="#hero"><FaHome /> <span>Home</span></a></li>
        <li><a href="#experience"><FaBusinessTime /> <span>Experience</span></a></li>
        <li><a href="#about"><FaUser /> <span>About</span></a></li>
        <li><a href="#projects"><FaFolder /> <span>Projects</span></a></li>
        <li><a href="#certifications"><FaCertificate /> <span>Certifications</span></a></li>
        <li><a href="#connect"><FaEnvelope /> <span>Contact</span></a></li>
      </ul>
    </nav>
  </header>
);

export default Navbar; 