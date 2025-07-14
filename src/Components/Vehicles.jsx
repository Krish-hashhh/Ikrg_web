import React from 'react';
import './Vehicles.css';
import v1 from '../Assets/v1.jpeg';
import v2 from '../Assets/v2.jpeg';
import v3 from '../Assets/v3.jpeg';

export default function Vehicles() {
  return (
    <section className="vehicles" id="vehicles">
      <h2>Our Vehicles</h2>
      <div className="vehicle-grid">
        {[1, 2, 3].map(num => (
          <div key={num} className="vehicle-card">
            <div className="vehicle-image">
              <img
                src={
                  num === 1
                    ? v1
                    : num === 2
                      ? v2
                      : v3
                }></img>
            </div>
            <h3>Vehicle {num}</h3>
            <p>High performance electric kart {num}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
