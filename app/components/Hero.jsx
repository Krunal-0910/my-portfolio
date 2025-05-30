"use client";
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Software Engineer', 'Full Stack Developer','Backend Developer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

    return (
    <section id="hero">
      <div className="hero-container d-flex flex-column justify-content-center align-items-center"
      >
        <h1>Krunal Patel</h1>
        <p>
          I'm a <span ref={el}></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
