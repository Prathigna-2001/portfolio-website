import React from 'react';
import './Hero.css';
import heroImg from '../images/pic-1.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">AMBATI PRATHIGNA</span>
          </h1>
          <h2 className="hero-subtitle">FRONT-END DEVELOPER</h2>
          <p className="hero-description">
            I create beautiful and functional web applications using modern technologies.
            Passionate about clean code and user experience.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Ambati Prathigna" className="hero-photo" />
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
