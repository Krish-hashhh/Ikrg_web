import React from 'react';
import './Sponsors.css';
import BKT from '../Assets/BKT.jpg';
import ansys from '../Assets/ansys.png';
import solidworks from '../Assets/solidworks.jpg';
import NBC_logo from '../Assets/NBC_logo.png';


export default function Sponsors() {
  return (
    <section className="sponsors" id="sponsors">
      <h2>Our Sponsors</h2>
      <div className="sponsor-logos">
        {[1, 2, 3, 4].map(num => (
          <div key={num} className="sponsor-logo">
            <div className="sponsor-image">
              <img
                src={
                  num === 1
                    ? BKT
                    : num === 2
                      ? ansys
                      : num ===3 ? NBC_logo : solidworks
                }></img>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}