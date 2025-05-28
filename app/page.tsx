"use client"
import Image from "next/image"; 
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
        <main className="relative">
      <Navbar />
      <div className="container mx-auto px-4">
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </main>
  );
}
