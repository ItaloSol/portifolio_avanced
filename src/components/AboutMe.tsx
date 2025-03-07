import React from 'react';
import { AnimatedText } from './AnimatedText';
import { ScrollFloat } from './ScrollFloat';
import Squares from './Squares';
interface AboutMeProps {
  isRecruiter: boolean;
}
export const AboutMe: React.FC<AboutMeProps> = ({ isRecruiter }) => {
  
  return (
   
    <section className="relative py-20 bg-blue-90 overflow-hidden">
      {/* Efeito LetterGlitch no fundo */}
      <div className="absolute inset-0 z-0 opacity-50">
      {isRecruiter &&
<Squares 
    speed={0.5} 
    squareSize={40}
    direction='up' // up, down, left, right, diagonal
    borderColor='#fff'
    hoverFillColor='#222'
    />
     }
</div>
      <div className="relative z-10 container mx-auto px-4">
        <ScrollFloat>
          <h2 className="text-4xl font-bold mb-8 text-white">Sobre Mim</h2>
          {isRecruiter ? (
            <>
          <AnimatedText
            text="Desenvolvedor Full Stack Pleno com foco em JavaScript e PHP, com ampla experiência na criação de sistemas e soluções web. Sou pós-graduado em Inteligência Artificial e Engenharia de Software pela UNOPAR. Agora estou estudando cybersecurity na Universidade da Segurança da Informação"
            type="decrypt"
            className="text-xl text-white-300"
          />
          <AnimatedText
            text="Sou apaixonado por tecnologia e tenho um compromisso constante com a excelência e qualidade em meus projetos. Tenho domínio em PHP, JavaScript, Vue.js, API REST, SQL e MySQL, além de uma sólida base em React, Laravel e Node.js, que estou sempre aperfeiçoando. Também possuo certificações em JavaScript ES6, CSS Flexbox, Tailwind CSS e Bootstrap 4."
            type="decrypt"
            className="text-xl py-3 text-white-300"
          />
            <AnimatedText
            text="Meu objetivo é continuar evoluindo, enfrentando novos desafios com curiosidade e proatividade, e contribuir para o desenvolvimento de sistemas e soluções web que realmente façam a diferença e agreguem valor aos negócios."
            type="decrypt"
            className="text-xl py-3 text-white-300"
          />
          </>
        ) : (
          <AnimatedText
            text="Especialista em desenvolvimento de soluções web personalizadas, focado em criar experiências digitais únicas e eficientes para empresas. Com expertise em segurança e inteligência artificial, desenvolvo sistemas que não apenas atendem às necessidades atuais, mas também estão preparados para os desafios do futuro."
            type="decrypt"
            className="text-xl text-white-300"
          />
        )}
        </ScrollFloat>
      </div>
    </section>
  );
};