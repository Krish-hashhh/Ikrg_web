import React from 'react';
import './News.css';

export default function News() {
  return (
    <section className="news" id="news">
      <h2>Latest News</h2>
      <div className="news-list">
        {[1, 2, 3].map(num => (
          <div key={num} className="news-card">
            <h3>News Title {num}</h3>
            <p>Brief description of news {num}.</p>
          </div>
        ))}
      </div>
    </section>
  );
}