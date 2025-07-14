import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Inspired Karters Gravity (IKRG) is a student-led motorsport team from BITS Pilani, driven by a shared passion for automotive engineering and innovation. We specialize in designing, building, and racing high-performance go-karts, combining technical precision with creative problem-solving.
          Our team brings together students from diverse disciplines to collaborate on all aspects of kart development — from chassis design and powertrain integration to electronics and driver ergonomics. Through this interdisciplinary effort, we aim to create competitive machines that stand out on and off the track.
          IKGR represents more than just speed; it's a platform for learning, leadership, and engineering excellence. Whether preparing for national competitions or testing new ideas in the workshop, we strive to push boundaries and grow as a team, one race at a time.
        </p>
        <div className="about-stats">
          <div className='statbox'>
            <h3>30+</h3>
            <p>Team Members</p>
          </div>
          <div className='statbox'>
            <h3>2</h3>
            <p>Prototypes Built</p>
          </div>
          <div className='statbox'>
            <h3>3</h3>
            <p>Competitions Won</p>
          </div>
        </div>
      </div>
    </section>
  );
}
