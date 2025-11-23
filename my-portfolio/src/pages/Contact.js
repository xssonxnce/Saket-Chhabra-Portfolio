// src/pages/Contact.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContact } from "../services/api"; // This imports the API connector

function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', message: '' });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  // THIS IS THE NEW PART THAT SENDS TO DATABASE
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log("Sending data:", form); // Check console to see this
      await createContact(form);          // verification: calls the API
      alert("Message Sent to Database!"); // verification: success popup
      navigate('/'); 
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Check console for details.");
    }
  }

  return (
    <main className="container page contact-page">
      <h1>Contact Me</h1>
      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <label>First Name <input name="firstName" value={form.firstName} onChange={handleChange} required /></label>
            <label>Last Name <input name="lastName" value={form.lastName} onChange={handleChange} required /></label>
          </div>
          <label>Phone <input name="phone" value={form.phone} onChange={handleChange} /></label>
          <label>Email <input name="email" type="email" value={form.email} onChange={handleChange} required /></label>
          <label>Message <textarea name="message" rows="5" value={form.message} onChange={handleChange} required /></label>
          <button type="submit" className="button">Send Message</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;