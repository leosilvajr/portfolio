import React from "react";
import { TechLogos } from "../../decor/TechLogos";

type HeroProps = {
  onCTAPrimary: () => void;
  onCTASecondary: () => void;
};

export const Hero: React.FC<HeroProps> = ({ onCTAPrimary, onCTASecondary }) => (
  <section
    id="home"
    className="gradient-bg min-h-screen flex items-center justify-center text-white relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      {/* Foto de perfil em destaque */}
      <div className="floating mb-8">
        <div className="w-80 h-80 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl">
          <img
            src="https://avatars.githubusercontent.com/u/106756853?v=4"
            alt="Foto de perfil profissional de Leonardo Silva"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Nome e título */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in">
        Olá, eu sou <span className="text-cyan-400">Leonardo Silva</span>
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-6 fade-in">
        Desenvolvedor <span className="text-cyan-400">Full Stack</span>
      </h2>

      {/* Subtítulo */}
      <p className="text-lg md:text-xl mb-8 text-gray-300 fade-in">
        Transformando ideias em soluções digitais completas
      </p>

      {/* Botões de CTA */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
        <button
          onClick={onCTAPrimary}
          className="bg-cyan-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-cyan-300 transition-all transform hover:scale-105"
        >
          Conheça meu trabalho
        </button>
        <a
          href="https://wa.me/5517992556875?text=Olá%20Leonardo,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold 
                     hover:bg-cyan-400 hover:text-gray-900 transition-all text-center"
        >
          Entrar em contato
        </a>
      </div>
    </div>

    <TechLogos />
  </section>
);
