import React, { useEffect, useRef, useState } from "react";

function useFadeInOnScroll() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll<HTMLElement>(".fade-in").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const visible = 150;
        if (top < window.innerHeight - visible) {
          el.classList.add("visible");
        }
      });
    };
    const onLoad = () => {
      handleScroll();
      setTimeout(() => {
        document.querySelectorAll<HTMLElement>(".skill-bar").forEach((bar) => {
          const width = bar.style.width;
          bar.style.width = "0%";
          setTimeout(() => (bar.style.width = width), 100);
        });
      }, 500);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", onLoad);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", onLoad);
    };
  }, []);
}

const TechLogos = () => (
  <>
    <div className="tech-logo top-20 left-10" style={{ animationDelay: "0.5s" as any }}>
      <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-cyan-400">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z"/>
      </svg>
    </div>
    <div className="tech-logo top-40 right-20" style={{ animationDelay: "1s" as any }}>
      <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.322,6.825,2.322,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
      </svg>
    </div>
    <div className="tech-logo bottom-40 left-20" style={{ animationDelay: "1.5s" as any }}>
      <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-purple-400">
        <path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.247L23.32 3.982M19.064 19.262l-7.062 3.9-7.078-3.9-1.49-13.31L12.002 4.058l8.566 1.894"/>
      </svg>
    </div>
    <div className="tech-logo top-60 left-1/4" style={{ animationDelay: "2s" as any }}>
      <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    </div>
    <div className="tech-logo bottom-60 right-1/4" style={{ animationDelay: "2.5s" as any }}>
      <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-orange-400">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    </div>
    <div className="tech-logo top-32 right-1/3" style={{ animationDelay: "3s" as any }}>
      <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-indigo-400">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    </div>
  </>
);

