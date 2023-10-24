import React from 'react';

function About({ darkMode, toggleDarkMode }) {
  return (
    <div className={`home ${darkMode ? 'dark' : ''}`}>
      {/* Your Home page content goes here */}
      <div className="content">
        <h1>Welcome to the About Page</h1>
        <p>This is your about page content.</p>
      </div>
    </div>
  );
}

export default About;
