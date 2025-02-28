import React from 'react';
import { AnimatedText } from './AnimatedText';
import { ScrollFloat } from './ScrollFloat';
import Magnet from './Magnet';
import {  Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
export const Contact: React.FC = () => {
  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollFloat>
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary" />
                <AnimatedText
                  text="Brasília, DF"
                  type="decrypt"
                  className="text-xl"
                />
              </div>
            </ScrollFloat>
            <ScrollFloat>
              <div className="flex items-center space-x-4">
                <Phone className="text-primary" />
                <AnimatedText
                  text="(61) 9 9300-3980"
                  type="decrypt"
                  className="text-xl"
                />
              </div>
            </ScrollFloat>
            <ScrollFloat>
              <div className="flex items-center space-x-4">
                <Mail className="text-primary" />
                <AnimatedText
                  text="italo.sol100@gmmail.com"
                  type="decrypt"
                  className="text-xl"
                />
              </div>
            </ScrollFloat>
            <ScrollFloat>
              <div className="flex items-center space-x-4">
              <Linkedin className="text-primary" />
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a 
              href="https://www.linkedin.com/in/italo-sol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              linkedin.com/in/italo-sol
            </a>
          </p>
          
          <Github className="text-primary" /> 
          <p>
            <strong>GitHub:</strong>{' '}
            <a 
              href="https://github.com/ItaloSol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              github.com/ItaloSol
            </a>
          </p>
        
              </div>
            </ScrollFloat>
          </div>
        </div>
      </section>

      <section className="py-20">
        
        <div className="container mx-auto px-4 text-center">
        <Magnet padding={2660} disabled={false} magnetStrength={9}>
          <ScrollFloat>
            <a
              target='_blank'
              href="Italo_Sol_Desenvolvedor_web_pleno_Portfolio.pdf"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark px-8 py-4 rounded-lg text-xl font-bold transition-colors"
            >
              <Download />
              <span>Baixar Currículo</span>
            </a>
          </ScrollFloat>
          </Magnet>
        </div>
      </section>
    </>
  );
};