import React, { useEffect, useRef, useState } from "react";
import "./best.css";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(10, 10, 25, 0.9)";
      ctx.fillRect(0, 0, width, height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0 || star.x > width) star.dx *= -1;
        if (star.y < 0 || star.y > height) star.dy *= -1;
      });
      requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const trail = [];
    const trailLength = 20;

    const handleMouseMove = (e) => {
      trail.push({ x: e.clientX, y: e.clientY });
      if (trail.length > trailLength) trail.shift();
    };

    const drawTrail = () => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < trail.length; i++) {
        const opacity = i / trailLength;
        ctx.beginPath();
        ctx.arc(trail[i].x, trail[i].y, 10, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${opacity * 0.3})`;
        ctx.fill();
      }
      ctx.restore();
      requestAnimationFrame(drawTrail);
    };

    window.addEventListener("mousemove", handleMouseMove);
    drawTrail();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");
    setTimeout(() => {
      setFormStatus("Message Sent Successfully 🎉");
      setIsSubmitted(true);
      e.target.reset();
    }, 2000);
  };

  return (
    <section className="contact-section" id="contact">
      <canvas ref={canvasRef} className="background-canvas"></canvas>
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">
            Let’s collaborate and create something amazing together!
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <textarea name="message" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="submit-btn">
            {formStatus === "Sending..." ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
        {isSubmitted && <p className="success-message">{formStatus}</p>}
      </div>
    </section>
  );
};

export default Contact;
