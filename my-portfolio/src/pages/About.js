// src/pages/About.jsx

import React from "react";
import { Link } from "react-router-dom";

// Student Note: I'm defining the CSS styles directly in this file
// to make sure the layout works correctly.
const aboutLayoutStyle = {
  display: 'grid',
  gridTemplateColumns: '280px 1fr', // 280px for the image, the rest for text
  gap: '40px',
  marginTop: '40px',
  alignItems: 'flex-start'
};

const photoStyle = {
  width: '100%', // This will make the image fit inside its 280px container
  display: 'block'
};


function About() {
  return (
    <main className="container page about-page">
      {/* Applying the layout style directly to this div */}
      <div style={aboutLayoutStyle}>
        
        <aside className="about-sidebar">
          <div className="about-photo card">
            {/* Applying the image size style directly here */}
            <img src="/me.jpg" alt="A professional headshot of Saket Chhabra" style={photoStyle} />
          </div>
        </aside>

        <div className="about-main-content">
          <div className="card">
            <h1>Saket Chhabra</h1>
            <p>
              I’m Saket, a software engineering enthusiast with a strong academic
              foundation and hands-on industry experience. I completed my
              Bachelor’s in Computer Science and Engineering from Chitkara
              University with a CGPA of 8.77. During my final year,
              I gained valuable industry exposure through my internship at
              KocharTech, where I worked in software testing. My key
              achievement was independently handling a major client — Etisalat —
              by testing their agent monitoring software.
            </p>
          </div>

          <div className="timeline-section card">
            <h2>Timeline</h2>
            <ul className="timeline-list">
              <li>
                <span className="timeline-date">2019–2023:</span><br/>
                Bachelor’s in Computer Science & Engineering, Chitkara University
              </li>
              <li>
                <span className="timeline-date">2022:</span><br/>
                Internship at KocharTech (Software Testing)
              </li>
              <li>
                <span className="timeline-date">2023:</span><br/>
                Offered full-time role at KocharTech
              </li>
              <li>
                <span className="timeline-date">2025 (Present):</span><br/>
                Software Engineering Technology – AI at Centennial College
              </li>
            </ul>
          </div>
          
          <div className="resume-actions card">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="button">
              Download Resume (PDF)
            </a>
            <Link to="/contact" className="button ghost">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;