import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import CvDownload from './components/CvDownload';

function App() {
  return (
    <>
      <Background />
      <Header />
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <CvDownload />
      </div>
      <Footer />
    </>
  );
}

export default App;