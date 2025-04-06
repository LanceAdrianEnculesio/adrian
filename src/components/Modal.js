import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, project }) {
  if (!isOpen) return null;

  const getProjectDescription = (title) => {
    if (title === "MEDICARE") {
      return (
        <>
          MEDICARE is an innovative healthcare management system that revolutionizes how medical facilities handle patient care and records. 
          Designed with both healthcare providers and patients in mind, this system offers a seamless experience for managing appointments, 
          tracking medical histories, and maintaining efficient communication between all stakeholders.
          <br/><br/>
          The interface was carefully crafted in Figma to ensure optimal user experience, while Google Sheets integration 
          provides robust data management capabilities. This combination allows for both beautiful design and powerful functionality.
        </>
      );
    } else if (title === "BOTECO") {
      return (
        <>
          BOTECO is a groundbreaking eco-friendly application that transforms plastic bottle recycling into a rewarding experience. 
          Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this system allows users to convert their recyclable 
          plastic bottles into monetary value, promoting environmental sustainability while providing financial benefits.
          <br/><br/>
          The application features a sophisticated bottle recognition system, secure digital wallet integration, and real-time 
          value calculation. Using GitHub for version control and collaboration, we've created a robust platform that makes 
          recycling both accessible and profitable for everyone.
        </>
      );
    }
    return project.description;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <h2>{project.title}</h2>
        </div>
        
        <div className="modal-body">
          <div className="modal-image">
            <img src={project.imageUrl} alt={project.title} />
          </div>
          
          <div className="modal-info">
            <h3>About this Project</h3>
            <p className="modal-description">
              {getProjectDescription(project.title)}
            </p>
            
            <div className="modal-technologies">
              <h4>{project.title === "MEDICARE" ? "Design & Management Tools" : "Technologies Used"}</h4>
              <ul>
                {project.technologies && project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            
            <div className="modal-features">
              <h4>Key Features</h4>
              <ul>
                {project.features && project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {project.title === "MEDICARE" && (
              <div className="modal-healthcare">
                <h4>Healthcare Benefits</h4>
                <ul>
                  <li>Reduced waiting times for patients</li>
                  <li>Improved accuracy in medical record-keeping</li>
                  <li>Enhanced communication between medical staff</li>
                  <li>Better resource allocation and scheduling</li>
                  <li>Increased patient satisfaction and care quality</li>
                </ul>
              </div>
            )}

            {project.title === "BOTECO" && (
              <div className="modal-eco">
                <h4>Environmental Impact</h4>
                <ul>
                  <li>Reduction in plastic waste pollution</li>
                  <li>Increased recycling participation rates</li>
                  <li>Community engagement in sustainability</li>
                  <li>Economic benefits for recyclers</li>
                  <li>Lower carbon footprint through organized recycling</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal; 