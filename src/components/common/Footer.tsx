import React from "react";

export const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Desenvolvedor Full Stack. Transformando ideias em realidade digital.
      </p>
    </div>
  </footer>
);
