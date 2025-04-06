import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
// Import skill logos
import htmlLogo from './assets/html5.svg';
import cssLogo from './assets/css3.svg';
import jsLogo from './assets/javascript.svg';
import pythonLogo from './assets/python.svg';
import reactLogo from './assets/react.svg';
import nodeLogo from './assets/nodejs.svg';
import gitLogo from './assets/git.svg';
import vscodeLogo from './assets/vscode.svg';

// Project data
const projects = {
  project1: {
    title: "MEDICARE",
    description: "A comprehensive healthcare management system designed to streamline patient care and medical record-keeping. This project focuses on creating an intuitive interface for both healthcare providers and patients.",
    demoUrl: "project1-details.html",
    imageUrl: "https://imgur.com/6wf6Gqx.jpg",
    technologies: [
      "Figma",
      "Google Sheets",
      "UI/UX Design",
      "Healthcare Design",
      "Data Management"
    ],
    features: [
      "Patient appointment scheduling system",
      "Medical record management",
      "Prescription tracking",
      "Healthcare provider dashboard",
      "Patient care timeline visualization"
    ]
  },
  project2: {
    title: "BOTECO",
    description: "An innovative plastic bottle recycling system that converts collected bottles into monetary value. This eco-friendly solution encourages recycling while providing financial incentives to users.",
    demoUrl: "project2-details.html",
    imageUrl: "https://imgur.com/Kb6b3Mx.jpg",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "GitHub",
      "REST API"
    ],
    features: [
      "Real-time bottle value calculation",
      "User wallet management",
      "Recycling history tracking",
      "Environmental impact metrics",
      "QR code bottle scanning"
    ]
  }
};

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="App">
      <div className="background-roses">
        <div className="rose"></div>
        <div className="rose"></div>
        <div className="rose"></div>
        <div className="rose"></div>
        <div className="rose"></div>
        <div className="rose"></div>
        <div className="rose"></div>
        <div className="rose"></div>
      </div>
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">PORTFOLIO</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Lance Adrian Enculesio</h1>
          <h2>2nd Year IT Student</h2>
          <p>Turning ideas into digital reality</p>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <p>I am a passionate 2nd-year IT student with a slight interest in web development and software engineering. I love creating elegant solutions to complex problems and am constantly learning new technologies to enhance my skills.</p>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Programming</h3>
            <div className="skill-logos">
              <div className="skill-item">
                <img src={htmlLogo} alt="HTML5" />
                <span>HTML</span>
              </div>
              <div className="skill-item">
                <img src={cssLogo} alt="CSS3" />
                <span>CSS</span>
              </div>
              <div className="skill-item">
                <img src={jsLogo} alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <img src={pythonLogo} alt="Python" />
                <span>Python</span>
              </div>
            </div>
          </div>
          <div className="skill-card">
            <h3>Frameworks</h3>
            <div className="skill-logos">
              <div className="skill-item">
                <img src={reactLogo} alt="React" />
                <span>React</span>
              </div>
              <div className="skill-item">
                <img src={nodeLogo} alt="Node.js" />
                <span>Node.js</span>
              </div>
            </div>
          </div>
          <div className="skill-card">
            <h3>Tools</h3>
            <div className="skill-logos">
              <div className="skill-item">
                <img src={gitLogo} alt="GitHub" />
                <span>GitHub</span>
              </div>
              <div className="skill-item">
                <img src={vscodeLogo} alt="VS Code" />
                <span>VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={projects.project1.imageUrl} alt={projects.project1.title} />
            </div>
            <h3>{projects.project1.title}</h3>
            <p>{projects.project1.description}</p>
            <div className="project-links">
              <button 
                className="project-link"
                onClick={() => openProjectModal(projects.project1)}
                aria-label={`View details of ${projects.project1.title}`}
              >
                View Demo
              </button>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src={projects.project2.imageUrl} alt={projects.project2.title} />
            </div>
            <h3>{projects.project2.title}</h3>
            <p>{projects.project2.description}</p>
            <div className="project-links">
              <button 
                className="project-link"
                onClick={() => openProjectModal(projects.project2)}
                aria-label={`View details of ${projects.project2.title}`}
              >
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>
      </section>

     

      <Modal 
        isOpen={isModalOpen}
        onClose={closeProjectModal}
        project={selectedProject}
      />
    </div>
  );
}


export default App;
