import React from 'react';
import { BeforeAfterVerticalVideo } from './BeforeAfterVerticalVideo'; // Importamos el nuevo componente

// --- CORRECCIÓN ---
// Importamos los videos directamente. Esto le da a Vite la ruta correcta.
import beforeVideoURL from '../assets/video/FlooringBefore.mp4';
import afterVideoURL from '../assets/video/FlooringAfter.mp4'; 

const Work = ({ translations }) => {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{translations.title}</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">{translations.intro}</p>
        
        <BeforeAfterVerticalVideo 
          // Usamos las variables importadas
          beforeVideo={beforeVideoURL}
          afterVideo={afterVideoURL}
          beforeLabel={translations.before}
          afterLabel={translations.after}
        />
        
        <p className="mt-8 text-gray-700 italic">{translations.caption}</p>
      </div>
    </section>
  );
};

export default Work;
