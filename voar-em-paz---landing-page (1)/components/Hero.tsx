
import React from 'react';
import { Plane } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-24 pb-12 overflow-hidden bg-sky-gradient">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
            <Plane size={16} />
            <span>Redescubra sua liberdade de voar</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 mb-6 italic">
            Voar em <span className="text-blue-600 not-italic">paz</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
            Como eu venci o medo de avião após 12 anos. O relato de superação de quem passou de evitante a voar mais de 12 vezes por ano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="https://pay.kiwify.com.br/Bef1dS6" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-center hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:shadow-blue-300 active:scale-95 text-lg"
            >
              Quero Vencer o Medo Agora
            </a>
          </div>
          
          <div className="flex items-center gap-4 text-slate-400">
             <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-white" alt="Usuário" />
                ))}
             </div>
             <p className="text-sm font-medium italic">+ de 500 pessoas já libertas</p>
          </div>
        </div>
        
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80" 
              alt="Liberdade de Voar" 
              className="rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-[200px] border border-slate-50">
                <span className="block text-3xl font-bold text-blue-600 mb-1">100%</span>
                <p className="text-xs text-slate-500 font-medium leading-tight">Digital e disponível para acesso imediato em qualquer dispositivo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
