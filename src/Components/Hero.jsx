import React, { useState, useEffect } from 'react';
import './Hero.css';
import videoBG from '../Assets/BGV.mp4';


  const phrases = [
  'Electric Innovation',
  'Speed. Precision. Power.',
  'Driven by Passion',
];

export default function Hero() {
  const calculateTimeLeft = () => {
    const raceDate = new Date("2025-10-01T09:00:00");
    const difference = raceDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);



const [displayText, setDisplayText] = useState('');
const [index, setIndex] = useState(0);

useEffect(() => {
  const timeout = setTimeout(() => {
    setDisplayText('');
    let i = 0;
    const type = () => {
      if (i <= phrases[index].length) {
        setDisplayText(phrases[index].substring(0, i));
        i++;
        setTimeout(type, 80);
      } else {
        setTimeout(() => {
          setIndex((index + 1) % phrases.length);
        }, 2000);
      }
    };
    type();
  }, 200);

  return () => clearTimeout(timeout);
}, [index]);


  return (
    <section id="home" className="hero">
      <div className="overlay"></div>
      <div className="background-image">
        <video
          src={videoBG}
          autoPlay
          loop
          muted
          playsInline 
        />
      </div>
      <div className="hero-content">
        <h1>INSPIRED KARTERS <span className='text-accent'>GRAVITY.</span></h1>
        <p>Student-led motorsport team engineering the future of racing.</p>

        <p className="typing-text">{displayText}</p>


        <div className="countdown">
          <h3>Next Race In:</h3>
          <div className="time-box">
            <span className="time-unit">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="colon">:</span>
            <span className="time-unit">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="colon">:</span>
            <span className="time-unit">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="colon">:</span>
            <span className="time-unit">{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>

        <a href="#team">DISCOVER OUR TEAM</a>
      </div>
  
    </section>
  );
}
