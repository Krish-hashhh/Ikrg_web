import React from 'react';
import './Projects.css';
import p1 from '../Assets/p1.jpeg';
import p2 from '../Assets/p2.jpeg';
import p3 from '../Assets/p3.jpeg';

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {[1, 2, 3].map(num => (
          <div key={num} className="project-card">
            <div className="project-image">
              <img
                src={
                  num === 1
                    ? p1
                    : num === 2
                      ? p2
                      : p3
                }></img>
            </div>
            <h3>Project {num}</h3>
            <p>Details about the project {num}.</p>
          </div>
        ))}
      </div>
    </section>
  );
}