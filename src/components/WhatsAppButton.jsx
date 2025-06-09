import React from 'react';

const WhatsAppButton = () => {
  // Número de teléfono en formato internacional sin '+' ni espacios
  const phoneNumber = "12292329136";
  const message = "Hello! I'm interested in your construction services."; // Mensaje predeterminado en inglés
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors z-50"
      aria-label="Contact us on WhatsApp"
    >
      {/* Icono de WhatsApp (SVG) */}
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.04 2.01C6.58 2.01 2.13 6.46 2.13 12c0 1.77.46 3.45 1.28 4.95L2 22l5.25-1.38c1.45.77 3.09 1.19 4.79 1.19h.01c5.46 0 9.91-4.45 9.91-9.91C21.95 6.46 17.5 2.01 12.04 2.01zM12.04 20.15c-1.57 0-3.05-.44-4.33-1.23l-.31-.18-3.22.84.86-3.14-.2-.32a8.21 8.21 0 01-1.26-4.38c0-4.54 3.68-8.22 8.22-8.22s8.22 3.68 8.22 8.22-3.69 8.22-8.22 8.22zm4.49-5.83c-.27-.13-1.59-.78-1.84-.87-.25-.09-.43-.13-.62.13-.19.27-.7.87-.86 1.04s-.32.2-.59.06c-.27-.13-1.14-.42-2.17-1.34-.81-.72-1.35-1.61-1.51-1.88-.16-.27 0-.42.12-.55.11-.11.25-.27.37-.41.13-.14.17-.24.25-.41.08-.17.04-.31-.02-.44s-.62-1.49-.85-2.04c-.23-.55-.46-.48-.62-.48h-.5c-.19 0-.49.09-.74.35-.25.27-.96.93-1.18 2.15s.27 2.61.32 2.78c.04.17.65 2.22 3.82 3.75 2.1 1.05 2.81 1.17 3.32 1.14.71.01 1.59-.64 1.81-1.26.22-.61.22-1.14.16-1.26-.06-.13-.24-.2-.51-.34z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
