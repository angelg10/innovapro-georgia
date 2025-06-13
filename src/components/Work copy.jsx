import React from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider'; // Importamos el nuevo componente

const Work = ({ translations }) => {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{translations.title}</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">{translations.intro}</p>
        
        <BeforeAfterSlider 
          beforeImage="https://placehold.co/700x400/d1d5db/545454?text=Before"
          afterImage="https://placehold.co/700x400/ffde59/545454?text=After"
          beforeLabel={translations.before}
          afterLabel={translations.after}
        />
        
        <p className="mt-8 text-gray-700 italic">{translations.caption}</p>
      </div>
    </section>
  );
};

export default Work;
