import React, { useState } from 'react';
import './News.css';

export default function News() {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsData = [
    {
      id: 1,
      title: "Kavan's Interview",
      content: (
        <>
          <p><strong>Q:</strong> What inspired you to join IKRG? How did it begin and what was your initial role on the team?</p>
          <p><strong>A:</strong> I’ve always been passionate about mechanical core and practical prototyping, which led me to IKRG. My first role was designing and manufacturing our kart’s chassis, with which we placed 3rd in the EV category at Buddh F1 Circuit. Now, as CTO, I lead chassis design, electrical integration, and manufacturing for our upcoming FKDC competition in Coimbatore.</p>
        </>
      ),
    },
    {
      id: 2,
      title: "Manan's Interview",
      content: (
        <>
          <p><strong>Q:</strong> How long have you been interested in Motorsports, and what interests you about it?</p>
          <p><strong>A:</strong> I’ve loved cars since childhood—I could identify them by tail lights. I got into Motorsports in 11th grade through F1, and what inspires me is how teams innovate within strict rules to push technology forward. Alongside the engineering, I’m equally drawn to the thrill of speed and the precision of high-stakes racing.</p>
        </>
      ),
    },
  ];

  const closeModal = () => setSelectedNews(null);

  return (
    <section className="news" id="news">
      <h2>Latest News</h2>
      <div className="news-list">
        {newsData.map(news => (
          <div
            key={news.id}
            className="news-card"
            onClick={() => setSelectedNews(news)}
          >
            <h3>{news.title}</h3>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {selectedNews && (
        <div className="news-popup" onClick={closeModal}>
          <div className="news-popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h3>{selectedNews.title}</h3>
            <div className="news-body">{selectedNews.content}</div>
          </div>
        </div>
      )}
    </section>
  );
}
