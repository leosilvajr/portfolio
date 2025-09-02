import React, { useState } from "react";

type NavBarProps = {
  brand?: string;
};

export const NavBar: React.FC<NavBarProps> = ({ brand = "DevFullStack" }) => {
  const [open, setOpen] = useState(false);

  const smoothTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            <span className="text-cyan-400">&lt;</span>
            {brand}
            <span className="text-cyan-400">/&gt;</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => smoothTo("home")} className="text-gray-300 hover:text-cyan-400 transition-colors">Início</button>
            <button onClick={() => smoothTo("about")} className="text-gray-300 hover:text-cyan-400 transition-colors">Sobre</button>
            <button onClick={() => smoothTo("skills")} className="text-gray-300 hover:text-cyan-400 transition-colors">Tecnologias</button>
            <button onClick={() => smoothTo("contact")} className="text-gray-300 hover:text-cyan-400 transition-colors">Contato</button>
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setOpen(v => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <i className="fas fa-bars text-xl" />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-2 space-y-2">
            <button onClick={() => smoothTo("home")} className="block py-2 text-gray-300 hover:text-cyan-400">Início</button>
            <button onClick={() => smoothTo("about")} className="block py-2 text-gray-300 hover:text-cyan-400">Sobre</button>
            <button onClick={() => smoothTo("skills")} className="block py-2 text-gray-300 hover:text-cyan-400">Tecnologias</button>
            <button onClick={() => smoothTo("contact")} className="block py-2 text-gray-300 hover:text-cyan-400">Contato</button>
          </div>
        </div>
      )}
    </nav>
  );
};
