import React from "react";

export default function Header({ personalInfo }) {
  return (
    <header className="portfolio-header">
      <div className="header-inner">
        <span className="nav-logo">{personalInfo.name}</span>
        <nav className="nav-links">
          <a href="#about"          className="nav-link">About</a>
          <a href="#skills"         className="nav-link">Skills</a>
          <a href="#projects"       className="nav-link">Projects</a>
          <a href="#education"      className="nav-link">Education</a>
          <a href="#certifications" className="nav-link">Certifications</a>
          <a href="#contact"        className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}
