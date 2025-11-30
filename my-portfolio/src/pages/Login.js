import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({ email: '', password: '' });

  const handleChange = (e) => setCreds({ ...creds, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', 'Test User');
    navigate('/projects');
    window.location.reload(); 
  };

  return (
    <main className="container page">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className="card" style={{maxWidth: '400px', margin: '0 auto'}}>
        <label>Email: <input name="email" type="email" onChange={handleChange} required /></label>
        <label>Password: <input name="password" type="password" onChange={handleChange} required /></label>
        <button type="submit" className="button" style={{marginTop:'10px'}}>Sign In</button>
      </form>
    </main>
  );
}