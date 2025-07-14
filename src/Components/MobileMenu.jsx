import React from 'react';
import './MobileMenu.css';

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      <button className="close-mobile" onClick={onClose}>×</button>
      <nav>
        {['HOME', 'ABOUT', 'TEAM', 'VEHICLES', 'PROJECTS', 'SPONSORS', 'NEWS', 'CONTACT'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={onClose}>
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
}
