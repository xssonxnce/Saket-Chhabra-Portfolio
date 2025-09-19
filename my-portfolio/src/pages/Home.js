// src/pages/Home.jsx
// Home page is the landing page.
// Includes welcome message, mission statement, and a link to About page.
// Teacher required: button linking to About or other pages + optional mission statement.

import React from "react";
import { Link, useLocation } from "react-router-dom";

function Home() {
  // If redirected from contact form, we show a message
  const location = useLocation();
  const message = location.state && location.state.message;

  return (
    <main className="container page home-page">
      {/* Show toast message if redirected from contact form */}
      {message && <div className="toast">{message}</div>}

      {/* Hero section: my intro */}
      <section className="hero">
        <div className="hero-text">
          <h1>Hello — I’m Saket.</h1>
          <p className="lead">
            I build clean, accessible web experiences. I focus on React,
            modern JavaScript, and thoughtful UX.
          </p>
          <div className="hero-actions">
            {/* Button to About page */}
            <Link to="/about" className="button">About Me</Link>
            {/* Button to resume */}
            <a href="/resume.pdf" className="button ghost" target="_blank" rel="noreferrer">
              Resume (PDF)
            </a>
          </div>
        </div>

        {/* On the right side, just a featured project card (Apple-like minimal design) */}
        <div className="hero-art">
          <div className="card">
            <h3>Featured Project</h3>
            <p>Small preview of a web app. Click Projects to see more.</p>
            <Link to="/projects" className="link">View Projects →</Link>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="philosophy">
        <h2>My Mission</h2>
        <p>
          To craft performant, maintainable web apps that prioritize clarity and
          accessibility. I enjoy simplifying complex problems and turning them
          into delightful interfaces.
        </p>
      </section>
    </main>
  );
}

export default Home;
