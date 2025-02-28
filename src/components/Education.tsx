import React from 'react';
import { AnimatedText } from './AnimatedText';
import { ScrollFloat } from './ScrollFloat';

const education = [
  {
    degree: 'Especialização em Cybersecurity',
    institution: 'Universidade da Segurança da Informação'
  },
  {
    degree: 'Pós-graduação em Engenharia de Software',
    institution: 'UNOPAR'
  },
  {
    degree: 'Pós-graduação em Inteligência Artificial',
    institution: 'UNOPAR'
  },
  {
    degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'UNOPAR'
  }
];

export const Education: React.FC = () => {
  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <ScrollFloat>
          <h2 className="text-4xl font-bold mb-8">Formação Acadêmica</h2>
          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="bg-background p-8 rounded-lg">
                <AnimatedText
                  text={item.degree}
                  type="blur"
                  className="text-2xl font-bold mb-2"
                />
                <AnimatedText
                  text={item.institution}
                  type="decrypt"
                  className="text-xl text-primary mb-4"
                />
              </div>
            ))}
          </div>
        </ScrollFloat>
      </div>
    </section>
  );
};