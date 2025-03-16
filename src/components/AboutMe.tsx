import React from 'react';
import { AnimatedText } from './AnimatedText';
import { ScrollFloat } from './ScrollFloat';
import Lightning from './Lightning/Lightning';
interface AboutMeProps {
  isRecruiter: boolean;
}
export const AboutMe: React.FC<AboutMeProps> = ({ isRecruiter }) => {
  
  return (
   
    <section className="relative py-20 bg-blue-90 overflow-hidden">
      {/* Efeito LetterGlitch no fundo */}
      
      <div className="relative z-10 container mx-auto px-4">
        <ScrollFloat>
          <h2 className="text-4xl font-bold mb-8 text-white">Sobre Mim</h2>
          {isRecruiter ? (
            <>
          <AnimatedText
            text="Sou um Desenvolvedor Full Stack Pleno com sólida
experiência na criação de sistemas web escaláveis, APIs REST e
automação de processos. Durante minha atuação no Exército
Brasileiro, desenvolvi o Sistema de Escala de Serviço, que resultou
em um aumento de 1700% na eficiência operacional, e liderei o
desenvolvimento do Sistema de Gerenciamento de Produção
SISGRAFEX, que possibilitou o monitoramento em tempo real da
produção, otimizou a gestão de ordens de serviço em 200%, reduziu
custos e minimizou desperdícios, melhorando significativamente a
tomada de decisão e a segurança dos dados."
            type="decrypt"
            className="text-xl text-white-300"
          />
          <AnimatedText
            text="Meu compromisso é entregar soluções que não só resolvam
problemas operacionais, mas que também impulsionem a
competitividade e melhorem os lucros das organizações, combinando
tecnologia avançada com estratégia de negócios para gerar resultados
mensuráveis e sustentáveis."
            type="decrypt"
            className="text-xl py-3 text-white-300"
          />
            <AnimatedText
            text="Meu objetivo é utilizar minha criatividade em programação para identificar e resolver problemas complexos,
implementando soluções inovadoras que melhorem a eficiência operacional, aumentem os
lucros e impulsionem os resultados dos negócios. "
            type="decrypt"
            className="text-xl py-3 text-white-300"
          />
          </>
        ) : (
          <AnimatedText
            text="Olá, eu sou Ítalo Sol, Web Developer especializado em criar landing pages de alta conversão e transformar a presença digital de empresas. Apaixonado por design inovador e copywriting persuasivo, desenvolvo soluções personalizadas que encantam visualmente e geram resultados reais. Com uma abordagem focada no usuário, ajudo negócios a otimizar estratégias de marketing, aumentar conversões e se destacar no mercado digital. Se você busca elevar sua marca e transformar visitantes em clientes, vamos conversar!"
            type="decrypt"
            className="text-xl text-white-300"
          />
        )}
        </ScrollFloat>
      </div>
    </section>
  );
};