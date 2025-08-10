import React from 'react';
import './Sponsors.css';
import BKT from '../Assets/BKT.jpg';
import ansys from '../Assets/ansys.png';
import solidworks from '../Assets/solidworks.jpg';
import NBC_logo from '../Assets/NBC_logo.png';
import mahindra from '../Assets/mahindra.jpeg';
import ms from '../Assets/ms.jpeg';
import altair from '../Assets/altair.png';
import autodesk from '../Assets/autodesk.jpg';
import bosch from '../Assets/bosch.png';
import cj from '../Assets/cj.jpeg';
import efneo from '../Assets/efneo.jpeg';
import birla from '../Assets/birla.jpeg';
import hero from '../Assets/hero.png';


export default function Sponsors() {
  const sponsorImages = [
    BKT,
    ansys,
    NBC_logo,
    solidworks,
    mahindra,
    ms,
    altair,
    autodesk,
    bosch,
    cj,
    efneo,
    birla,
    hero
  ];
  return (
    <section className="sponsors" id="sponsors">
      <h2>Our Sponsors</h2>
      <div className="sponsor-logos">
        {sponsorImages.map((logo,index) => (
          <div key={index} className="sponsor-logo">
            <div className="sponsor-image">
              <img src={logo} alt={`Sponsor ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}