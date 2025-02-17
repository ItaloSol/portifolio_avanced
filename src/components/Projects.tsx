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
  skills: Array<{
    name: string;
    logo: string;
  }>;
}

const projects: Project[] = [
  {
    title: 'Automação de tarefa em python',
    description: 'Um script Python que interage com sistemas web, preenche formulários e gera relatórios conforme o dia da semana.',
    period: 'fev de 2025 - fev de 2025',
    association: 'Exército Brasileiro',
    image: 'src/img/capa-python.jpg',
    alt: 'Imagem ilustrativa da atuomatização em python desenvolvido para a Grafex',
    details: `Desenvolvi um sistema de automação para otimizar processos internos da Gráfica do Exército (Grafex), reduzindo tarefas repetitivas e erros manuais. O script automatiza preenchimento de formulários e geração de relatórios, aumentando significativamente a eficiência operacional.

🔹 Tecnologias utilizadas:
✅ Python 3.x → Linguagem principal para automação.
✅ Selenium → Automação de tarefas web e preenchimento de formulários.
✅ PyAutoGUI → Simulação de cliques e interação com interfaces gráficas.
✅ Pandas → Manipulação e análise de dados para relatórios precisos.
✅ Scheduler Python → Execução automática com base no dia da semana.

🔹 Funcionalidades Principais:
✔ Preenchimento automático de formulários → Redução de tempo e eliminação de erros humanos.
✔ Geração de relatórios automatizados → Baseados no dia da semana, garantindo atualização constante.
✔ Interação com sistemas web → Uso de Selenium para automação de processos online.
✔ Execução programada → Uso de Scheduler para rodar scripts automaticamente em horários específicos.

📌 Impacto:
✅ Aumento da produtividade → Redução significativa no tempo gasto em tarefas repetitivas.
✅ Eficiência operacional → Processos otimizados com menor margem de erro.
✅ Automação escalável → Possibilidade de expansão para outras áreas e tarefas.

Este projeto trouxe agilidade e precisão para a Gestão da Grafex, demonstrando o poder da automação com Python para otimizar processos internos e tomada de decisões. 🚀🐍`,
skills: [
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    name: 'Selenium',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg'
  }
]
  },
  {
    title: 'Sistema de Gerenciamento e Controle de Produção Gráfica (SIGRAFEX)',
    period: 'out de 2022 - jun de 2024',
    association: 'Exército Brasileiro',
    image: 'src/img/sisgrafex.jpg',
    alt: 'Imagem ilustrativa do sistema SIGRAFEX',
    details: `O SIGRAFEX foi desenvolvido para automatizar e otimizar a gestão de produção gráfica da Gráfica do Exército. Este sistema centralizou orçamentos, controle de produção e gerenciamento de estoque, aumentando eficiência e reduzindo custos operacionais.

      🔹 Tecnologias utilizadas:
      ✅ PHP, JavaScript (ES6), Node.js, Laravel, Vue.js
      ✅ SQL, MySQL, API REST para comunicação de dados
      ✅ Bootstrap 4, Tailwind CSS, HTML5, CSS3 para UI/UX intuitiva

      🔹 Funcionalidades Principais:
      ✔ Gestão de Orçamentos → Criação, histórico e acompanhamento de pedidos.
      ✔ Controle de Produção → Monitoramento das etapas produtivas com atribuição de tarefas.
      ✔ Otimização da Interface → Vue.js + Tailwind CSS para interatividade e facilidade de uso.
      ✔ Relatórios Inteligentes → SQL e MySQL para geração de análises detalhadas.

      📌 Impacto:
      ✅ Redução de custos operacionais com melhor controle de materiais.
      ✅ Organização aprimorada e fluxos de trabalho otimizados.
      ✅ Aumento da produtividade com menos desperdícios e prazos bem definidos.

      O SIGRAFEX transformou a gestão da produção gráfica, consolidando processos e garantindo transparência e eficiência.`,
      skills: [
        {
          name: 'Vue.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
        },
        {
         name: 'PHP',
         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
        },
        {
          name: 'API REST',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
        },
        {
         name: 'SQL',
         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' 
        }
      ]
  },
  {
    title: 'Portfólio Online para a Grafex',
    description: 'Transformando a Comunicação Digital da Gráfica do Exército',
    period: 'dez de 2024 - dez de 2024',
    association: 'Exército Brasileiro',
    image: 'src/img/portifolio.jpg',
    alt: 'Imagem ilustrativa do portfólio online',
    details: `A Gráfica do Exército (Grafex) precisava de uma presença digital moderna para exibir seus serviços e alcançar um público maior. Com um prazo reduzido, desenvolvi uma solução eficiente: um portfólio online interativo.

🔹 Tecnologias utilizadas:
✅ PHP, JavaScript (ES6), Vue.js, Laravel, SQL, MySQL
✅ Tailwind CSS, Bootstrap 4, HTML5, CSS3
✅ APIs REST para integração de dados

🔹 Principais Contribuições:
✔ Desenvolvimento Full Stack de um site responsivo e intuitivo.
✔ Criação de interface moderna com Vue.js e Laravel, garantindo navegação fluida.
✔ SEO e otimização de performance para maior alcance digital.
✔ Armazenamento eficiente de dados com SQL e MySQL.

Link para acessar o site: https://www.grafex.eb.mil.br/portifolio/
O resultado foi um site dinâmico e bem estruturado, permitindo que clientes em potencial conhecessem a qualidade e os serviços da gráfica.`,
skills: [
  {
    name: 'Vue.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg'
  }
]
  },
  {
    title: 'Sistema de Escala de Serviço Militar',
    period: 'nov de 2021 - jun de 2022',
    association: 'Exército Brasileiro',
    image: 'src/img/escala.jpg',
    alt: 'Imagem ilustrativa do sistema de escala de serviço militar',
    details: `Desenvolvi um sistema automatizado de escala de serviço militar, distribuindo tarefas e missões entre os militares da Gráfica do Exército. Com isso, a organização da escala de trabalho tornou-se mais eficiente e transparente.

🔹 Tecnologias utilizadas:
✅ PHP, JavaScript (ES6), Node.js, Vue.js, Laravel
✅ SQL, MySQL, API REST
✅ Bootstrap 4, Tailwind CSS para UI responsiva

🔹 Funcionalidades Principais:
✔ Distribuição automatizada de serviços com alocação justa e eficiente.
✔ Geração automática de escalas conforme critérios e regras predefinidas.
✔ Relatórios detalhados para análise e planejamento estratégico.
✔ Notificações e alertas para mudanças na escala de serviço.

📌 Impacto:
✅ Eficiência operacional → Redução do tempo gasto na organização das escalas.
✅ Transparência → Todos os militares acompanhavam suas designações em tempo real.
✅ Melhor gerenciamento → Redução de conflitos e otimização da alocação de pessoal.

Esse sistema trouxe modernização e automação para a distribuição de tarefas dentro do Exército, aumentando a eficiência e equidade na gestão de serviços.`,
skills: [
  {
    name: 'php',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'API REST',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
  },
  {
   name: 'SQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
]     
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
            <button 
              className="mt-3 text-[#00d4ff] hover:text-white transition-colors duration-300 text-sm"
            >
              Clique para saber mais sobre o projeto
            </button>
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
               <div className="flex justify-center items-center gap-1 mt-3 w-36 mx-auto">
              {selectedProject.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className="p-1 rounded"
                  title={skill.name}
                >
                  <img 
                    src={skill.logo} 
                    alt={`${skill.name} logo`}
                    className="w-12 h-12"
                  />
                </div>
              ))}
            </div>
              <div className="space-y-4">
                <p className="text-gray-300 text-sm sm:text-base whitespace-pre-line ">{selectedProject.details}</p>
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