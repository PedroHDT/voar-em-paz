
import React from 'react';
import { MODULES } from '../constants';
// Added Plane to the imported icons from lucide-react
import { BookOpen, CheckCircle, Plane } from 'lucide-react';

export const Modules: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Rota de Voo</h2>
          <p className="text-slate-600 text-lg font-light">
            O eBook é estruturado em 8 módulos que levam você desde o entendimento do medo até a conquista da liberdade plena.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MODULES.map((module) => (
            <div 
              key={module.id} 
              className="p-8 border border-slate-100 rounded-3xl hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <span className="font-bold text-lg">{module.id}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{module.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 filter blur-3xl"></div>
          <div className="z-10 flex-1">
            <h3 className="text-2xl md:text-4xl font-bold mb-4 italic">"A liberdade começa quando a gente diz sim — mesmo tremendo."</h3>
            <p className="text-slate-400 font-light mb-8 max-w-xl">
              Este não é apenas um guia técnico. É uma conversa honesta entre alguém que sentiu o que você sente e descobriu o caminho de volta para o céu.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-400" size={20} />
                <span>Baseado em experiência real e vivida.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-400" size={20} />
                <span>Exercícios de racionalização de cenários.</span>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-slate-800 rounded-3xl p-4 flex flex-col justify-between">
                    <BookOpen className="text-blue-400" />
                    <span className="text-sm font-medium">8 Módulos Exclusivos</span>
                </div>
                <div className="aspect-square bg-blue-600 rounded-3xl p-4 flex flex-col justify-between transform translate-y-8">
                    <Plane className="text-white" />
                    <span className="text-sm font-medium">Guia Prático Incluso</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
