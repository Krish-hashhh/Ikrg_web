import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Inspired Karters Gravity. All rights reserved.</p>
    </footer>
  );
}