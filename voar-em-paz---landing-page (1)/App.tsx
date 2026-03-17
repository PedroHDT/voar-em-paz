
import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Modules } from './components/Modules';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Author } from './components/Author';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="antialiased selection:bg-blue-100 selection:text-blue-600">
      {/* Sticky Navigation bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold italic text-slate-900">
            Voar em <span className="text-blue-600">Paz</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">História</a>
            <a href="#sobre" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">O que você aprende</a>
          </div>
          
          {/* Mobile view now only shows logo or could be empty since button was removed */}
          <div className="md:hidden">
            {/* Nav button removed as requested */}
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        
        <section className="py-20 bg-blue-50/30 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-light text-slate-500 leading-relaxed">
                "Este livro é para lembrar que a liberdade começa quando a gente diz <span className="text-blue-600 font-bold italic">sim</span> — mesmo tremendo."
              </h2>
            </div>
          </div>
        </section>

        <Modules />
        <Testimonials />
        <Author />
        <Pricing />
        
        {/* Quote before footer */}
        <section className="py-32 bg-slate-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          <div className="container mx-auto px-6 relative z-10">
            <span className="text-6xl italic serif mb-8 block opacity-50">"</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic max-w-4xl mx-auto leading-tight">
              "Depois do medo, vem o mundo."
            </h2>
            <p className="text-blue-400 font-medium uppercase tracking-widest text-sm">— Clarice Lispector</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
