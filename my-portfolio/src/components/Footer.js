// src/components/Footer.jsx

import React from "react";
// Student Note: I'm importing the icons I need for my footer links.
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        {/* Student Note: Updated the copyright text to be more professional as requested. */}
        <p>© {new Date().getFullYear()} Saket Chhabra. All rights reserved.</p>

        {/* Student Note: These are my four icon links for the right side. */}
        <nav className="footer-links">
          {/* Resume Link */}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" aria-label="Resume">
            <IoDocumentText />
          </a>
          {/* LinkedIn Link (remember to add your real URL) */}
          <a href="https://www.linkedin.com/in/saket-chhabra-64271a242/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          {/* GitHub Link (remember to add your real URL) */}
          <a href="https://github.com/xssonxnce" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          {/* Email Link */}
          <a href="mailto:saketchhabra@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;