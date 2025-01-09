import React, { useState, useEffect } from 'react';

const LayoutFeature = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check if a theme was previously set in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      setIsDarkMode(false);
      document.body.classList.remove('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div>
      <h1>Change Layout</h1>
      <div className="theme-selector">
        <button onClick={toggleTheme}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  );
};

export default LayoutFeature;
