import React from "react";
import { ScrollFloat } from "./ScrollFloat";


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
      name: 'Laravel',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/laravel/laravel-line.svg'
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
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Next.js',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/nextjs/nextjs-original.svg'
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
      name: 'MongoDB',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mongodb/mongodb-original.svg'
    },
    {
      name: 'PostgreSQL',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/postgresql/postgresql-original.svg'
    },
    {
      name: 'API REST',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    {
      name: 'Vite',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/vite/vite-original.svg'
    },
    {
      name: 'Boostrap',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/bootstrap/bootstrap-original.svg'
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg'
    },
    {
      name: 'Python',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/python/python-original.svg'
    }
  ];
  const clientSkills = [
    {
      name: 'Websites Responsivos',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'Sistemas Web',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg',
    },
    {
      name: 'E-commerce',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopware/shopware-original.svg',
    },
    {
      name: 'Aplicações Móveis',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
    },
    {
      name: 'Integrações API',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    },
    {
      name: 'SEO',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    },
    {
      name: 'Performance',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
    },
    {
      name: 'Segurança',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg',
    },
  ];
  const skills = isRecruiter ? recruiterSkills : clientSkills;
  return (
    <section className="relative py-20 bg-blue-90 overflow-hidden">
      {/* Efeito LetterGlitch no fundo */}
     

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-white">{isRecruiter ? 'Competências' : 'Soluções'}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <ScrollFloat key={index}>
              <div className="bg-opacity-90 bg-gray-900 p-4 rounded-lg text-center">
                <div className="skill flex flex-col items-center justify-center gap-2 p-3">
                  <img 
                    src={skill.logo} 
                    alt={`${skill.name} logo`} 
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
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
