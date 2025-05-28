"use client";
import { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('software');
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="flex justify-center gap-4 mb-8">
          <button onClick={() => setActiveTab('software')}
            className={activeTab === 'software' ? 'btn btn-primary' : 'btn'}>
            Software Development
          </button>
          <button onClick={() => setActiveTab('data')}
            className={activeTab === 'data' ? 'btn btn-primary' : 'btn'}>
            Data Analytics
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeTab === 'software' ? (
            <ProjectCard
              title="Weather Brainiac"
              description="A responsive weather application delivering real-time weather updates and personalized user experiences."
              technologies={['React', 'OpenWeather API', 'Firebase']}
              githubLink="https://github.com/yourusername/weather-brainiac"
            />
          ) : (
            <ProjectCard
              title="Customer Analysis Dashboard"
              description="Analysis of customer behavior patterns using advanced data visualization techniques."
              technologies={['Python', 'Pandas', 'Tableau']}
              githubLink="https://github.com/yourusername/customer-analysis"
            />
          )}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, technologies, githubLink }) => (
  <div className="card">
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p>{description}</p>
      <ul>
        {technologies.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  </div>
);

export default Projects;