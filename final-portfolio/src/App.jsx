import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ToolsStrip from './components/ToolsStrip';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode(prev => !prev);
  }

  return (
    <>
      <Nav darkMode={darkMode} onToggle={toggleTheme} />
      <Hero darkMode={darkMode} />
      <ToolsStrip />
      <Projects />
      <Skills />
      <Footer />
      <ChatWidget />
    </>
  );
}

export default App;