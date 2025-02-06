import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section">
      <h2 className="text-3xl text-[#00d4ff] mb-4">Contato</h2>
      <div className="card">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="text-[#00d4ff]" />
          <p><strong>Localização:</strong> Brasília, DF</p>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Phone className="text-[#00d4ff]" />
          <p><strong>Telefone:</strong> (61) 99300-3980</p>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Mail className="text-[#00d4ff]" />
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:italo.sol100@gmail.com" className="text-[#00d4ff] hover:underline">
              italo.sol100@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Linkedin className="text-[#00d4ff]" />
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a 
              href="https://www.linkedin.com/in/italo-sol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#00d4ff] hover:underline"
            >
              linkedin.com/in/italo-sol
            </a>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Github className="text-[#00d4ff]" />
          <p>
            <strong>GitHub:</strong>{' '}
            <a 
              href="https://github.com/ItaloSol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#00d4ff] hover:underline"
            >
              github.com/ItaloSol
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;