import './App.css';
import { Flowbite } from 'flowbite-react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Router>
          <Switch>
            <Route path="/" exact>
              {/* The component to render for the home page */}
              <Home />
            </Route>
            <Route path="/about">
              {/* The component to render for the about page */}
              <About />
            </Route>
            <Route path="/contact">
              {/* The component to render for the contact page */}
              <Contact />
            </Route>
          </Switch>
        </Router>
      </Flowbite>
    </>
  );
}

// Define your individual page components, for example:
function Home() {
  return <div>Home Page Content</div>;
}

function About() {
  return <div>About Page Content</div>;
}

function Contact() {
  return <div>Contact Page Content</div>;
}

export default App;
