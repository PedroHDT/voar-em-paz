
import React from 'react';
import { PLANS } from '../constants';
import { Check, ShieldCheck } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="oferta" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Escolha o plano ideal</h2>
          <p className="text-slate-600">
            Acesso imediato para você começar sua jornada de libertação hoje mesmo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative p-10 rounded-[3rem] border-2 transition-all flex flex-col ${
                plan.highlight 
                ? 'border-blue-500 bg-white shadow-2xl scale-105 z-10' 
                : 'border-slate-100 bg-slate-50'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full whitespace-nowrap">
                  Mais Recomendado
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-slate-500 uppercase tracking-widest">{plan.name}</h3>
                
                {plan.installment ? (
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-black text-slate-900">{plan.installment}</span>
                    </div>
                    <p className="text-slate-500 font-medium">ou {plan.price} à vista</p>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                    <span className="text-slate-400 text-sm font-medium">/ {plan.period}</span>
                  </div>
                )}
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-blue-500" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://pay.kiwify.com.br/Bef1dS6"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full py-4 rounded-2xl font-bold transition-all transform active:scale-95 ${
                plan.highlight 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}>
                Garantir Meu Acesso
              </a>
              
              <p className="text-center mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                Acesso Vitalício • {plan.period}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 rounded-2xl text-green-700 border border-green-100">
                <ShieldCheck size={20} />
                <span className="font-semibold text-sm">Garantia incondicional de 7 dias</span>
            </div>
            <p className="mt-4 text-xs text-slate-400 max-w-md mx-auto">
                Se por qualquer motivo você achar que o eBook não é para você, devolvemos 100% do seu investimento sem perguntas.
            </p>
        </div>
      </div>
    </section>
  );
};
