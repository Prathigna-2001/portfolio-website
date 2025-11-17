import React from "react";
import img1 from "../images/e-cart-app-1.png";
import img2 from "../images/project-2.png";
import img3 from "../images/registerpage-3.png";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "User Login and Signup Pages",
      description: "Login and Signup pages, built using React.js and styled with CSS, provide secure access for users to authenticate or create new accounts. They ensure smooth onboarding and protect sensitive information with validation and encryption.",
      image: img2,
      technologies: ["REACT.JS", "CSS3", "JAVASCRIPT"],
      github: "https://github.com/Prathigna-2001/auth-login-Signup-pages-",
      live: "https://github.com/Prathigna-2001/auth-login-Signup-pages-",
    },
    {
      id: 2,
      title: "E-Cart App",
      description:
        "A modern React-based shopping app with product listing, add-to-cart, and checkout functionality — styled with CSS and Context API integration.",
      image: img1,
      technologies: ["React.js", "CSS3", "JavaScript"],
      github: "https://github.com/Prathigna-2001/E-cart-App",
      live: "https://prathigna-2001.github.io/E-cart-App/",
    },
    {
      id: 3,
      title: "Register Page",
      description: "The Student Register Page, built using React.js and styled with CSS, lets new students create an account by providing personal and academic details. It validates inputs and securely stores information for future login and access.",
      image: img3,
      technologies: ["React.js", "CSS3"],
      github: "https://github.com/Prathigna-2001/REGISTER-PAGE",
      live: "https://prathigna-2001.github.io/REGISTER-PAGE/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">✨ My Projects ✨</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card fade-in">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
