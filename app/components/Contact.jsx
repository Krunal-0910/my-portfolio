"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="connect" className="py-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Let's Connect</h2>
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="text-gray-600">
            Thank you for exploring my portfolio! I'm passionate about creating innovative solutions 
            and always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <SocialLink
            href="https://github.com/yourusername"
            icon={<FaGithub size={24} />}
            label="GitHub"
          />
          <SocialLink
            href="https://linkedin.com/in/yourusername"
            icon={<FaLinkedin size={24} />}
            label="LinkedIn"
          />
          <SocialLink
            href="mailto:your.email@example.com"
            icon={<FaEnvelope size={24} />}
            label="Email"
          />
        </div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </motion.a>
  );
};

export default Contact;