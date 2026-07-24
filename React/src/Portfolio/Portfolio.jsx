import React from 'react';
import './Portfolio.css';
import { portfolioData } from './portfolioData';

import Header       from './Header';
import About        from './About';
import Skills       from './Skills';
import Projects     from './Projects';
import Education    from './Education';
import Certifications from './Certifications';
import Contact      from './Contact';
import Footer       from './Footer';

export default function Portfolio() {
  const { personalInfo, skills, projects, education, certifications, achievements, socials } = portfolioData;

  return (
    <div className="portfolio-app">
      <Header personalInfo={personalInfo} />
      <main className="main-content">
        <About         personalInfo={personalInfo} socials={socials} />
        <Skills        skills={skills} />
        <Projects      projects={projects} />
        <Education     education={education} />
        <Certifications certifications={certifications} achievements={achievements} />
        <Contact       personalInfo={personalInfo} />
      </main>
      <Footer name={personalInfo.name} />
    </div>
  );
}
