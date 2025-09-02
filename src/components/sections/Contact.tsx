import React from "react";

type ContactProps = {
  onOpen: () => void;
};

export const Contact: React.FC<ContactProps> = ({ onOpen }) => {
  const contacts: Array<{ icon: string; title: string; desc: string; href: string }> = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      desc: "leonardo.dti@outlook.com",
      href: "mailto:leonardo.dti@outlook.com",
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      desc: "linkedin.com/in/leonardo-dti",
      href: "https://linkedin.com/in/leonardo-dti",
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      desc: "github.com/leosilvajr",
      href: "https://github.com/leosilvajr",
    },
  ];

  return (
    <section id="contact" className="py-20 gradient-bg text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Vamos Trabalhar Juntos?</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8" />
          <p className="text-xl mb-12 text-gray-300">Estou sempre aberto a novos desafios e oportunidades de crescimento</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contacts.map(({ icon, title, desc, href }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-gray-600 
                           hover:border-cyan-400 hover:bg-white/15 focus:outline-none focus:ring-2 
                           focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 
                           transition-colors overflow-hidden"
                aria-label={`${title}: ${desc}`}
              >
                <i className={`${icon} text-3xl text-cyan-400 mb-4`} aria-hidden="true" />
                <h3 className="font-semibold mb-2">{title}</h3>
                {/* Mantém tudo em uma única linha, com reticências se ultrapassar */}
                <p className="text-gray-300 truncate">{desc}</p>
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/5517992556875?text=Olá%20Leonardo,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-400 text-gray-900 px-8 py-4 rounded-full font-semibold 
             hover:bg-cyan-300 transition-all transform hover:scale-105"
          >
            <i className="fas fa-paper-plane mr-2" aria-hidden="true" />
            Entrar em Contato
          </a>

        </div>
      </div>
    </section>
  );
};
