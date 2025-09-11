"use client";
import { useState } from 'react';

    const experiences = [
        {position:"Software Engineer Intern",
         company:"Wells Fargo",
         duration:"May 2024 - August 2024",
         description:
            "• Developed RESTful APIs in Java Spring Boot, improving backend response speed by 18%.\n"+
            "• Built reusable React.js components connected to APIs, reducing UI development time and improving code maintainability.\n"+
            "• Automated regression testing in Selenium and JUnit, catching critical defects before release and improving sprint delivery rates.\n"+
            "• Optimized SQL queries and indexing, decreasing database execution time and improving performance for large transaction sets.\n"+
            "• Streamlined CI/CD deployments using Jenkins and Git, reducing manual deployment steps and cutting release time."
                    },
        {position:'Software Engineer Intern',
         company:'Prudential Finance',
         duration:'May 2025 - July 2025',
         description:
      "• Built dynamic KPI dashboards using Flask, JavaScript, Chart.js, and PostgreSQL to visualize financial insights for analysts.\n"+
      "• Automated nightly ETL pipelines using AWS Step Functions, Lambda, and S3 to streamline multi-department data ingestion.\n"+
      "• Developed and tested backend services in Spring Boot with JUnit and integrated them using Postman APIs.\n"+
      "• Reduced load times by optimizing complex SQL joins and queries used in analytical reports.\n"+
      "• Minimized manual effort in reporting by 40% through automated report generation features."
        }


    ];


 
 const Experience = () =>{
return (
   

       <section id="experience">
         
      <div className="section-title">
        
      <h2 clas>Experience</h2>
      
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {experiences.map((experiences,idx) =>(
        <ExperienceCard key={idx} {...experiences} />
        
      ))}
      </div>
      </section>
       );
      };
   

const ExperienceCard = ({position, company, duration, description}) => (
    
    <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div className="card-body" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <h3 className="card-title">{position}</h3>
                <h4 className="card-title">{company}</h4>
                <p className="mt-2 text-gray-600">{duration}</p>
                <ul>
                    {description.split('\n').filter(Boolean).map((line,idx) => (
                    <li key = {idx}> {line}</li>
                    )
                    )}
                </ul>
          </div>
        
        </div>

      );
export default Experience;