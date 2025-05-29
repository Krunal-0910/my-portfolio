"use client";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Certifications from "./components/Certifications";
import About from "./components/About";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Certifications />
         <Contact />
        <Footer />
      </main>
    </>
  );
}