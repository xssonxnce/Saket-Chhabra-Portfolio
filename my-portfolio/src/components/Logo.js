// src/components/Logo.jsx
import React from "react";

function Logo() {
  return (
    // Student Note: I'm replacing the old SVG logo with my new PNG image.
    // I put 'sc-logo.png' in the 'public' folder, so I can just reference it directly by path.
    <img
      src="/sc-logo.png"
      alt="SC Logo"
      className="custom-logo" // I'm adding a class for styling
    />
  );
}

export default Logo;