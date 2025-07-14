import React from 'react';
import './Vehicles.css';

export default function Vehicles() {
  return (
    <section className="vehicles" id="vehicles">
      <h2>Our Vehicles</h2>
      <div className="vehicle-grid">
        {[1, 2, 3].map(num => (
          <div key={num} className="vehicle-card">
            <div className="vehicle-image"></div>
            <h3>Vehicle {num}</h3>
            <p>High performance electric kart {num}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
