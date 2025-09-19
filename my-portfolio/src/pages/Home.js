// src/pages/Home.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
// Student Note: Importing all the icons I need for my skills list.
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaPhp, FaDatabase, FaPython, FaBug, FaGitAlt
} from 'react-icons/fa';
import { DiJqueryLogo } from "react-icons/di";
import { SiCplusplus, SiC } from 'react-icons/si';
import { VscSymbolStructure } from "react-icons/vsc";
import { GiArtificialIntelligence } from "react-icons/gi";


// Student Note: This is my list of skills.
const skills = [
  { name: 'Java', icon: <FaJava size={40} color="#007396" /> },
  { name: 'JavaScript', icon: <FaJsSquare size={40} color="#F7DF1E" /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} color="#1572B6" /> },
  { name: 'React', icon: <FaReact size={40} color="#61DAFB" /> },
  { name: 'SQL', icon: <FaDatabase size={40} color="#4479A1" /> },
  { name: 'Python', icon: <FaPython size={40} color="#3776AB" /> },
  { name: 'jQuery', icon: <DiJqueryLogo size={40} color="#0769AD" /> },
  { name: 'PHP', icon: <FaPhp size={40} color="#777BB4" /> },
  { name: 'C++', icon: <SiCplusplus size={40} color="#00599C" /> },
  { name: 'C', icon: <SiC size={40} color="#A8B9CC" /> },
  { name: 'Data Structures', icon: <VscSymbolStructure size={40} color="#555" /> },
  { name: 'AI Engineering', icon: <GiArtificialIntelligence size={40} color="#00A67E" /> },
  { name: 'QA Testing', icon: <FaBug size={40} color="#228B22" /> },
  { name: 'Git', icon: <FaGitAlt size={40} color="#F05032" /> },
];

function Home() {
  const location = useLocation();
  const message = location.state && location.state.message;

  return (
    <main className="container page home-page">
      {message && <div className="toast">{message}</div>}

      {/* Student Note: Updated my hero section with the new text. */}
      <section className="hero">
        <div className="hero-text">
          <h1>Hello — Saket here....</h1>
          <p className="lead">
            “It works on my machine.”
          </p>
          <div className="hero-actions">
            <Link to="/about" className="button">About Me</Link>
            <a href="/resume.pdf" className="button ghost" target="_blank" rel="noreferrer">
              Resume (PDF)
            </a>
          </div>
        </div>
        <div className="hero-art">
          <div className="card">
            <h3>Featured Project</h3>
            <p>Small preview of a web app. Click Projects to see more.</p>
            <Link to="/projects" className="link">View Projects →</Link>
          </div>
        </div>
      </section>

      {/* Student Note: Updated my mission statement with the new paragraph. */}
      <section className="card">
        <h2>My Mission</h2>
        <p>
          My mission is to use technology to solve real-world problems in smarter and more impactful ways. I aim to blend creativity with technical expertise to build solutions that make everyday life more efficient, accessible, and meaningful. For me, it’s not just about writing code — it’s about creating value, empowering people, and shaping a better digital future.
        </p>
      </section>

      {/* Power-Ups Section */}
      <section className="powerups-section">
        <h2>Power-Ups</h2>
        <div className="powerups-grid">
          {skills.map(skill => (
            <div key={skill.name} className="powerup-block">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;