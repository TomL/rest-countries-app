import { useState, useEffect } from 'react';

// hook to toggle dark mode, returns a function to toggle dark mode
// gets the prefered color scheme from the browser
// saves user choice to localStorage
export default function useDarkMode() {
  // get dark mode preference from local storage or OS
  const preferDarkMode =
    localStorage.getItem('darkMode') != null
      ? JSON.parse(localStorage.getItem('darkMode') || 'false')
      : window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(preferDarkMode);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    // listen for changes to the OS preference as some users set dark mode
    // based on time of day
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        //unset local storage if OS preference changes
        localStorage.removeItem('darkMode');
        setDarkMode(event.matches);
      });
  }, []);

  useEffect(() => {
    // tail wind css requires dark mode class to be set above all other classes
    // so we set it on the root element
    const root = window.document.documentElement;
    root.classList.remove('dark');
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      root.classList.add('dark');
    }
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
}
