import React from 'react';
import './ProjectDetails.css';

function ProjectDetails({ project }) {
  return (
    <div className="project-details">
      <div className="project-details-container">
        <div className="project-header">
          <h1>{project.title}</h1>
        </div>
        
        <div className="project-content">
          <div className="project-image-large">
            <img src={project.imageUrl} alt={project.title} />
          </div>
          
          <div className="project-info">
            <h2>About this Project</h2>
            <p className="project-description">{project.description}</p>
            
            <div className="project-technologies">
              <h3>Technologies Used</h3>
              <ul>
                {project.technologies && project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-features">
              <h3>Key Features</h3>
              <ul>
                {project.features && project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails; 