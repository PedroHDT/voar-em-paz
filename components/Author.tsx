
import React from 'react';

export const Author: React.FC = () => {
  return (
    <section className="py-24 bg-blue-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">A Jornada por trás do Guia</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-10 italic">Camila Simão</h2>
          
          <div className="relative mb-12">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-blue-200 opacity-50">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V3L10.017 3V15C10.017 18.3137 7.33071 21 4.017 21H3.017Z" />
              </svg>
            </div>
            <p className="text-2xl md:text-3xl text-blue-600 font-bold italic leading-tight pt-4">
              "Coragem é agir mesmo tremendo."
            </p>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light max-w-2xl mx-auto">
            <p>
              Formada em Comunicação Social e Marketing, Camila sempre foi apaixonada por viagens e cultura, mas por 12 anos sua liberdade foi limitada pelo medo de voar.
            </p>
            <p>
              Hoje, após superar suas barreiras, ela embarca mais de 12 vezes por ano e decidiu transformar sua jornada em um guia para ajudar outros a reconquistarem o céu.
            </p>
            <p>
              Como geminiana que pensa e fala por duas, ela leva a paixão pela comunicação para a escrita de forma intuitiva, acolhedora e prática.
            </p>
          </div>
          
          <div className="mt-12 flex justify-center gap-12">
            <div className="text-center">
              <span className="block text-4xl font-bold text-blue-600">12</span>
              <span className="text-xs text-slate-400 uppercase font-bold tracking-widest">Anos de Espera</span>
            </div>
            <div className="w-px bg-slate-200 h-12"></div>
            <div className="text-center">
              <span className="block text-4xl font-bold text-blue-600">12+</span>
              <span className="text-xs text-slate-400 uppercase font-bold tracking-widest">Voos Anuais</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
