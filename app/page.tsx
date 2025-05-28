"use client";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}