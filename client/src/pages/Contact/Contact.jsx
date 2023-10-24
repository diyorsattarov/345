import React from 'react';
import './Contact.css';

function Contact({ darkMode, toggleDarkMode }) {
  return (
    <div className={`home ${darkMode ? 'dark' : ''}`}>
      {/* Your Home page content goes here */}
      <div className="content">
        <h1>Welcome to the Contact page</h1>
        <p>This is your contact page content.</p>
      </div>
    </div>
  );
}

export default Contact;
