// src/pages/About.jsx
// About Me page with photo, short bio, and resume link.
// Teacher requested legal name, headshot, short paragraph, and resume PDF link.
// Comments are written like a student explaining their code.

import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="container page about-page">
      {/* About section with photo on left and text on right */}
      <section className="about-grid">
        <div className="about-photo">
          {/* Replace this with your real headshot in public folder */}
          <img src="/me.jpg" alt="Saket headshot (replace with your photo)" />
        </div>

        <div className="about-content">
          <h1>Saket (legal name)</h1>
          {/* Short professional paragraph about yourself */}
          <p>
            I am a software engineering student with experience in software testing and web development.
            I have completed internships and worked on projects using React, HTML, CSS, and JavaScript.
          </p>
          <p>
            Currently pursuing further studies while building projects that demonstrate my skills in web development.
          </p>

          {/* Resume + Contact buttons */}
          <div className="resume-actions">
            {/* Resume PDF link */}
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="button">
              Download Resume (PDF)
            </a>
            {/* Quick link to Contact page */}
            <Link to="/contact" className="button ghost">Get in Touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
