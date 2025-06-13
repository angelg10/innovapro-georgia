import React from 'react';
import { BeforeAfterVideoSlider } from './BeforeAfterVideoSlider'; // Importamos el nuevo componente de video

// IMPORTANTE: Reemplaza estas URLs con las rutas a tus videos.
// Por ejemplo: import beforeVideoFile from '../assets/videos/before.mp4';
const beforeVideoURL = "https://www.w3schools.com/html/mov_bbb.mp4";
const afterVideoURL = "https://www.w3schools.com/html/mov_bbb.mp4"; // Reemplaza con tu video "después"

const Work = ({ translations }) => {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{translations.title}</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">{translations.intro}</p>
        
        <BeforeAfterVideoSlider 
          beforeVideo={beforeVideoURL}
          afterVideo={afterVideoURL} // Asegúrate de tener una URL diferente para el video "después"
          beforeLabel={translations.before}
          afterLabel={translations.after}
        />
        
        <p className="mt-8 text-gray-700 italic">{translations.caption}</p>
      </div>
    </section>
  );
};

export default Work;
