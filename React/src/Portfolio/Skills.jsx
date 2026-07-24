import React, { useState } from "react";

export default function Skills({ skills }) {
  // Get unique categories and add "All" at the start
  const categories = ["All", ...new Set(skills.map((s) => s.category))];
  const [active, setActive] = useState("All");

  // Filter skills based on the selected category
  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="section skills-section">
      <div className="wrapper">
        <h2 className="sec-title">My <span>Skills</span></h2>
        <div className="divider"></div>
        <p className="sec-sub">Click a category to filter the skills</p>

        {/* Category Filter Buttons */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills List */}
        <div className="skills-cloud">
          {filtered.map((skill) => (
            <span key={skill.name} className="skill-chip">
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