const NavBar: React.FC = () => {
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
            <span className="text-cyan-400">&lt;</span>DevFullStack<span className="text-cyan-400">/&gt;</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={()=>smoothTo('home')} className="text-gray-300 hover:text-cyan-400 transition-colors">Início</button>
            <button onClick={()=>smoothTo('about')} className="text-gray-300 hover:text-cyan-400 transition-colors">Sobre</button>
            <button onClick={()=>smoothTo('skills')} className="text-gray-300 hover:text-cyan-400 transition-colors">Tecnologias</button>
            <button onClick={()=>smoothTo('contact')} className="text-gray-300 hover:text-cyan-400 transition-colors">Contato</button>
          </div>
          <button className="md:hidden text-gray-300" onClick={()=>setOpen(v=>!v)} aria-label="menu">
            <i className="fas fa-bars text-xl" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-2 space-y-2">
            <button onClick={()=>smoothTo('home')} className="block py-2 text-gray-300 hover:text-cyan-400">Início</button>
            <button onClick={()=>smoothTo('about')} className="block py-2 text-gray-300 hover:text-cyan-400">Sobre</button>
            <button onClick={()=>smoothTo('skills')} className="block py-2 text-gray-300 hover:text-cyan-400">Tecnologias</button>
            <button onClick={()=>smoothTo('contact')} className="block py-2 text-gray-300 hover:text-cyan-400">Contato</button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC<{ onCTAPrimary: ()=>void; onCTASecondary: ()=>void; }> = ({ onCTAPrimary, onCTASecondary }) => (
  <section id="home" className="gradient-bg min-h-screen flex items-center justify-center text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <div className="floating mb-8">
        <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <i className="fas fa-code text-5xl text-white"></i>
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

const About: React.FC = () => (
  <section id="about" className="py-20 dark-gradient">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sobre Mim</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="fade-in">
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <img src="https://media.licdn.com/dms/image/v2/D4D03AQEKKLmFPgN5QQ/profile-displayphoto-shrink_800_800/B4DZRs2ML8GkAc-/0/?e=1759968000&v=beta&t=wCK61XeyfK31H7oUv8Bxl0RCAOfyDYjTIqBqb2asQd8"
                   alt="Foto profissional do desenvolvedor"
                   className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white"
                   onError={(e)=>{ const t=e.target as HTMLImageElement; t.src=''; t.alt='Foto não disponível'; t.style.display='none';}} />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                <i className="fas fa-check text-white text-sm"></i>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4">Perfil Profissional</h3>
            <p className="text-gray-300 leading-relaxed">
              Desenvolvedor Full Stack apaixonado por tecnologia, com perfil proativo, comunicativo e focado em resolver problemas de forma prática e eficiente. Gosto de tomar decisões, assumir responsabilidades e conduzir soluções do início ao fim.
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
              "Liderança técnica e metodologias ágeis"
            ].map((t)=>(
              <div className="flex items-center space-x-3" key={t}>
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-gray-800 rounded-xl border border-gray-600">
            <h4 className="font-semibold text-white mb-3">🚀 Experiência Atual</h4>
            <p className="text-gray-300">
              Gerencio e desenvolvo três aplicações corporativas de grande escala, atuando no desenvolvimento completo (front-end, back-end, banco de dados e infraestrutura em nuvem), além de liderar o time técnico.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills: React.FC = () => (
  <section id="skills" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tecnologias & Especialidades</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">Stack completo para desenvolvimento de soluções escaláveis e modernas</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Back-End */}
        <div className="tech-card bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-lg fade-in">
          <div className="text-5xl text-green-400 mb-6">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 8.349v7.302c0 .615-.456 1.172-1.109 1.352l-6.348 1.733c-.364.099-.746.099-1.11 0L9.085 17.003c-.653-.18-1.109-.737-1.109-1.352V8.349c0-.615.456-1.172 1.109-1.352l6.348-1.733c.364-.099.746-.099 1.11 0l6.348 1.733c.653.18 1.109.737 1.109 1.352zM12 14.577c-1.42 0-2.577-1.157-2.577-2.577S10.58 9.423 12 9.423s2.577 1.157 2.577 2.577S13.42 14.577 12 14.577z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">💻 Back-End</h3>
          <p className="text-gray-300 mb-6">APIs robustas com foco em performance, escalabilidade e segurança</p>
          {["C# / .NET Core","Entity Framework","Dapper","Hangfire","Web APIs REST"].map((t)=>(
            <div className="flex items-center space-x-3" key={t}>
              <i className="fas fa-check-circle text-green-400"></i><span className="text-gray-300">{t}</span>
            </div>
          ))}
        </div>
        {/* Front-End */}
        <div className="tech-card bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-lg fade-in">
          <div className="text-5xl text-cyan-400 mb-6">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">🌐 Front-End</h3>
          <p className="text-gray-300 mb-6">Interfaces modernas e responsivas com excelente UX</p>
          {["Angular","React","TypeScript","HTML5 / CSS3","Bootstrap / Tailwind"].map((t)=>(
            <div className="flex items-center space-x-3" key={t}>
              <i className="fas fa-check-circle text-cyan-400"></i><span className="text-gray-300">{t}</span>
            </div>
          ))}
        </div>
        {/* Mobile */}
        <div className="tech-card bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-lg fade-in">
          <div className="text-5xl text-purple-400 mb-6">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">📱 Mobile</h3>
          <p className="text-gray-300 mb-6">Aplicativos mobile escaláveis e performáticos</p>
          {["React Native","JavaScript / TypeScript","Expo","Redux / Context API"].map((t)=>(
            <div className="flex items-center space-x-3" key={t}>
              <i className="fas fa-check-circle text-purple-400"></i><span className="text-gray-300">{t}</span>
            </div>
          ))}
          <div className="mt-4 p-3 bg-gray-700 rounded-lg border border-gray-600">
            <p className="text-sm text-purple-300">Projetos pessoais e soluções escaláveis</p>
          </div>
        </div>
        {/* Database */}
        <div className="tech-card bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-lg fade-in">
          <div className="text-5xl text-orange-400 mb-6">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">🗄️ Banco de Dados</h3>
          <p className="text-gray-300 mb-6">Gerenciamento eficiente de dados estruturados e não estruturados</p>
          {["SQL Server (RDS)","Redis (Cache)","MongoDB","Stored Procedures","Query Optimization"].map((t)=>(
            <div className="flex items-center space-x-3" key={t}>
              <i className="fas fa-check-circle text-orange-400"></i><span className="text-gray-300">{t}</span>
            </div>
          ))}
        </div>
        {/* Cloud & DevOps */}
        <div className="tech-card bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-lg fade-in">
          <div className="text-5xl text-yellow-400 mb-6">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.75 11.35a6.25 6.25 0 1 0-11.69 3.65L8 16.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5l.94-1.5a6.25 6.25 0 0 0 2.81-3.65zM12 5.25a6 6 0 0 1 5.85 4.65l-.35.1H6.5l-.35-.1A6 6 0 0 1 12 5.25z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">☁️ Cloud & DevOps</h3>
          <p className="text-gray-300 mb-6">Infraestrutura completa e automação de deploys</p>
          {["AWS (EC2, RDS, S3)","Jenkins","Git (GitHub/GitLab)","Docker","CI/CD Pipelines"].map((t)=>(
            <div className="flex items-center space-x-3" key={t}>
              <i className="fas fa-check-circle text-yellow-400"></i><span className="text-gray-300">{t}</span>
            </div>
          ))}
        </div>
        {/* Other */}
        <div className="tech-card bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-lg fade-in">
          <div className="text-5xl text-red-400 mb-6">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">🛠️ Outras Tecnologias</h3>
          <p className="text-gray-300 mb-6">Ferramentas e metodologias complementares</p>
          {[["fab fa-node-js","Node.js"],["fas fa-code","APIs REST"],["fas fa-layer-group","Arquitetura Limpa"],["fas fa-cube","Padrões SOLID"],["fas fa-project-diagram","Pipelines CI/CD"]].map(([icon,label])=> (
            <div className="flex items-center space-x-3" key={label}>
              <i className={icon + " text-cyan-400"}></i><span className="text-gray-300">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-gray-400">© 2024 Desenvolvedor Full Stack. Transformando ideias em realidade digital.</p>
    </div>
  </footer>
);

const ContactModal: React.FC<{ open: boolean; onClose: ()=>void; }> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={(e)=>{ if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Entre em Contato</h3>
          <p className="text-gray-600">Vamos conversar sobre seu próximo projeto!</p>
        </div>
        <form className="space-y-4" onSubmit={(e)=>{ e.preventDefault(); alert('Demo: Formulário enviado com sucesso! Em um site real, isso enviaria sua mensagem.'); onClose(); }}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Seu nome" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="seu@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
            <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Conte-me sobre seu projeto..."></textarea>
          </div>
          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">Cancelar</button>
            <button type="submit" className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Enviar Mensagem</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Contact: React.FC<{ onOpen: ()=>void }> = ({ onOpen }) => (
  <section id="contact" className="py-20 gradient-bg text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Vamos Trabalhar Juntos?</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
        <p className="text-xl mb-12 text-gray-300">Estou sempre aberto a novos desafios e oportunidades de crescimento</p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            ["fas fa-envelope","Email","seu.email@exemplo.com"],
            ["fab fa-linkedin","LinkedIn","linkedin.com/in/seuperfil"],
            ["fab fa-github","GitHub","github.com/seuusuario"]
          ].map(([icon,title,desc]) => (
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-gray-600" key={title}>
              <i className={icon + " text-3xl text-cyan-400 mb-4"}></i>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
        <button onClick={onOpen} className="bg-cyan-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-cyan-300 transition-all transform hover:scale-105">
          <i className="fas fa-paper-plane mr-2"></i>Entrar em Contato
        </button>
      </div>
    </div>
  </section>
);

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  useFadeInOnScroll();
  const toAbout = () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  const toContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  return (
    <div className="bg-gray-900">
      <NavBar />
      <main>
        <Hero onCTAPrimary={toAbout!} onCTASecondary={toContact!} />
        <About />
        <Skills />
        <Contact onOpen={()=>setContactOpen(true)} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={()=>setContactOpen(false)} />
    </div>
  );
}