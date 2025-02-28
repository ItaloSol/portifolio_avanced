import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
  
      {/* Conteúdo abaixo do Header */}
      <div className="relative z-10">
        <Projects />
        <AboutMe />
        <Skills />
        <Experience />
        <Education />
       
        <Contact />
      </div>
      </div>
  );
}

export default App;