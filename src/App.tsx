import { useState } from 'react';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Galerya } from './components/Galerya';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { ThemeToggle } from './components/ThemeToggle';
import { FloatingThemeToggle } from './components/FloatingThemeToggle';
import { ClientRedirect } from './components/ClientRedirect';
import Squares from './components/Squares';
function App() {
  const [isRecruiter, setIsRecruiter] = useState(true);

  const handleToggle = () => setIsRecruiter(!isRecruiter);
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
      <Header isRecruiter={isRecruiter}/>
     
      <ThemeToggle isRecruiter={isRecruiter} onToggle={handleToggle} />
      <FloatingThemeToggle isRecruiter={isRecruiter} onToggle={handleToggle} />
      <div className="relative z-10">
        <Galerya />
        <Projects isRecruiter={isRecruiter} />
        {!isRecruiter && <ClientRedirect />}
        <AboutMe isRecruiter={isRecruiter} />
        <Skills isRecruiter={isRecruiter}/>
        {isRecruiter && <Experience />}
      {isRecruiter && <Education />}
       
      {isRecruiter &&  <Contact />} 
      </div>
      </div>
  );
}

export default App;