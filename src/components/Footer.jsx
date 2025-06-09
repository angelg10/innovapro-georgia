import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Se eliminó FaTwitter
import XIcon from './XIcon'; // Se importa el nuevo icono de X

const Footer = ({ translations }) => {
  return (
    <footer className="bg-[#545454] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 text-center">
        
        {/* Logo y Nombre */}
        <div className="flex flex-col items-center mb-8">
            <div className="text-3xl font-bold">
                <span className="text-white">InnovaPro</span>
                <span className="text-[#ffa500]"> Construction</span>
            </div>
            <p className="text-gray-300 mt-2">Building your dreams, one project at a time.</p>
        </div>

        {/* Redes Sociales */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:scale-125 transition-all duration-300" aria-label="Facebook">
            <FaFacebook size={28} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:scale-125 transition-all duration-300" aria-label="Instagram">
            <FaInstagram size={28} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:scale-125 transition-all duration-300" aria-label="Twitter/X">
            <XIcon size={24} /> {/* Se reemplazó el icono de Twitter por el de X */}
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} InnovaPro Georgia, LLC. <span>{translations.rights}</span></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
