import React from 'react';
import './JoinModal.css';

export default function JoinModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Join the Team</h2>
        <p>We're always looking for passionate new members!</p>
        <form className="join-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Apply Now</button>
        </form>
      </div>
    </div>
  );
}