import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {[1, 2, 3].map(num => (
          <div key={num} className="project-card">
            <h3>Project {num}</h3>
            <p>Details about the project {num}.</p>
          </div>
        ))}
      </div>
    </section>
  );
}