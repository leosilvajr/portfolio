import React from "react";

export const Skills: React.FC = () => (
  <section id="skills" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tecnologias & Especialidades</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8" />
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">Stack completo para desenvolvimento de soluções escaláveis e modernas</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Back-End */}
        <div className="tech-card bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-lg fade-in">
          <div className="text-5xl text-green-400 mb-6" aria-hidden="true">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 8.349v7.302c0 .615-.456 1.172-1.109 1.352l-6.348 1.733c-.364.099-.746.099-1.11 0L9.085 17.003c-.653-.18-1.109-.737-1.109-1.352V8.349c0-.615.456-1.172 1.109-1.352l6.348-1.733c.364-.099.746-.099 1.11 0l6.348 1.733c.653.18 1.109.737 1.109 1.352zM12 14.577c-1.42 0-2.577-1.157-2.577-2.577S10.58 9.423 12 9.423s2.577 1.157 2.577 2.577S13.42 14.577 12 14.577z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">💻 Back-End</h3>
          <p className="text-gray-300 mb-6">APIs robustas com foco em performance, escalabilidade e segurança</p>
          {["C# / .NET Core","Entity Framework","Dapper","Hangfire","Web APIs REST"].map((t) => (
            <div className="flex items-center space-x-3" key={t}>
              <i className="fas fa-check-circle text-green-400" aria-hidden="true" />
              <span className="text-gray-300">{t}</span>
            </div>
          ))}
        </div>

        {/* Front-End */}
        <div className="tech-card bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-lg fade-in">
          <div className="text-5xl text-cyan-400 mb-6" aria-hidden="true">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">🌐 Front-End</h3>
          <p className="text-gray-300 mb-6">Interfaces modernas e responsivas com excelente UX</p>
          {["Angular","React","TypeScript","HTML5 / CSS3","Bootstrap / Tailwind"].map((t) => (
            <div className="flex items-center space-x-3" key={t}>
              <i className="fas fa-check-circle text-cyan-400" aria-hidden="true" />
              <span className="text-gray-300">{t}</span>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="tech-card bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-lg fade-in">
          <div className="text-5xl text-purple-400 mb-6" aria-hidden="true">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">📱 Mobile</h3>
          <p className="text-gray-300 mb-6">Aplicativos mobile escaláveis e performáticos</p>
          {["React Native","JavaScript / TypeScript","Expo","Redux / Context API"].map((t) => (
            <div className="flex items-center space-x-3" key={t}>
              <i className="fas fa-check-circle text-purple-400" aria-hidden="true" />
              <span className="text-gray-300">{t}</span>
            </div>
          ))}
          {/* <div className="mt-4 p-3 bg-gray-700 rounded-lg border border-gray-600">
            <p className="text-sm text-purple-300">Projetos pessoais e soluções escaláveis</p>
          </div> */}
        </div>

        {/* Database */}
        <div className="tech-card bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-lg fade-in">
          <div className="text-5xl text-orange-400 mb-6" aria-hidden="true">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">🗄️ Banco de Dados</h3>
          <p className="text-gray-300 mb-6">Gerenciamento eficiente de dados estruturados e não estruturados</p>
          {["SQL Server (RDS)","Redis (Cache)","MongoDB","Stored Procedures","Query Optimization"].map((t) => (
            <div className="flex items-center space-x-3" key={t}>
              <i className="fas fa-check-circle text-orange-400" aria-hidden="true" />
              <span className="text-gray-300">{t}</span>
            </div>
          ))}
        </div>

        {/* Cloud & DevOps */}
        <div className="tech-card bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-lg fade-in">
          <div className="text-5xl text-yellow-400 mb-6" aria-hidden="true">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.75 11.35a6.25 6.25 0 1 0-11.69 3.65L8 16.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5l.94-1.5a6.25 6.25 0 0 0 2.81-3.65zM12 5.25a6 6 0 0 1 5.85 4.65l-.35.1H6.5l-.35-.1A6 6 0 0 1 12 5.25z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">☁️ Cloud & DevOps</h3>
          <p className="text-gray-300 mb-6">Infraestrutura completa e automação de deploys</p>
          {["AWS (EC2, RDS, S3)","Jenkins","Git (GitHub/GitLab)","Docker","CI/CD Pipelines"].map((t) => (
            <div className="flex items-center space-x-3" key={t}>
              <i className="fas fa-check-circle text-yellow-400" aria-hidden="true" />
              <span className="text-gray-300">{t}</span>
            </div>
          ))}
        </div>

        {/* Other */}
        <div className="tech-card bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-lg fade-in">
          <div className="text-5xl text-red-400 mb-6" aria-hidden="true">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">🛠️ Outras Tecnologias</h3>
          <p className="text-gray-300 mb-6">Ferramentas e metodologias complementares</p>
          {[
            ["fab fa-node-js","Node.js"],
            ["fas fa-code","APIs REST"],
            ["fas fa-layer-group","Arquitetura Limpa"],
            ["fas fa-cube","Padrões SOLID"],
            ["fas fa-project-diagram","Pipelines CI/CD"],
          ].map(([icon, label]) => (
            <div className="flex items-center space-x-3" key={label}>
              <i className={`${icon} text-cyan-400`} aria-hidden="true" />
              <span className="text-gray-300">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
