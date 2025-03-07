import React from 'react';
import { AnimatedText } from './AnimatedText';
import DecryptedText from './DecryptedText/DecryptedText'
//import Squares from './Squares';
import Particles from './Particles/Particles';
interface HeaderProps {
  isRecruiter: boolean;
}
export const Header: React.FC<HeaderProps> = ({ isRecruiter }) => {
  return (
    <>
    <header className="relative min-h-screen flex items-center justify-center">
  {/* Partículas no fundo */}
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
    className="absolute inset-0"
  />

  {/* Conteúdo do Header */}
  <div className="relative z-10 container mx-auto px-4 text-center">
  <AnimatedText
            text={isRecruiter ? "Web Developer" : "Soluções Digitais Personalizadas"}
            type="split"
            className="text-6xl font-bold mb-4"
          />
          <AnimatedText
            text={isRecruiter ? "Transformando ideias em realidade digital" : "Criando experiências únicas para seu negócio"}
            type="blur"
            className="text-2xl text-gray-300"
          />
  <DecryptedText
      text="Ítalo Sol Sclocco Dantas"
      animateOn="view"
      revealDirection="center"
      className="text-2xl text-gray-300"
    />
  </div>
</header>
    </>
  );
};