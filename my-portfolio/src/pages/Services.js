// src/pages/Services.jsx
// Services page lists the services you provide with icons and description.
// Teacher asked for short list + optional images/icons to make it appealing.

import React from "react";

function Services() {
  // List of services — you can add more
  const services = [
    { id: 's1', title: 'Web Development', desc: 'React, HTML, CSS, JS — responsive, accessible sites' },
    { id: 's2', title: 'UI / UX Prototyping', desc: 'Wireframes and prototypes focusing on clarity and usability' },
    { id: 's3', title: 'QA & Testing', desc: 'Manual and basic automated testing experience (internship work)' },
  ];

  return (
    <main className="container page services-page">
      <h1>Services</h1>
      <p className="sub">Services I can offer to individuals and small teams.</p>

      <div className="services-grid">
        {services.map(s => (
          <div key={s.id} className="service-card">
            <div className="service-icon">■</div> {/* simple icon placeholder */}
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Services;
