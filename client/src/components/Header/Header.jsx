import React from 'react';
import { DarkThemeToggle } from 'flowbite-react';
import './Header.css';

function Header({ darkMode, toggleDarkMode }) {
  return (  
    <div className={`header ${darkMode ? 'dark' : ''}`}>
      <div className="header-content">
        <NavigationBar darkMode={darkMode} />
        <DarkThemeToggle onClick={toggleDarkMode} className={darkMode ? 'dark' : ''} />
      </div>
    </div>
  );
}

function NavigationBar({ darkMode }) {
  return (
    <nav className={`navigation-bar ${darkMode ? 'dark' : ''}`}>
      <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;
