import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import img1 from "../images/pic-1.jpg";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Audisankara College of Engineering & Technology",
    duration: "2022 – 2024",
    grade: "CGPA: 8.9/10",
    coursework:
      "Advanced Web Technologies, Machine Learning, Cloud Computing, Data Analytics",
    icon: "🎓",
  },
  {
    degree: "Bachelor of Science (B.Sc.) in Computer Science",
    institution: "Dr. C.R.R. Degree College",
    duration: "2018 – 2022",
    grade: "CGPA: 7.8/10",
    coursework:
      "Data Structures, Algorithms, Database Management, Software Engineering",
    icon: "📚",
  },
  {
    degree: "Intermediate (12th Grade) - MPC",
    institution: "Dr. C.R.R. Arts & Science College",
    duration: "2016 – 2018",
    grade: "Percentage: 65%",
    coursework: "Mathematics, Physics, Chemistry",
    icon: "📖",
  },
  {
    degree: "Secondary School (10th Grade)",
    institution: "Z.P.P. High School",
    duration: "2015 – 2016",
    grade: "GPA: 5.3/10",
    coursework: "General Science, Mathematics, Social Studies",
    icon: "🏫",
  },
];

const certificates = [
  {
    title: "UI with React.js Advanced Certification",
    organization: "SATHYA TECHNOLOGY",
    year: 2025,
    details:
      "Mastered advanced React concepts such as Hooks, Context API, and performance optimization.",
    icon: "⚛️",
  },
  {
    title: "Introduction To Internet Of Things Certification",
    organization: "NPTEL",
    year: 2024,
    details: "Covered IoT fundamentals, architecture, and real-world applications.",
    icon: "🌐",
  },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  return (
    <div className="about-wrapper">
      <section id="about" className={`about-section ${isVisible ? "visible" : ""}`}>
        <div className="floating-bg"></div>

        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">
            Passionate Front-End Developer crafting modern, responsive web experiences with
            creativity and innovation. Transforming ideas into engaging digital solutions that
            deliver exceptional user experiences across all devices and platforms.
          </p>
        </div>

        <div className="profile-container">
          <div className="profile-image-container">
            <img src={img1} alt="Ambati Prathigna" className="profile-image" />
            <div className="image-ring"></div>
          </div>

          <div className="bio-card">
            <h3 className="bio-title">
              Hello! I'm <span className="highlight">Ambati Prathigna</span>
            </h3>
            <p className="bio-text">
              A passionate <span className="highlight">Front-End Developer</span> from Hyderabad, India
              with expertise in creating dynamic, user-friendly web applications. I specialize in
              transforming complex requirements into elegant, efficient code that delivers
              exceptional user experiences.
            </p>

            <p className="bio-text">
              With a strong foundation in modern web technologies, I bring creativity and technical
              expertise to every project. My approach combines clean code principles with innovative
              design thinking to build applications that are not only functional but also visually
              stunning and highly performant.
            </p>

            <p className="bio-text">
              I'm constantly exploring new technologies and best practices in front-end development.
              My passion lies in creating seamless, accessible web experiences that solve real-world
              problems and make a positive impact on users' digital interactions.
            </p>

            <div className="bio-stats">
              <div className="stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Months Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">7+</span>
                <span className="stat-label">Technologies Mastered</span>
              </div>
            </div>

            <a href="/resume.pdf" download className="download-btn">
              📄 Download Resume →
            </a>
          </div>
        </div>
      </section>
      <section className="education-section fade-in" ref={addToRefs}>
        <h2 className="section-title">Education Journey</h2>
        <p className="section-description">
          My academic background has provided me with a strong foundation in computer science
          principles and practical software development skills. Each educational milestone has
          contributed to my growth as a developer and problem-solver.
        </p>
        <div className="education-timeline">
          {education.map((edu, i) => (
            <div key={i} className="education-item">
              <div className="education-icon">{edu.icon}</div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <div className="education-meta">
                  <span>{edu.duration}</span> | <span>{edu.grade}</span>
                </div>
                <p className="education-coursework">
                  <strong>Coursework:</strong> {edu.coursework}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="certifications-section fade-in" ref={addToRefs}>
        <h2 className="section-title">Professional Certifications</h2>
        <p className="section-description">
          Continuously upgrading my skills through professional certifications and staying
          updated with the latest industry trends and technologies in front-end development.
        </p>
        <div className="certifications-grid">
          {certificates.map((cert, i) => (
            <div key={i} className="certification-card">
              <div className="certification-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p className="organization">{cert.organization}</p>
              <span className="year">{cert.year}</span>
              <p className="cert-details">{cert.details}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="philosophy-section fade-in" ref={addToRefs}>
        <h2 className="section-title">Development Philosophy</h2>
        <div className="philosophy-content">
          <div className="philosophy-card">
            <div className="philosophy-icon">💡</div>
            <h3>User-Centric Approach</h3>
            <p>
              I believe in putting users first. Every design decision and line of code is
              crafted with the end-user in mind, ensuring intuitive navigation, accessibility,
              and an engaging experience that keeps users coming back.
            </p>
          </div>
          <div className="philosophy-card">
            <div className="philosophy-icon">⚡</div>
            <h3>Performance Excellence</h3>
            <p>
              Speed matters. I optimize every aspect of web applications for maximum performance,
              from efficient code architecture to optimized assets, ensuring lightning-fast
              load times and smooth interactions.
            </p>
          </div>
          <div className="philosophy-card">
            <div className="philosophy-icon">🎨</div>
            <h3>Clean & Maintainable Code</h3>
            <p>
              Writing clean, readable, and maintainable code is my priority. I follow best
              practices, implement proper documentation, and structure projects for scalability
              and long-term success.
            </p>
          </div>
        </div>
      </section>
      <section className="goals-section fade-in" ref={addToRefs}>
        <h2 className="section-title">Career Aspirations</h2>
        <div className="goals-content">
          <p>
            I'm eager to contribute my skills to innovative projects and collaborate with
            forward-thinking teams. My goal is to grow as a front-end developer while
            creating digital solutions that make a meaningful difference.
          </p>
          <p>
            I'm particularly interested in opportunities that challenge me to push boundaries
            in web development, whether it's implementing cutting-edge technologies,
            optimizing user experiences, or solving complex interface challenges.
          </p>
          <div className="cta-container">
            <p className="cta-text">
              Ready to bring your digital vision to life? Let's connect and discuss how we can
              create something amazing together!
            </p>
            <a href="#contact" className="cta-button">
              Get In Touch 🙂
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;