import React, { useState, useCallback, useEffect } from 'react';
import { X } from 'lucide-react';

interface Project {
  title: string;
  description?: string;
  period: string;
  association: string;
  image: string;
  alt: string;
  details?: string;
}

const projects: Project[] = [
  {
    title: 'Automação de tarefa em python',
    description: 'Um script Python que interage com sistemas web, preenche formulários e gera relatórios conforme o dia da semana.',
    period: 'fev de 2025 - fev de 2025',
    association: 'Exército Brasileiro',
    image: 'src/img/capa-python.jpg',
    alt: 'Imagem ilustrativa da atuomatização em python desenvolvido para a Grafex',
    details: 'Este projeto de automação em Python foi desenvolvido para otimizar processos internos da Grafex. O script automatiza tarefas repetitivas, como preenchimento de formulários e geração de relatórios, aumentando significativamente a eficiência operacional. Utilizando bibliotecas como Selenium e Pandas, o sistema é capaz de processar dados e gerar relatórios automaticamente com base no dia da semana.'
  },
  {
    title: 'Sistema de Gerenciamento e Controle de Produção Gráfica (SIGRAFEX)',
    period: 'out de 2022 - jun de 2024',
    association: 'Exército Brasileiro',
    image: 'src/img/sisgrafex.jpg',
    alt: 'Imagem ilustrativa do sistema SIGRAFEX',
    details: 'O SIGRAFEX é um sistema completo de gerenciamento para a produção gráfica, desenvolvido com tecnologias modernas como PHP, Laravel e Vue.js. O sistema permite o controle total do fluxo de produção, desde o recebimento de pedidos até a entrega final, incluindo gestão de estoque, controle de custos e relatórios gerenciais.'
  },
  {
    title: 'Portfólio Online para a Grafex',
    description: 'Transformando a Comunicação Digital da Gráfica do Exército',
    period: 'dez de 2024 - dez de 2024',
    association: 'Exército Brasileiro',
    image: 'src/img/portifolio.jpg',
    alt: 'Imagem ilustrativa do portfólio online',
    details: 'Desenvolvimento de um portfólio online moderno e responsivo para a Gráfica do Exército, utilizando React e Tailwind CSS. O site apresenta os serviços e produtos da gráfica de forma interativa e profissional, com galeria de projetos, formulário de contato e área administrativa para gestão de conteúdo.'
  },
  {
    title: 'Sistema de Escala de Serviço Militar',
    period: 'nov de 2021 - jun de 2022',
    association: 'Exército Brasileiro',
    image: 'src/img/escala.jpg',
    alt: 'Imagem ilustrativa do sistema de escala de serviço militar',
    details: 'Sistema desenvolvido para automatizar e otimizar a gestão de escalas de serviço militar. Implementado com Node.js e React, o sistema considera diversos fatores como disponibilidade, hierarquia e histórico de serviços para gerar escalas justas e eficientes. Inclui notificações automáticas e dashboard para gestão.'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Handle click outside modal
  const handleClickOutside = useCallback((e: MouseEvent) => {
    const modal = document.querySelector('.modal-content');
    if (modal && !modal.contains(e.target as Node)) {
      setSelectedProject(null);
    }
  }, []);

  // Handle escape key
  const handleEscapeKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedProject(null);
    }
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, handleClickOutside, handleEscapeKey]);

  return (
    <section className="section">
      <h2 className="text-3xl text-[#00d4ff] mb-4">Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedProject(project)}
          >
            <img 
              src={project.image} 
              alt={project.alt}
              className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold text-[#00d4ff] mt-4">{project.title}</h3>
            {project.description && (
              <p className="text-gray-300 mt-2 text-sm sm:text-base">{project.description}</p>
            )}
            <p className="text-gray-400 mt-2 text-sm sm:text-base">{project.period}</p>
            <p className="mt-2 text-sm sm:text-base">
              <strong>Associado(s) a:</strong> {project.association}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="modal-content bg-[#232336] rounded-lg w-full max-w-3xl my-4 mx-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#00d4ff] pr-4">{selectedProject.title}</h3>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(null);
                  }}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X size={24} />
                </button>
              </div>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.alt}
                className="w-full h-[200px] sm:h-[400px] object-cover rounded-lg mb-4"
              />
              <div className="space-y-4">
                <p className="text-gray-300 text-sm sm:text-base">{selectedProject.details}</p>
                <p className="text-gray-400 text-sm sm:text-base">{selectedProject.period}</p>
                <p className="text-sm sm:text-base">
                  <strong className="text-[#00d4ff]">Associado(s) a:</strong>{' '}
                  <span className="text-gray-300">{selectedProject.association}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;