// src/pages/Projects.jsx
// Projects page displays at least 3 projects with image, description, and role.
// Teacher requires image + short description for each project.

import React from "react";

function Projects() {
  // Array of project objects. Replace images and descriptions with your own.
  const projects = [
    {
      id: 1,
      title: 'Agent Monitoring Dashboard',
      img: '/project1.png',
      desc: 'Internship project: QA and automation for an agent monitoring app (Etisalat client). I tested flows and reported defects.',
      role: 'Manual tester & test case author',
    },
    {
      id: 2,
      title: 'Personal Blog (React)',
      img: '/project2.png',
      desc: 'A small blog engine built with React and a Markdown-based CMS for posts.',
      role: 'Frontend developer',
    },
    {
      id: 3,
      title: 'Todo Mobile App (Concept)',
      img: '/project3.png',
      desc: 'Prototype of a cross-platform todo app. Focused on UX and offline sync ideas.',
      role: 'Prototype & UI',
    },
  ];

  return (
    <main className="container page projects-page">
      <h1>Projects</h1>
      <p className="sub">Some projects that showcase my skills. Click images to see details.</p>

      <div className="projects-grid">
        {projects.map(p => (
          <article key={p.id} className="project-card">
            <div className="project-image">
              <img src={p.img} alt={`${p.title} screenshot (replace with your image)`} />
            </div>
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
