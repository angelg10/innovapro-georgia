import React, { useState, useEffect } from 'react';

// --- CORRECCIÓN ---
// Se importan las imágenes para obtener sus rutas correctas
import image1 from '../assets/instalation_roofing_4.jpg';
import image2 from '../assets/Roofing-after.jpg';
import image3 from '../assets/instalation_fence_1.jpg';

// Se usa el array con las variables importadas
const images = [image1, image2, image3];

const Hero = ({ translations }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow de fondo */}
      {images.map((src, index) => (
        <div
          key={index} // Se usa el índice como key ya que las imágenes no cambian de orden
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url(${src})`,
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: 1,
          }}
        />
      ))}
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Contenido de texto */}
      <div className="relative text-center text-white px-4 z-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">{translations.title}</h1>
        <p className="mt-4 text-lg md:text-2xl">{translations.subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#contact" className="gradient-bg text-white font-bold py-3 px-8 rounded-full text-lg hover:scale-105 transition-transform">
            {translations.cta1}
          </a>
          <a href="#services" className="border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-[#545454] transition-colors">
            {translations.cta2}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;