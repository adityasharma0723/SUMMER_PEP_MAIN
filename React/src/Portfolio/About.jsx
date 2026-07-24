import React from "react";

export default function About({ personalInfo, socials }) {
  const { name, title, bio, location } = personalInfo;

  return (
    <section id="about" className="hero-section">
      <div className="hero-inner">

        {/* Profile Emoji Avatar */}
        <div className="hero-emoji">🧑‍💻</div>

        {/* Text Content */}
        <div>
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">{name}</h1>
          <p className="hero-role">{title} · 📍 {location}</p>
          <p className="hero-bio">{bio}</p>

          <div className="hero-btns">
            <a href="#projects" className="btn-blue">View Projects</a>
            <a href="#contact"  className="btn-outline">Contact Me</a>
          </div>

          <div className="hero-links">
            {socials.github && (
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hero-link">
                GitHub ↗
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hero-link">
                LinkedIn ↗
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
