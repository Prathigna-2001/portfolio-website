import React, { useRef, useEffect, useState } from "react";
import "./Skills.css";

const SKILLS = [
  { name: "HTML5", level: 95, icon: "fab fa-html5", color: "#E44D26" },
  { name: "CSS3", level: 90, icon: "fab fa-css3-alt", color: "#1572B6" },
  { name: "JavaScript", level: 85, icon: "fab fa-js-square", color: "#F7DF1E" },
  { name: "React", level: 85, icon: "fab fa-react", color: "#61DAFB" },
  { name: "Bootstrap", level: 80, icon: "fab fa-bootstrap", color: "#7952B3" },
  { name: "Git", level: 75, icon: "fab fa-git-alt", color: "#F05032" },
  { name: "SQL", level: 70, icon: "fas fa-database", color: "#F29111" },
];
const Skills = () => {
  const sectionRef = useRef(null);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedSkills(SKILLS.map((s) => s.name));
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">⚡ Skills & Technologies</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            My favorite tools and technologies that power my creative projects.
          </p>
        </div>
        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-header">
                <div className="skill-info">
                  <i className={skill.icon} style={{ color: skill.color }}></i>
                  <span>{skill.name}</span>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: animatedSkills.includes(skill.name)
                      ? `${skill.level}%`
                      : "0%",
                    backgroundColor: skill.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="skills-cta">
          <p>💡 Ready to collaborate? Let’s create something extraordinary!</p>
          <button className="btn-primary">Start a Project</button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
