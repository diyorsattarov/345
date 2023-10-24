import React from 'react';
import './Footer.css';

function Footer({ darkMode }) {
  const footerStyle = {
    background: darkMode ? '#15202b' : 'inherit', // Use dark background in dark mode
    color: darkMode ? '#ffffff' : 'inherit', // Use white text in dark mode
  };

  return (
    <footer className="footer" style={footerStyle}>
      <p className="copyright">WebApp Copyright 2023</p>
    </footer>
  );
}

export default Footer;
