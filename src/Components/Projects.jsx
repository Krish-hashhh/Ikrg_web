import React from 'react';
import './Projects.css';
import p1 from '../Assets/p1.jpeg';
import p2 from '../Assets/p2.jpeg';
import p3 from '../Assets/p3.jpeg';

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Competitions</h2>
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
            {
              <p>
                {
                  num === 1
                    ? "NASA-HERC"
                    : num === 2
                      ? "IKR 2024"
                      : "FKDC 2025"
                }
              </p>
            }
          </div>
        ))}
      </div>
    </section>
  );
}