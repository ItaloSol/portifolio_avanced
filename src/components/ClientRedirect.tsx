import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollFloat } from './ScrollFloat';

export const ClientRedirect: React.FC = () => {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container mx-auto px-4 text-center">
        <ScrollFloat>
          <h2 className="text-4xl font-bold mb-6">Acesse Nossa Plataforma</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Conheça nossa plataforma completa de soluções digitais e descubra como podemos transformar seu negócio.
          </p>
          <motion.a
            href="https://vendalandingpage.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Acessar Plataforma</span>
            <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Soluções Completas</h3>
              <p className="text-gray-300">Explore nossa gama completa de serviços e soluções digitais</p>
            </div>
            <div className="bg-background/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Suporte Dedicado</h3>
              <p className="text-gray-300">Atendimento personalizado para suas necessidades específicas</p>
            </div>
            <div className="bg-background/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Orçamento Online</h3>
              <p className="text-gray-300">Solicite um orçamento rápido e personalizado para seu projeto</p>
            </div>
          </div>
        </ScrollFloat>
      </div>
    </section>
  );
};