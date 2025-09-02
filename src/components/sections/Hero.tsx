import React from "react";
import { TechLogos } from "../../decor/TechLogos";

type HeroProps = {
  onCTAPrimary: () => void;
  onCTASecondary: () => void;
};

export const Hero: React.FC<HeroProps> = ({ onCTAPrimary, onCTASecondary }) => (
  <section id="home" className="gradient-bg min-h-screen flex items-center justify-center text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <div className="floating mb-8">
        <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <i className="fas fa-code text-5xl text-white" aria-hidden="true" />
          <span className="sr-only">Código</span>
        </div>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
        Desenvolvedor <span className="text-cyan-400">Full Stack</span>
      </h1>

      <p className="text-xl md:text-2xl mb-8 text-gray-300 fade-in">
        Transformando ideias em soluções digitais completas
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
        <button onClick={onCTAPrimary} className="bg-cyan-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-cyan-300 transition-all transform hover:scale-105">
          Conheça meu trabalho
        </button>
        <button onClick={onCTASecondary} className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all">
          Entre em contato
        </button>
      </div>
    </div>

    <TechLogos />
  </section>
);
