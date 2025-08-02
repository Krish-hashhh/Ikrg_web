import React from 'react';
import './Team.css';
import pmImage from '../Assets/pm.jpg'; 
import kavan from '../Assets/kavan.jpeg';
import manan from '../Assets/manan.jpeg';
import ritesh from '../Assets/ritesh.jpeg';
import ans from '../Assets/ans.jpeg';
import ashray from '../Assets/ashray.jpeg';
import kavin from '../Assets/kavin.jpeg';
import krish from '../Assets/krish.jpeg';

export default function Team() {
  const teamMembers = [
    {
      name: 'Pulkit Maheshwari',
      role: 'Team Captain',
      linkedin: 'https://www.linkedin.com/in/pulkitm0301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      email: 'mailto:arjun@bits-pilani.ac.in',
      image: pmImage,
    },
    {
      name: 'Kavan Lad',
      role: 'CTO',
      linkedin: 'https://www.linkedin.com/in/kavan-lad-ab77a5291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      email: 'mailto:nisha@bits-pilani.ac.in',
      image:kavan,
    },
    {
      name: 'Manan Gupta',
      role: 'COO',
      linkedin: 'https://www.linkedin.com/in/manan-gupta-473938319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      email: 'mailto:rohan@bits-pilani.ac.in',
      image:manan,
    },
    {
      name: 'Ritesh',
      role: 'Mechanical Lead',
      linkedin: 'https://www.linkedin.com/in/ritesh-nallamalli-77497a281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      email: 'mailto:sneha@bits-pilani.ac.in',
      image:ritesh,
    },
    {
      name: 'ANS.S',
      role: 'Mechanical Lead',
      linkedin: 'https://www.linkedin.com/in/nageswarasatyashirdinadh-avupati-824612336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      email: 'mailto:kunal@bits-pilani.ac.in',
      image:ans,
    },
    {
      name: 'Kavin',
      role: 'Electrical Lead',
      linkedin: 'https://www.linkedin.com/in/kavin-s-5196b9356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      email: 'mailto:tanya@bits-pilani.ac.in',
      image:kavin,
    },
    {
      name: 'Ashray',
      role: 'Sponsorship Lead',
      linkedin: 'https://linkedin.com/in/tanya',
      email: 'mailto:tanya@bits-pilani.ac.in',
      image:ashray,
    },
    {
      name: 'Krish Vora',
      role: 'CMO',
      linkedin: 'https://www.linkedin.com/in/krish-vora-59066b29b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      email: 'mailto:tanya@bits-pilani.ac.in',
      image:krish,
    },
  ];

  return (
    <section className="team" id="team">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-content">
              <div className="member-img">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="member-icons">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href={member.email}>
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
