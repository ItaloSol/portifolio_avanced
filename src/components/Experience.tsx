import React from 'react';
import { AnimatedText } from './AnimatedText';
import { ScrollFloat } from './ScrollFloat';

export const Experience: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ScrollFloat>
          <h2 className="text-4xl font-bold mb-8">Experiência Profissional</h2>
          {/* Apply transparent background and neon border to the card */}
          <div className="bg-black bg-opacity-30 backdrop-blur-sm border border-white rounded-lg shadow-[0_0_5px_rgba(255,255,255,0.5)] p-8"> {/* Updated classes */}
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
            🔹 Desenvolvimento de sistemas híbridos e sistemas de gerenciamento utilizando PHP, Laravel, Vue.js, JavaScript, Node.js e MySQL.
            </p>
            <p className="text-gray-300">
            🔹 Redução de custos e otimização de processos produtivos através da automação e gerenciamento eficiente de recursos.
            </p>
            <p className="text-gray-300">
            🔹 Implementação de APIs REST para integração entre sistemas e melhoria da comunicação entre plataformas.
            </p>
            <p className="text-gray-300">
            🔹 Automatização de tarefas repetitivas com Python e Selenium, aumentando a eficiência operacional.
            </p>
            <p className="text-gray-300">
            🔹 Criação de interfaces intuitivas e responsivas para sistemas web, garantindo melhor experiência do usuário.
            </p>
            <p className="text-gray-300">
            🔹 Desenvolvimento de scripts para processamento de dados e geração automática de relatórios gerenciais.
            </p>
          </div>
        </ScrollFloat>
      </div>
    </section>
  );
};