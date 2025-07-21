import React from 'react';
import './Vehicles.css';
import combustion from '../Assets/combustion.jpg';
import solar from '../Assets/solar.jpg';
import electric from '../Assets/electric.jpg';

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
                    ? combustion
                    : num === 2
                      ? solar
                      : electric
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
