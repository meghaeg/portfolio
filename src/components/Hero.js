import React from "react";
import '../styles/Hero.css';
import profileImage from '../assets/profile.jpg'; // <-- Update the path if needed

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Profile Image */}
        <img src={profileImage} alt="Megha" className="hero-image" />

        <h1>
          Hi, I'm <span className="highlight">Megha E G</span>
        </h1>
        <p>A 2nd Year Computer Science Student | Web Developer | Data Analyst</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
