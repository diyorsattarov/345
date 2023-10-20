import './App.css';
import { Flowbite } from 'flowbite-react';
// import Timeline from './components/Timeline/Timeline';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import React, { useState, useEffect } from 'react';

function App() {
  const storedDarkMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Save the dark mode state to local storage
    localStorage.setItem('darkMode', newDarkMode);
  };

  useEffect(() => {
    // Apply the dark mode class to the body
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);
  return (
    <>
      <Flowbite>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </Flowbite>
    </>
  )
}

export default App
