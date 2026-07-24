import React from "react";

export default function Certifications({ certifications, achievements }) {
  return (
    <section id="certifications" className="section section-alt certs-section">
      <div className="wrapper">
        <h2 className="sec-title">Certifications &amp; <span>Achievements</span></h2>
        <div className="divider"></div>
        <p className="sec-sub">Credentials and milestones I've earned</p>

        <div className="certs-grid">
          {/* Left Column: Certifications */}
          <div>
            <p className="col-label">Certifications</p>
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <span className="cert-icon">🎖️</span>
                <div>
                  <p className="cert-name">{cert.title}</p>
                  <p className="cert-meta">
                    <strong>{cert.issuer}</strong> · {cert.date}
                  </p>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                      Verify →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Achievements */}
          <div>
            <p className="col-label">Achievements</p>
            {achievements.map((ach, index) => (
              <div key={index} className="ach-card">
                <span className="ach-icon">🏆</span>
                <div>
                  <p className="ach-title">{ach.title}</p>
                  <p className="ach-desc">{ach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
