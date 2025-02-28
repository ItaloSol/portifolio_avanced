import React from 'react';
import { AnimatedText } from './AnimatedText';
import { ScrollFloat } from './ScrollFloat';

export const Experience: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ScrollFloat>
          <h2 className="text-4xl font-bold mb-8">Experiência Profissional</h2>
          <div className="bg-background p-8 rounded-lg">
            <AnimatedText
              text="Exército Brasileiro"
              type="split"
              className="text-2xl font-bold mb-2"
            />
            <AnimatedText
              text="Desenvolvedor Web Full Stack Pleno"
              type="blur"
              className="text-xl mb-2 text-primary"
            />
            <AnimatedText
              text="Março de 2021 - Março de 2025"
              type="decrypt"
              className="text-gray-400 mb-4"
            />
            <p className="text-gray-300">
              Desenvolvimento de sistemas híbridos e sistemas de gerenciamento utilizando PHP, Laravel, Vue.js, JavaScript, Node.js e MySQL.
            </p>
          </div>
        </ScrollFloat>
      </div>
    </section>
  );
};