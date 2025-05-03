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
import Particles from './components/Particles/Particles';


function App() {
  const [isRecruiter, setIsRecruiter] = useState(true);

  const handleToggle = () => setIsRecruiter(!isRecruiter);
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden"> {/* Added relative and overflow-hidden */}
       {/* Partículas no fundo */}
       <Particles
         particleColors={['#ffffff', '#ffffff']}
         particleCount={1000} // Increased particle count
         particleSpread={10}
         speed={0.1}
         particleBaseSize={100}
         moveParticlesOnHover={true}
         alphaParticles={false}
         disableRotation={false}
         className="absolute inset-0 z-0" // Ensure it's behind other content with z-0
       />

      {/* Wrap existing content in a relative container to ensure it appears above particles */}
      <div className="relative z-10">
        <Header isRecruiter={isRecruiter}/>

        <ThemeToggle isRecruiter={isRecruiter} onToggle={handleToggle} />
        <FloatingThemeToggle isRecruiter={isRecruiter} onToggle={handleToggle} />
        {/* Removed the extra relative z-10 div here as the parent now handles it */}
        <Galerya />
        <Projects isRecruiter={isRecruiter} />
        {!isRecruiter && <ClientRedirect />}

        <div className="relative"> {/* This relative might still be needed depending on specific child styling */}
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