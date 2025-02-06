import React from 'react';

const experiences = [
  {
    company: 'Exército Brasileiro',
    role: 'Desenvolvedor Web Full Stack Pleno',
    period: 'Março de 2021 - Março de 2025',
    achievements: [
      'Desenvolvimento de sistemas híbridos e sistemas de gerenciamento.',
      'Redução de custos e otimização de processos produtivos.'
    ]
  },
  {
    company: 'SoftSol',
    role: 'Designer Interativo e Desenvolvedor',
    period: 'Janeiro de 2019 - Março de 2021',
    achievements: [
      'Criação de lojas virtuais e e-commerces eficientes.',
      'Produção de designs criativos para identidade virtual.'
    ]
  }
];

const Experience = () => {
  return (
    <section className="section">
      <h2 className="text-3xl text-[#00d4ff] mb-4">Experiência Profissional</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="card">
          <h3 className="text-xl font-bold text-[#00d4ff]">{exp.company}</h3>
          <p className="text-gray-300 mt-2">{exp.role} - {exp.period}</p>
          <ul className="list-disc ml-6 mt-2">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="text-gray-300">{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;