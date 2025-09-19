// src/pages/Contact.jsx
// Contact page with form to capture user info and redirect to Home page.
// Teacher requested form with First Name, Last Name, Phone, Email, Message.

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  // Form state
  const [form, setForm] = useState({ first: '', last: '', phone: '', email: '', message: '' });
  const navigate = useNavigate();

  // Update form state on input
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    // Store form data locally (localStorage) to show that it captures input
    const submissions = JSON.parse(localStorage.getItem('contacts') || '[]');
    submissions.push({ ...form, date: new Date().toISOString() });
    localStorage.setItem('contacts', JSON.stringify(submissions));

    // Redirect home with a message
    navigate('/', { state: { message: 'Thanks! Your message was captured — check console/localStorage.' } });
  }

  return (
    <main className="container page contact-page">
      <h1>Contact Me</h1>
      <p className="sub">Leave a message — form captures data locally and redirects to Home.</p>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <label>
              First Name
              <input name="first" value={form.first} onChange={handleChange} required />
            </label>
            <label>
              Last Name
              <input name="last" value={form.last} onChange={handleChange} required />
            </label>
          </div>

          <label>
            Contact Number
            <input name="phone" value={form.phone} onChange={handleChange} />
          </label>

          <label>
            Email Address
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>

          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
          </label>

          <div className="form-actions">
            <button type="submit" className="button">Send Message</button>
            <button type="button" className="button ghost" onClick={() => setForm({ first: '', last: '', phone: '', email: '', message: '' })}>
              Clear
            </button>
          </div>
        </form>

        <aside className="contact-info">
          <div className="panel">
            <h3>Contact Details</h3>
            <p>Phone: +1 (000) 000-0000 (replace with your number)</p>
            <p>Email: your.email@example.com (replace with your email)</p>
            <p>Location: Toronto, Canada (update if needed)</p>
          </div>

          <div className="panel small">
            <h4>Quick Note</h4>
            <p>The form stores messages to localStorage at <code>contacts</code>. You can export or inspect that to demonstrate functionality.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Contact;
