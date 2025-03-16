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
import Lightning from './components/Lightning/Lightning';
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
        
        <div className="relative">
          <div className="absolute inset-0 z-0 opacity-50">
            {isRecruiter && (
              <Lightning
                hue={220}
                xOffset={0}
                speed={1}
                intensity={1}
                size={1}
              />
            )}
          </div>
          <AboutMe isRecruiter={isRecruiter} />
          <Skills isRecruiter={isRecruiter}/>
        </div>

        {isRecruiter && <Experience />}
        {isRecruiter && <Education />}
        {isRecruiter && <Contact />}
      </div>
      </div>
  );
}

export default App;