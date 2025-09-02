import React from "react";

type ContactProps = {
  onOpen: () => void;
};

export const Contact: React.FC<ContactProps> = ({ onOpen }) => (
  <section id="contact" className="py-20 gradient-bg text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Vamos Trabalhar Juntos?</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8" />
        <p className="text-xl mb-12 text-gray-300">Estou sempre aberto a novos desafios e oportunidades de crescimento</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            ["fas fa-envelope","Email","seu.email@exemplo.com"],
            ["fab fa-linkedin","LinkedIn","linkedin.com/in/seuperfil"],
            ["fab fa-github","GitHub","github.com/seuusuario"],
          ].map(([icon, title, desc]) => (
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-gray-600" key={title}>
              <i className={`${icon} text-3xl text-cyan-400 mb-4`} aria-hidden="true" />
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          ))}
        </div>

        <button onClick={onOpen} className="bg-cyan-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-cyan-300 transition-all transform hover:scale-105">
          <i className="fas fa-paper-plane mr-2" aria-hidden="true" />
          Entrar em Contato
        </button>
      </div>
    </div>
  </section>
);
