// src/pages/Services.jsx

import React from "react";

// Student Note: I'm updating my services with a more detailed list.
// Each service is an object with a title and an array of points for the bullet list.
const services = [
  {
    title: 'Software Testing & Quality Assurance',
    points: [
      'Manual and automated testing',
      'Test case design, execution, and reporting',
      'Bug tracking and resolution support',
      'Ensuring software reliability and performance'
    ]
  },
  {
    title: 'AI & Software Engineering Solutions',
    points: [
      'Building intelligent applications with AI/ML integration',
      'Data preprocessing, model training, and evaluation',
      'AI-driven process automation'
    ]
  },
  {
    title: 'Web & Application Development',
    points: [
      'Designing and developing scalable applications',
      'Frontend and backend development',
      'API integration and database management'
    ]
  },
  {
    title: 'Client & Project Handling',
    points: [
      'Experience working directly with enterprise clients (e.g., Etisalat)',
      'Clear communication of technical solutions to stakeholders',
      'Independent project execution and delivery'
    ]
  },
  {
    title: 'IT Consultation & Support',
    points: [
      'Software troubleshooting',
      'Technology recommendations for businesses',
      'Workflow optimization through IT solutions'
    ]
  },
];

function Services() {
  return (
    <main className="container page services-page">
      <h1>Services</h1>
      <p className="sub">A breakdown of the professional services I can offer.</p>

      {/* Student Note: I'm mapping over my new services array to create a card for each one. */}
      <div className="services-grid">
        {services.map(service => (
          <div key={service.title} className="service-card card">
            <h3>{service.title}</h3>
            {/* Here, I'm mapping over the 'points' array for each service to create the bullet list. */}
            <ul>
              {service.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Services;