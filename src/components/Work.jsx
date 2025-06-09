import React from 'react';
import ImageSlider from './ImageSlider';

const Work = ({ translations }) => {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{translations.title}</h2>
        <p className="text-lg text-gray-600 mb-12">{translations.intro}</p>
        
        <ImageSlider 
          beforeImg="https://placehold.co/700x400/d1d5db/545454?text=Before"
          afterImg="https://placehold.co/700x400/ffde59/545454?text=After"
          beforeText={translations.before}
          afterText={translations.after}
        />
        
        <p className="mt-4 text-gray-700 italic">{translations.caption}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          <img src="https://placehold.co/400x300/e2e8f0/545454?text=Roofing+Job" alt="Roofing project" className="rounded-lg shadow-md hover:opacity-90 transition-opacity" />
          <img src="https://placehold.co/400x300/e2e8f0/545454?text=Painting+Job" alt="Painting project" className="rounded-lg shadow-md hover:opacity-90 transition-opacity" />
          <img src="https://placehold.co/400x300/e2e8f0/545454?text=Fence+Job" alt="Fence project" className="rounded-lg shadow-md hover:opacity-90 transition-opacity" />
          <img src="https://placehold.co/400x300/e2e8f0/545454?text=Bath+Remodel" alt="Bathroom remodel project" className="rounded-lg shadow-md hover:opacity-90 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default Work;
