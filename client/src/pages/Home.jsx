import React from 'react';

function Home({ darkMode, toggleDarkMode }) {
  return (
    <div className={`home ${darkMode ? 'dark' : ''}`}>
      {/* Your Home page content goes here */}
      <div className="content">
        <h1>Welcome to the Home Page</h1>
        <p>This is your home page content.</p>
      </div>
    </div>
  );
}

export default Home;
