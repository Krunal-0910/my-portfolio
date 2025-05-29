"use client";
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaGithub, FaUser, FaFolder, FaEnvelope, FaLinkedin, FaCertificate } from 'react-icons/fa';

const Navbar = () => (
  <header id="header">
    <div className="profile">
      <Image
        src="/.jpg"
        alt class="img-fluid rounded-circle hoverZoomLink"
        width={120}
        height={120}
      />
      <h1><a href="/">Krunal Patel</a></h1>
      <div className="social-links mt-3 text-center">
        <a href="https://github.com/yourusername"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername"><FaLinkedin /></a>
        <a href="mailto:your.email@example.com"><FaEnvelope /></a>
      </div>
    </div>
    <nav className="nav-menu">
      <ul>
        <li><a href="#hero"><FaHome /> <span>Home</span></a></li>
        <li><a href="#about"><FaUser /> <span>About</span></a></li>
        <li><a href="#projects"><FaFolder /> <span>Projects</span></a></li>
        <li><a href="#certifications"><FaCertificate /> <span>Certifications</span></a></li>
        <li><a href="#connect"><FaEnvelope /> <span>Contact</span></a></li>
      </ul>
    </nav>
  </header>
);

export default Navbar; 