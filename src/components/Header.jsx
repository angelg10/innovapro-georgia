import React, { useState, useEffect } from 'react';
import houseIcon from '../assets/logo_superior.png'; // Asegúrate que 'logo_superior.png' esté en src/assets

const Header = ({ lang, setLang, translations }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
  }`;
  
  const navLinkColor = isScrolled ? 'text-gray-700' : 'text-white';

  return (
    <header id="header" className={headerClasses}>
      <nav className="container mx-auto px-4 sm:px-6 flex justify-between items-center transition-all duration-300" style={{ height: isScrolled ? '80px' : '100px' }}>
        {/* Logo compuesto */}
        <a href="#home" className="flex items-center space-x-2 flex-shrink-0">
          <img src={houseIcon} alt="InnovaPro Icon" className="transition-all duration-300" style={{ height: isScrolled ? '50px' : '70px' }} />
          <div className={`font-bold leading-tight ${isScrolled ? 'text-xl' : 'text-2xl'} transition-all duration-300`}>
            <div className="text-[#ffa500]">InnovaPro</div>
            <div className={`${isScrolled ? 'text-[#545454]' : 'text-white'} ml-px`}>Construction</div>
          </div>
        </a>
        
        {/* Navegación Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className={`${navLinkColor} font-semibold hover:text-[#ffa500] transition-colors`}>{translations.services}</a>
          <a href="#work" className={`${navLinkColor} font-semibold hover:text-[#ffa500] transition-colors`}>{translations.work}</a>
          <a href="#contact" className={`${navLinkColor} font-semibold hover:text-[#ffa500] transition-colors`}>{translations.contact}</a>
        </div>

        {/* Botones Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className={`${navLinkColor} text-sm font-semibold py-2 px-3 rounded-md hover:bg-white/20 transition-colors`}>
            {lang === 'en' ? 'Español' : 'English'}
          </button>
          <a href="#contact" className="gradient-bg text-white font-bold py-2 px-5 rounded-full hover:scale-105 transition-transform">
            {translations.quote}
          </a>
        </div>
        
        {/* Botón Menú Móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${navLinkColor} focus:outline-none`}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>
      
      {/* Menú Móvil */}
      <div className={`md:hidden bg-white/95 backdrop-blur-sm shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#services" className="block text-center text-gray-700 py-3 px-4 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>{translations.services}</a>
        <a href="#work" className="block text-center text-gray-700 py-3 px-4 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>{translations.work}</a>
        <a href="#contact" className="block text-center text-gray-700 py-3 px-4 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>{translations.contact}</a>
        <div className="py-4 flex flex-col items-center space-y-4 border-t border-gray-200">
          <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className="text-gray-700 font-semibold py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
            {lang === 'en' ? 'Español' : 'English'}
          </button>
          <a href="#contact" className="gradient-bg text-white font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform" onClick={() => setIsMenuOpen(false)}>
            {translations.quote}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
