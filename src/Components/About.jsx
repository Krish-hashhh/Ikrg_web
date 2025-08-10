import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Inspired Karters Gravity (IKRG) isn’t just a student motorsport team at BITS Pilani-It’s an incubator for raw passion and relentless innovation.Driven by a shared passion for automotive engineering, our story kicked off with audacious dreams: tackling the brutal BAJA SAE course and peddling through the prestigious NASA Human Exploration Rover Challenge (HERC), where we developed tough off-road vehicles and human-powered rovers that stretched the limits of our engineering aptitude.<br />
          Today, we’ve evolved those lessons into a new frontier-designing high-performance karts that race on Formula 1 class circuits like the Buddh International Circuit. We deliver reliable performance under rugged conditions through our meticulously designed karts, which are perfect for endurance racing. Here, mechanical engineers hash out ideas with coders and designers alike. We are not just building racing karts, we’re building a legacy-one race, one late-night epiphany, one boundary breaking engineer at a time. That’s Inspired Karters Gravity.
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
