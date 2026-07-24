import React from "react";

export default function Education({ education }) {
  return (
    <section id="education" className="section education-section">
      <div className="wrapper">
        <h2 className="sec-title">My <span>Education</span></h2>
        <div className="divider"></div>
        <p className="sec-sub">My academic background</p>

        <div className="edu-list">
          {education.map((item, index) => (
            <div key={index} className="edu-card">
              <p className="edu-duration">{item.duration}</p>
              <h3 className="edu-school">{item.institution}</h3>
              <p className="edu-degree">{item.degree}</p>
              <div className="edu-footer">
                <span className="edu-grade">{item.grade}</span>
                <span className="edu-loc">📍 {item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
