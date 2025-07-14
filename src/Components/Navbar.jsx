import React from 'react';
import './Navbar.css';
import Logo from '../Assets/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="logo">
          <img src={Logo} alt="Logo" className="logo-img" />
          <span className="logo-name">
            IKRG
          </span>
        </a>
        <div className="nav-links">
          {['HOME', 'ABOUT', 'TEAM', 'VEHICLES', 'PROJECTS', 'SPONSORS', 'NEWS', 'CONTACT'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
