import React from "react";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  const closeOnOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Demo: Formulário enviado com sucesso! Em um site real, isso enviaria sua mensagem.");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={closeOnOverlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
    >
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <h3 id="contact-title" className="text-2xl font-bold text-gray-800 mb-2">Entre em Contato</h3>
          <p className="text-gray-600">Vamos conversar sobre seu próximo projeto!</p>
        </div>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Seu nome" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="seu@email.com" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
            <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Conte-me sobre seu projeto..." required />
          </div>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Cancelar
            </button>
            <button type="submit" className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
