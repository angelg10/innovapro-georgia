import React from 'react';

const portfolioImages = [
  'https://placehold.co/600x400/e2e8f0/545454?text=Roofing+Project',
  'https://placehold.co/600x400/e2e8f0/545454?text=Complete+Remodel',
  'https://placehold.co/600x400/e2e8f0/545454?text=Landscaping+Work',
  'https://placehold.co/600x400/e2e8f0/545454?text=Exterior+Painting',
  'https://placehold.co/600x400/e2e8f0/545454?text=New+Flooring',
  'https://placehold.co/600x400/e2e8f0/545454?text=Bathroom+Upgrade',
];

const Portfolio = ({ translations }) => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{translations.title}</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">{translations.intro}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((imgSrc, index) => (
            <div key={index} className="group relative rounded-lg overflow-hidden shadow-lg">
              <img src={imgSrc} alt={`Portfolio project ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
