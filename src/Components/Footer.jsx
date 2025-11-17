import React from "react";
import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const services = [
        "Web Development",
        "React Applications",
        "Responsive Design",
        "Frontend Solutions",
    ];

    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/prathigna-ambati-5a7447341/",
            icon: "💼",
            color: "#0077b5",
        },
        {
            name: "GitHub",
            href: "https://github.com/Prathigna-2001",
            icon: "💻",
            color: "#333",
        },
        {
            name: "Email",
            href: "mailto:ambatiprathigna6@gmail.com",
            icon: "📧",
            color: "#ea4335",
        },
    ];

    const contactInfo = [
        { icon: "📱", info: "+91 9346516305" },
        { icon: "📧", info: "ambatiprathigna6@gmail.com" },
        { icon: "📍", info: "Nellore, Andhra Pradesh" },
    ];

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-section brand-section">
                            <div className="footer-brand">
                                <h3 className="brand-name">Ambati Prathigna</h3>
                                <p className="brand-tagline">Frontend Developer & UI Specialist</p>
                                <p className="brand-description">
                                    Passionate about crafting elegant, interactive, and responsive
                                    web experiences using modern frontend technologies.
                                </p>
                            </div>
                            <div className="social-section">
                                <h4>Follow Me</h4>
                                <div className="social-links">
                                    {socialLinks.map((social, index) => (
                                        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="social-link" style={{ "--social-color": social.color }} aria-label={social.name}>
                                            <span className="social-icon">{social.icon}</span>
                                            <span className="social-name">{social.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul className="footer-links">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="footer-link">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Services</h4>
                            <ul className="footer-links">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <span className="service-item">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Get In Touch</h4>
                            <div className="contact-info">
                                {contactInfo.map((contact, index) => (
                                    <div key={index} className="contact-item">
                                        <span className="contact-icon">{contact.icon}</span>
                                        <span className="contact-detail">{contact.info}</span>
                                    </div>))}
                            </div>
                            <div className="hire-section">
                                <p>Available for freelance & full-time roles</p>
                                <a href="#contact" className="hire-btn">
                                    Hire Me
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © {currentYear} <strong>Ambati Prathigna</strong>. All rights reserved.
                        </p>
                        <p className="made-with">
                            Made with <span className="heart">❤️</span> using React.js
                        </p>
                    </div>
                </div>
            </div>
            <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" >
                ↑
            </button>
        </footer>
    );
};

export default Footer;
