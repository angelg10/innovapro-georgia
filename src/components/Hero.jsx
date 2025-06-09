import React from 'react';

const Hero = ({ translations }) => {
  return (
    <section id="home" className="min-h-screen bg-cover bg-center flex items-center justify-center pt-16" style={{ backgroundImage: "url('https://placehold.co/1920x1080/e2e8f0/545454?text=Remodeled+Kitchen')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">{translations.title}</h1>
        <p className="mt-4 text-lg md:text-2xl">{translations.subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#contact" className="gradient-bg text-white font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity">
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
