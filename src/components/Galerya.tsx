import React from 'react';
import  CircularGallery  from './CircularGallery/CircularGallery';

// const projects = [
//   {
//     id: 1,
//     text: 'Automação de tarefa em python',
//     period: 'fev de 2025 - fev de 2025',
//     description: 'Desenvolvimento de scripts de automação em Python para otimização de processos.',
//     image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800'
//   },
//   {
//     id: 2,
//     text: 'Sistema SIGRAFEX',
//     period: 'out de 2022 - jun de 2024',
//     description: 'Sistema de Gerenciamento e Controle de Produção Gráfica desenvolvido para o Exército Brasileiro.',
//     image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=800'
//   },
//   {
//     id: 3,
//     text: 'Portfólio Grafex',
//     period: 'dez de 2024 - dez de 2024',
//     description: 'Desenvolvimento de portfólio online para apresentação dos trabalhos da Grafex.',
//     image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800'
//   },
//   {
//     id: 4,
//     text: 'Sistema de Escala Militar',
//     period: 'nov de 2021 - jun de 2022',
//     description: 'Sistema de gerenciamento de escalas de serviço para militares.',
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
//   }
// ];

export const Galerya: React.FC = () => {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
    <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
  </div>
  );
};