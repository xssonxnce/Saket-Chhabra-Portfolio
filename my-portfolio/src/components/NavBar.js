// src/components/NavBar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
  const navigate = useNavigate();
  // Check if our "fake" user is logged in
  const user = localStorage.getItem('user');

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload(); // Refresh page to update the menu
  };

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <div className="brand">
          <Link to="/" className="brand-link" aria-label="Go to home">
            <Logo />
            <span className="brand-text">
                Saket Chhabra
            </span>
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/services">Services</Link></li>
          
          {/* LOGIC: If logged in, show Sign Out. If not, show Sign In/Up */}
          {user ? (
            <li>
              {/* This 'a' tag ensures it looks exactly like your other links */}
              <a href="/" onClick={handleLogout}>Sign Out</a>
            </li>
          ) : (
            <>
              <li><Link to="/login">Sign In</Link></li>
              <li><Link to="/register">Sign Up</Link></li>
            </>
          )}

          {/* Contact button stays as your CTA */}
          <li><Link to="/contact" className="cta">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;