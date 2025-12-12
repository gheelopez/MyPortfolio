import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsBand from './components/SkillsBand';
import About from './components/About';
import Experience from './components/Experience';
import Formation from './components/Formation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll functionality
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetElement = document.querySelector(target.getAttribute('href'));
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <SkillsBand />
      <About />
      <Experience />
      <Projects />
      <Formation />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
