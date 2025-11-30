// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <main className="container page">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="card" style={{maxWidth: '400px', margin: '0 auto'}}>
        <label>First Name: <input name="firstName" onChange={handleChange} required /></label>
        <label>Last Name: <input name="lastName" onChange={handleChange} required /></label>
        <label>Email: <input name="email" type="email" onChange={handleChange} required /></label>
        <label>Password: <input name="password" type="password" onChange={handleChange} required /></label>
        <button type="submit" className="button" style={{marginTop:'10px'}}>Register</button>
      </form>
    </main>
  );
}