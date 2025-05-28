"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
const Projects = () => {
  const [activeTab, setActiveTab] = useState('software');

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        
        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('software')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeTab === 'software' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Software Development
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeTab === 'data' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Data Analytics
          </button>
        </div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {activeTab === 'software' ? (
            <>
              <ProjectCard
                title="Weather Brainiac"
                description="A responsive weather application delivering real-time weather updates and personalized user experiences."
                technologies={['React', 'OpenWeather API', 'Firebase']}
                githubLink="https://github.com/yourusername/weather-brainiac"
              />
              {/* Add more software project cards */}
            </>
          ) : (
            <>
              <ProjectCard
                title="Customer Analysis Dashboard"
                description="Analysis of customer behavior patterns using advanced data visualization techniques."
                technologies={['Python', 'Pandas', 'Tableau']}
                githubLink="https://github.com/yourusername/customer-analysis"
              />
              {/* Add more data analysis project cards */}
            </>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ title, description, technologies, githubLink }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
      >
        View on GitHub
      </a>
    </motion.div>
  );
};

export default Projects;