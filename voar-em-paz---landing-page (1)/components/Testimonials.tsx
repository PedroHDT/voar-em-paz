
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Relatos de Superação</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Veja como outras pessoas estão reconquistando sua autonomia de viagem.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all relative group">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-blue-500 text-blue-500" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed italic mb-8">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.imageUrl} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-slate-100 group-hover:border-blue-400 transition-colors"
                />
                <div>
                  <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                  <span className="text-sm text-slate-400">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
