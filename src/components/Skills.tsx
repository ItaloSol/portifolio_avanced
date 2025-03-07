import React from "react";
import { AnimatedText } from "./AnimatedText";
import { ScrollFloat } from "./ScrollFloat";
import LetterGlitch from "./LetterGlitch";
import Squares from './Squares';

interface SkillsProps {
  isRecruiter: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isRecruiter }) => {
  const recruiterSkills = [
    {
      name: 'PHP',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Vue.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
    },
    {
      name: 'Laravel',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/laravel/laravel-line.svg'
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'SQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
      name: 'MySQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'
    },
    {
      name: 'API REST',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    
    {
      name: 'Tailwind CSS',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg'
    }
  ];
  const clientSkills = [
    {
      name: 'Websites Responsivos',
      logo: ''
    },
    {
      name: 'Sistemas Web',
      logo: '',
    },
    {
      name: 'E-commerce',
      logo: '',
    },
    {
      name: 'Aplicações Móveis',
      logo: '',
    },
    {
      name: 'Integrações API',
      logo: '',
    },
    {
      name: 'SEO',
      logo: '',
    },
    {
      name: 'Performance',
      logo: '',
    },
    {
      name: 'Segurança',
      logo: '',
    },
  ];
  const skills = isRecruiter ? recruiterSkills : clientSkills;
  return (
    <section className="relative py-20 bg-sky-600/70 overflow-hidden">
      {/* Efeito LetterGlitch no fundo */}
      <div className="absolute inset-0 z-0 opacity-50">
         <Squares 
            speed={0.5} 
            squareSize={40}
            direction='up' // up, down, left, right, diagonal
            borderColor='#fff'
            hoverFillColor='#222'
            />
      {/* {isRecruiter &&
      <LetterGlitch 
      
  glitchColors={["#ff0000", "#00ff00", "#0000ff"]} // Adicione cores adequadas
  glitchSpeed={50}
  centerVignette={true}
  outerVignette={false}
  smooth={true}
/> } */}
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-white">{isRecruiter ? 'Competências' : 'Soluções'}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <ScrollFloat key={index}>
              <div className="bg-opacity-90 bg-gray-900 p-4 rounded-lg text-center">
                <div className="skill flex flex-col items-center justify-center gap-2 p-3">
                  {isRecruiter ? ( <> <img 
                    src={skill.logo} 
                    alt={`${skill.name} logo`} 
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  /></> ) : ( '' )} 
                  <span className="text-sm sm:text-base font-semibold text-white">{skill.name}</span>
                </div>
              </div>
            </ScrollFloat>
          ))}
        </div>
      </div>
    </section>
  );
};
