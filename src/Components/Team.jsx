import React from 'react';
import './Team.css';
import pmImage from '../Assets/pm.jpg'; 



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
      linkedin: 'https://linkedin.com/in/nisha',
      email: 'mailto:nisha@bits-pilani.ac.in',
      image:'',
    },
    {
      name: 'Manan Gupta',
      role: 'COO',
      linkedin: 'https://linkedin.com/in/rohan',
      email: 'mailto:rohan@bits-pilani.ac.in',
      image:'',
    },
    {
      name: 'Ritesh',
      role: 'Mechanical Lead',
      linkedin: 'https://linkedin.com/in/sneha',
      email: 'mailto:sneha@bits-pilani.ac.in',
      image:'',
    },
    {
      name: 'ANS.S',
      role: 'Mechanical Lead',
      linkedin: 'https://linkedin.com/in/kunal',
      email: 'mailto:kunal@bits-pilani.ac.in',
      image:'',
    },
    {
      name: 'Kavin',
      role: 'Electrical Lead',
      linkedin: 'https://linkedin.com/in/tanya',
      email: 'mailto:tanya@bits-pilani.ac.in',
      image:'',
    },
    {
      name: 'Ashray',
      role: 'Sponsorship Lead',
      linkedin: 'https://linkedin.com/in/tanya',
      email: 'mailto:tanya@bits-pilani.ac.in',
      image:'',
    },
    {
      name: 'Krish Vora',
      role: 'CMO',
      linkedin: 'https://linkedin.com/in/tanya',
      email: 'mailto:tanya@bits-pilani.ac.in',
      image:'',
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
