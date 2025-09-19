// src/components/Footer.jsx
// This is the footer of the site. It appears on every page (like NavBar).
// I added copyright + links to resume and email.
// Keeping it simple because teacher said portfolio should look clean like Apple.

import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Saket — Portfolio for COMP229.</p>
        <nav className="footer-links">
          {/* Link to resume PDF stored in public folder */}
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          {/* Quick email link */}
          <a href="mailto:your.email@example.com">Email</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
