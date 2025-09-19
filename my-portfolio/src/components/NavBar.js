// src/components/NavBar.jsx
// Top navigation bar with custom SVG logo and links to all pages.

import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
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
          <li><Link to="/contact" className="cta">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
