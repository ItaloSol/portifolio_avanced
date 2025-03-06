import React from 'react';
import { ModalProjetos } from './ModalProjetos';


interface ProjectsProps {
  isRecruiter: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isRecruiter }) => {
  const recruiterProjects = [
    {
      id: -2,
      title: 'Site para Clínica de Dentária SorrirMais',
      description: 'um site moderno e responsivo para a Clínica de Dentária SorrirMais, com uma interface elegante que transmite confiança e profissionalismo.',
      period: 'fev de 2025 - mar de 2025',
      association: 'Freelancer',
      image: './src/img/dentista.png',
      alt: 'Imagem do site desenvolvido para a Clínica SorriMais',
      details: `Desenvolvi um site moderno e responsivo para a Clínica de Dentária SorrirMais, com uma interface elegante que transmite confiança e profissionalismo. O projeto teve como objetivo modernizar a presença digital da clínica, facilitando o acesso às informações e convertendo visitantes em clientes, através de um agendamento via WhatsApp simples e intuitivo.
  
  🔹 Tecnologias Utilizadas:
  ✅ PHP, JavaScript (ES6), React.js + Vite + TypeScript: Desenvolvimento de funcionalidades dinâmicas e interativas.
  ✅ Tailwind CSS, HTML5, CSS3: Criação de um design moderno e responsivo, garantindo uma excelente experiência de usuário.
  ✅ APIs REST: Integração de dados para comunicação eficiente entre sistemas.
  🔹 Principais Contribuições:
  ✔ Site Responsivo e Intuitivo: Design focado na usabilidade que facilita a navegação e a conversão dos visitantes.
  ✔ Maior Alcance Digital: Estratégias digitais que ampliaram a visibilidade da clínica, permitindo um aumento significativo no agendamento de consultas via WhatsApp.
  Esse projeto destaca minha capacidade de integrar design e tecnologia para entregar soluções digitais que impulsionam os resultados e modernizam a presença online dos negócios.
  
  Link para acessar: https://sorrirmais.netlify.app/
  
  `,
  skills: [
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg'
    }
  ]
    },
    {
      id: -1,
      title: 'Site para Pesquisa de Satisfação dos Serviços da Grafex',
      description: 'A Gráfica do Exército (Grafex) precisava de um sistema para medir a satisfação dos clientes e obter feedbacks valiosos sobre seus serviços.',
      period: 'fev de 2025 - fev de 2025',
      association: 'Exército Brasileiro',
      image: './src/img/pesquisa_de_satisfacao.png',
      alt: 'Imagem do site desenvolvido para pesquisa de satisfação',
      details: `🚀 100% Coleta de Satisfação
  🎯 Pesquisa de Satisfação Online
  
  A Gráfica do Exército (Grafex) precisava de um sistema para medir a satisfação dos clientes e obter feedbacks valiosos sobre seus serviços. Com um prazo reduzido, desenvolvi uma solução interativa que integra um front-end moderno com uma API, enviando as respostas da pesquisa em tempo real para uma planilha no Excel. Esse sistema possibilitou que os clientes compartilhassem suas opiniões de forma rápida e intuitiva, contribuindo para a melhoria contínua da qualidade dos serviços.
  
  🔹 Tecnologias Utilizadas:
  ✅ TypeScript, Vite, React.js: Desenvolvimento dinâmico e escalável do front-end.
  ✅ Tailwind CSS, Bootstrap 4, HTML5, CSS3: Criação de uma interface moderna, responsiva e com navegação fluida.
  ✅ APIs REST: Integração para envio de dados em tempo real diretamente para o Excel.
  🔹 Principais Contribuições:
  ✔ Site Responsivo e Intuitivo: Garantindo uma experiência do usuário de alta qualidade.
  ✔ Interface Moderna e Fluida: Utilizando Vite e React.js para uma performance otimizada.
  ✔ Integração em Tempo Real: API que envia respostas diretamente para uma planilha Excel, facilitando a análise dos feedbacks.
  O resultado foi um site dinâmico e bem estruturado que permitiu à Gráfica do Exército coletar opiniões de forma eficaz, impulsionando a melhoria dos serviços e a satisfação dos clientes. 🚀💡
  
  `,
  skills: [
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg'
    }
  ]
    },
    {
      id: 1,
      title: 'Automação de tarefa em python',
      description: 'Um script Python que interage com sistemas web, preenche formulários e gera relatórios conforme o dia da semana.',
      period: 'fev de 2025 - fev de 2025',
      association: 'Exército Brasileiro',
      image: './src/img/capa-python.jpg',
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
      id: 2,
      title: 'Sistema de Gerenciamento e Controle de Produção Gráfica (SIGRAFEX)',
      period: 'out de 2022 - jun de 2024',
      association: 'Exército Brasileiro',
      image: './src/img/sisgrafex.jpg',
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
      id: 3,
      title: 'Portfólio Online para a Grafex',
      description: 'Transformando a Comunicação Digital da Gráfica do Exército',
      period: 'dez de 2024 - dez de 2024',
      association: 'Exército Brasileiro',
      image: './src/img/portifolio.jpg',
      alt: 'Imagem ilustrativa do portfólio online',
      details: `🚀100% de Melhoria na Visibilidade Digital da GrafEx.
  🎯 Portfólio Digital.
  
  A Gráfica do Exército (Grafex) precisava de uma presença digital moderna para exibir seus serviços e alcançar um público maior. Com um prazo reduzido, desenvolvi uma solução eficiente: um portfólio online interativo.
  
  🔹 Tecnologias utilizadas:
  ✅ TypeScript, Vite, Vue.js
  ✅ Tailwind CSS, Bootstrap 4, HTML5, CSS3
  ✅ CI/CD
  
  🔹 Principais Contribuições:
  ✔ Desenvolvimento Front-End de um site responsivo e intuitivo.
  ✔ Criação de interface moderna com Vite e Vue.js , garantindo navegação fluida.
  ✔ SEO e otimização de performance para maior alcance digital.
  
  O resultado foi um site dinâmico e bem estruturado, permitindo que clientes em potencial conhecessem a qualidade e os serviços da gráfica.
  
  Link para acessar o site: https://www.grafex.eb.mil.br/portifolio/
  
  `,
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
      id: 4,
      title: 'Sistema de Escala de Serviço Militar',
      period: 'nov de 2021 - jun de 2022',
      association: 'Exército Brasileiro',
      image: './src/img/escala.jpg',
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
  const clientProjects = [
    {
      id: -2,
      title: 'Landing Page para Clínica SorrirMais',
      description: 'uma Landing Page moderna e responsiva para a Clínica de Dentária SorrirMais, com uma interface elegante que transmite confiança e profissionalismo.',
      period: '2025',
      association: 'Freelancer',
      image: './src/img/dentista.png',
      alt: 'Imagem do site desenvolvido para a Clínica SorriMais',
      details: '',
      skills: [
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg'
    }
  ]
    },
    {
      
        id: -1,
        title: 'Site para Pesquisa de Satisfação dos Serviços da Grafex',
        description: 'A Gráfica do Exército (Grafex) precisava de um sistema para medir a satisfação dos clientes e obter feedbacks valiosos sobre seus serviços.',
        period: '2025',
        association: 'Exército Brasileiro',
        image: './src/img/pesquisa_de_satisfacao.png',
        alt: 'Imagem do site desenvolvido para pesquisa de satisfação',
        details: `🚀 100% Coleta de Satisfação
    🎯 Pesquisa de Satisfação Online
    
    O resultado foi um site dinâmico e bem estruturado que permitiu à Gráfica do Exército coletar opiniões de forma eficaz, impulsionando a melhoria dos serviços e a satisfação dos clientes. 🚀💡
    `,
    skills: [
      {
        name: 'React',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        name: 'Tailwind CSS',
        logo: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg'
      }
    ]
    },
    {
      id: 3,
      title: 'Portfólio Online para a Grafex',
      description: 'Transformando a Comunicação Digital da Gráfica do Exército',
      period: '2024',
      association: 'Exército Brasileiro',
      image: './src/img/portifolio.jpg',
      alt: 'Imagem ilustrativa do portfólio online',
      details: `🚀100% de Melhoria na Visibilidade Digital da GrafEx.
  🎯 Portfólio Digital.
  
  O resultado foi um site dinâmico e bem estruturado, permitindo que clientes em potencial conhecessem a qualidade e os serviços da gráfica.
  
  Link para acessar o site: https://www.grafex.eb.mil.br/portifolio/
  
  `,
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
      id: 2,
      title: 'Sistema de Gerenciamento e Controle de Produção Gráfica',
      period: '2024',
      association: 'Exército Brasileiro',
      image: './src/img/sisgrafex.jpg',
      alt: 'Imagem ilustrativa do sistema SIGRAFEX',
      details: `O SIGRAFEX foi desenvolvido para automatizar e otimizar a gestão de produção gráfica da Gráfica do Exército. Este sistema centralizou orçamentos, controle de produção e gerenciamento de estoque, aumentando eficiência e reduzindo custos operacionais.
  
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
      id: 4,
      title: 'Sistema de Escala de Serviço Militar',
      period: '2022',
      association: 'Exército Brasileiro',
      image: './src/img/escala.jpg',
      alt: 'Imagem ilustrativa do sistema de escala de serviço militar',
      details: `Desenvolvi um sistema automatizado de escala de serviço militar, distribuindo tarefas e missões entre os militares da Gráfica do Exército. Com isso, a organização da escala de trabalho tornou-se mais eficiente e transparente.
  
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
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Projetos</h2>
        <ModalProjetos projects={isRecruiter ? recruiterProjects : clientProjects} />
      </div>
    </section>
  );
};