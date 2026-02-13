import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Quiz from "./pages/Quiz";
import Results from "./pages/Result";
import DevPanel from "./components/DevPanel";

export default function App() {
  // Initialize dark mode from localStorage or default to false
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  // Toggle dark mode and save to localStorage
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <Router>
      <DevPanel />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/quiz" element={<Quiz darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/results" element={<Results darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </Router>
  );
}
