import React from 'react';
import { Download } from 'lucide-react';

const CvDownload = () => {
  return (
    <section className="section">
      <h2 className="text-3xl text-[#00d4ff] mb-4">Download do Currículo</h2>
      <div className="card text-center">
        <a 
          href="Italo_Sol_Desenvolvedor_web_pleno_Portfolio.pdf" 
          download 
          className="inline-flex items-center gap-2 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          <Download size={20} />
          Baixar Currículo
        </a>
      </div>
    </section>
  );
};

export default CvDownload;