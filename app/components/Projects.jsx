"use client";
import { useState } from 'react';


const softwareProjects = [
  {
    title: "Weather Brainiac",
    description: ` •	Built a weather forecasting app that provides real-time weather updates, weekly forecasts, and detailed information for locations worldwide.
                    •	Created a user-friendly interface to display weather data with responsive layouts and smooth transitions.
                    •	Integrated with a third-party weather API to fetch and display real-time weather data.
                    •	Implemented caching for frequently accessed data, reducing API calls and improving load times.`,

    githubLink: "https://github.com/yourusername/weather-brainiac"
  },
  {
    title: "Employee & Resource Management Web App",
    description: ` •	Implemented RESTful APIs (Flask Blueprints) with role-based validation and authentication for secure data handling.
                •	Designed a responsive and interactive user interface with real-time data display, leveraging Jinja2 for dynamic HTML templating.
                •	Utilized SQLAlchemy ORM for database interactions.
                •	Improved application speed by implementing frontend caching to reduce unnecessary API calls.` 
                


  },
  {
    title:"AI-Powered Resume Analyzer",
    description: `
    • Frontend: Built with React.js + Tailwind CSS, featuring a clean, responsive UI.
    • Backend: Python Flask API managing AI interactions and file parsing.
    • AI Integration: Uses Google Gemini Flash 2.0 for resume analysis, extracting skills, strengths, weaknesses, and role recommendations.    
    • ATS Scoring: Calculates compatibility with Applicant Tracking Systems, providing a score with actionable suggestions.
    • File Processing: Supports PDF and Word uploads with robust text extraction.
    • Impact: Designed to assist job seekers in tailoring resumes for better recruiter visibility.
      `,
    githubLink: "https://ai-resume-analyzer-dgps.vercel.app/"
  }
];

const projectManagement = [
  {
    title: "Critical Chain vs. Traditional Project Management",
    description: ` •	Analyzed CCPM and TPM methodologies for resource allocation and risk management.
                   • Delivered a structured report and team presentation highlighting key methodological differences.`
  },
];



const databaseProjects = [
  {
    title: "Database Design & Management for Company Resource System",
    description: ` •	Designed and implemented an EER model to manage employees, vendors, sales, and departments.
                   •	Created normalized relational schemas (up to 3NF) and automated reporting using SQL views.
                   •	Wrote optimized SQL queries for business insights and improved performance with indexing.`
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('software');
  return (
    <section id="projects">
      <div className="container">
        <div className="section-title"
           style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
      >
          <h2> Projects </h2>
          </div>
        <div className="flex justify-center gap-4 mb-8"
                  style={{
        gap: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center",
        marginBottom:30
      }} >
          <button onClick={() => setActiveTab('software')}
            className={activeTab === 'software' ? 'btn btn-primary': 'btn'}
          >
            Software Development
          </button>
          <button onClick={() => setActiveTab('database')}
            className={activeTab === 'database' ? 'btn btn-primary' : 'btn'}
          >
            Database
          </button>
          <button onClick={() => setActiveTab('projectManagement')}
          className={activeTab === 'projectManagement' ? 'btn btn-primary' : 'btn'}
          >
            Project Management
          </button>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(activeTab === 'software' ? softwareProjects : activeTab === 'database' ? databaseProjects : projectManagement).map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, technologies, githubLink }) => (
  <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
    <div className="card-body" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <h3 className="card-title">{title}</h3>
        <ul>
          {description.split('\n').filter(Boolean).map((line,idx) => (
            <li key = {idx}> {line.replace(/^•\s*/, '')}</li>
          )
        )}
          
          </ul>
      {githubLink && (
        <a href={githubLink} s target="_blank" rel="noopener noreferrer"
        style={{ display: "inline-block", marginTop: "auto" }}
        >
          View on GitHub
        </a>
      )}
    </div>
  </div>
);

export default Projects;