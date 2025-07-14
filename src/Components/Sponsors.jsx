import React from 'react';
import './Sponsors.css';

export default function Sponsors() {
  return (
    <section className="sponsors" id="sponsors">
      <h2>Our Sponsors</h2>
      <div className="sponsor-logos">
        {[1, 2, 3, 4].map(num => (
          <div key={num} className="sponsor-logo">Logo {num}</div>
        ))}
      </div>
    </section>
  );
}