// src/pages/Projects.jsx
// Projects page displays at least 3 projects with description and role.
// Teacher requires image + short description for each project.

import React from "react";

function Projects() {
  // Student Note: This is my final list of projects for the portfolio.
  const projects = [
    {
      id: 1,
      title: 'Agent Monitoring Dashboard',
      desc: 'Internship project: QA and automation for an agent monitoring app (Etisalat client). I tested flows and reported defects.',
      role: 'Manual tester & test case author',
    },
    {
      id: 2,
      title: 'Android Music Application',
      desc: 'A small music player made using Java and android.',
      role: 'Developer', // Added role for consistency
    },
    {
      id: 3,
      title: 'Vintage Gadget Swap',
      desc: 'University project to create an impactful website (done in MERN stack). In VGS people can swap their old gadgets for redeem points that can be converted to redeem card once specific points are completed.',
      role: 'Frontend and database management',
    },
  ];

  return (
    <main className="container page projects-page">
      <h1>Projects</h1>
      <p className="sub">Some projects that showcase my skills.</p>

      <div className="projects-grid">
        {projects.map(p => (
          <article key={p.id} className="project-card">
            {/* Student Note: I've removed the project-image div to hide the pictures as requested. */}
            <div className="project-body">
              <h3>{p.title}</h3>
              <p className="muted">Role: {p.role}</p>
              <p>{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Projects;