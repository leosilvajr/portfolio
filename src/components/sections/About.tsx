import React from "react";

export const About: React.FC = () => (
  <section id="about" className="py-20 dark-gradient">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sobre Mim</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="fade-in">
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEKKLmFPgN5QQ/profile-displayphoto-shrink_800_800/B4DZRs2ML8GkAc-/0/?e=1759968000&v=beta&t=wCK61XeyfK31H7oUv8Bxl0RCAOfyDYjTIqBqb2asQd8"
                alt="Foto profissional do desenvolvedor"
                className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.src = "";
                  t.alt = "Foto não disponível";
                  t.style.display = "none";
                }}
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                <i className="fas fa-check text-white text-sm" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4">Perfil Profissional</h3>
            <p className="text-gray-300 leading-relaxed">
              Desenvolvedor Full Stack apaixonado por tecnologia, com perfil proativo, comunicativo e focado em resolver problemas de forma prática e eficiente.
              Gosto de tomar decisões, assumir responsabilidades e conduzir soluções do início ao fim.
            </p>
          </div>
        </div>

        <div className="fade-in">
          <h3 className="text-2xl font-bold text-white mb-6">🎯 Características Principais</h3>
          <div className="space-y-4">
            {[
              "Fácil comunicação e visão de negócio",
              "Foco na entrega e comprometido com resultados",
              "Atuação colaborativa e melhoria contínua",
              "Liderança técnica e metodologias ágeis",
            ].map((t) => (
              <div className="flex items-center space-x-3" key={t}>
                <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gray-800 rounded-xl border border-gray-600">
            <h4 className="font-semibold text-white mb-3">🚀 Experiência Atual</h4>
            <p className="text-gray-300">
              Gerencio e desenvolvo três aplicações corporativas de grande escala, atuando no desenvolvimento completo (front-end, back-end,
              banco de dados e infraestrutura em nuvem), além de liderar o time técnico.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
