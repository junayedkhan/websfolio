import React, { useState, useEffect } from 'react';
import Router from './router/Router';
import "../src/assets/scss/main.scss"

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const json = localStorage.getItem("dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("dark-mode", json);
  }, [darkMode]);

  return (
    <>
      {/* == dark mode button start */}
      <button
        className="dark_and_light_btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ?
        (<i className="fas fa-sun" style={{color: "#c4cfde"}}></i>) :
        (<i className="fas fa-moon" style={{color: "#212428"}}></i>)}
      </button>
      {/* == dark mode button end */}

      {/* == all route == */}
      <Router />
    </>
  );
}

export default App;
