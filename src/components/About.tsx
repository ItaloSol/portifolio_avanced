import React, { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="section">
      <h2 className="text-3xl text-[#00d4ff] mb-4">Sobre Mim</h2>
      <div className="card">
        <p className={`${isExpanded ? 'max-h-full' : 'max-h-40'} overflow-hidden transition-all duration-300`}>
          Desenvolvedor Full Stack Pleno com foco em JavaScript e PHP, com ampla experiência na criação de sistemas e soluções web. Sou pós-graduado em Inteligência Artificial e Engenharia de Software pela UNOPAR. Agora estou estudando cybersecurity na Universidade da Segurança da Informação <br/><br/>
          Minha trajetória inclui um período de trabalho no Exército Brasileiro, onde desenvolvi o sistema de escala de serviço híbrido para o quartel da gráfica, que foi reconhecido por sua eficiência e inovação. Além disso, fui parte fundamental no desenvolvimento do sistema de gerenciamento de produção SISGRAFEx Web, que transformou o processo produtivo da gráfica, reduzindo custos e desperdícios.<br/><br/>
          Sou apaixonado por tecnologia e tenho um compromisso constante com a excelência e qualidade em meus projetos. Tenho domínio em PHP, JavaScript, Vue.js, API REST, SQL e MySQL, além de uma sólida base em React, Laravel e Node.js, que estou sempre aperfeiçoando. Também possuo certificações em JavaScript ES6, CSS Flexbox, Tailwind CSS e Bootstrap 4.<br/><br/>
          Meu objetivo é continuar evoluindo, enfrentando novos desafios com curiosidade e proatividade, e contribuir para o desenvolvimento de sistemas e soluções web que realmente façam a diferença e agreguem valor aos negócios.
        </p>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          {isExpanded ? 'Ver Menos' : 'Ver Mais'}
        </button>
      </div>
    </section>
  );
};

export default About;