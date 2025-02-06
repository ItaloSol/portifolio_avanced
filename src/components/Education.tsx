import React from 'react';

const education = [
  {
    degree: 'Especialização em Cybersecurity',
    institution: 'Universidade da Segurança da Informação',
    year: '2025'
  },
  {
    degree: 'Pós-graduação em Engenharia de Software',
    institution: 'UNOPAR',
    year: '2024'
  },
  {
    degree: 'Pós-graduação em Inteligência Artificial',
    institution: 'UNOPAR',
    year: '2023'
  },
  {
    degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'UNOPAR',
    year: '2023'
  }
];

const Education = () => {
  return (
    <section className="section">
      <h2 className="text-3xl text-[#00d4ff] mb-4">Formação Acadêmica</h2>
      <div className="card">
        {education.map((edu, index) => (
          <p key={index} className="mb-2">
            <strong className="text-[#00d4ff]">{edu.degree}</strong>
            {' - '}{edu.institution} ({edu.year})
          </p>
        ))}
      </div>
    </section>
  );
};

export default Education;