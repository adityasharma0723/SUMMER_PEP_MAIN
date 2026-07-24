import React from "react";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section section-alt projects-section">
      <div className="wrapper">
        <h2 className="sec-title">My <span>Projects</span></h2>
        <div className="divider"></div>
        <p className="sec-sub">Things I've built and worked on</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">

              {/* Card Header: Number + Date */}
              <div className="project-header">
                <span className="project-num">#{index + 1}</span>
                <span className="project-duration">{project.duration}</span>
              </div>

              {/* Title */}
              <h3 className="project-title">{project.title}</h3>

              {/* Description */}
              <p className="project-desc">{project.description}</p>

              {/* Tech Stack Tags */}
              <div className="tech-tags">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              {/* GitHub Link */}
              {project.githubLink && (
                <div className="project-footer">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                    View on GitHub ↗
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
