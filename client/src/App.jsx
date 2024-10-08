import './App.css';
import { Flowbite } from 'flowbite-react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

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
    <BrowserRouter>
      <Flowbite>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </Flowbite>
    </BrowserRouter>
  );
}

export default App;
