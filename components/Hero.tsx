
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden hero-gradient">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="reveal active">
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">
            THE MOO POINT
          </h1>
          <p className="text-xl md:text-3xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Focus on what <span className="text-blue-600 font-semibold italic">actually</span> matters
          </p>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#overview"
              onClick={(e) => scrollToSection(e, '#overview')}
              className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold shadow-xl hover:bg-slate-800 transition-all transform hover:scale-105"
            >
              Learn Our Approach
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, '#services')}
              className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-full font-bold shadow-sm hover:border-slate-300 transition-all transform hover:scale-105"
            >
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-40">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-slate-500 mb-2">Scroll</span>
        <div className="w-px h-12 bg-slate-400"></div>
      </div>
    </section>
  );
};

export default Hero;
