
import React from 'react';
import { Instagram, Linkedin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-2xl font-bold italic text-blue-600">Voar em Paz</span>
            <p className="text-slate-400 text-sm mt-2">© 2024 Camila Simão. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Globe size={20} /></a>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Ajuda</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
