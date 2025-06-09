import React from 'react';

const Contact = ({ translations }) => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{translations.title}</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">{translations.subtitle}</p>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 bg-white p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">{translations.infoTitle}</h3>
            <div className="space-y-4">
              <p><strong>Phone:</strong> <a href="tel:+1234567890" className="text-[#ffa500] hover:underline">(123) 456-7890</a></p>
              <p><strong>Email:</strong> <a href="mailto:contact@innovaprogeorgia.com" className="text-[#ffa500] hover:underline">contact@innovaprogeorgia.com</a></p>
              <p><strong>Address:</strong> <a href="https://www.google.com/maps/search/?api=1&query=2043+Lasalle+Dr+Valdosta+GA+31602" target="_blank" rel="noopener noreferrer" className="text-[#ffa500] hover:underline">2043 Lasalle Dr, Valdosta, GA 31602</a></p>
              <p><strong>{translations.bizType}</strong> <span>{translations.bizTypeValue}</span></p>
            </div>
          </div>
          <div className="md:w-1/2">
            <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-bold mb-2">{translations.formName}</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffa500]" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2">{translations.formEmail}</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffa500]" required />
              </div>
              <div className="mb-4">
                <label htmlFor="service" className="block text-sm font-bold mb-2">{translations.formService}</label>
                <select id="service" name="service" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffa500]">
                  <option>{translations.optionSelect}</option>
                  <option>{translations.optionRoofing}</option>
                  <option>{translations.optionFlooring}</option>
                  <option>{translations.optionPainting}</option>
                  <option>{translations.optionFence}</option>
                  <option>{translations.optionBath}</option>
                  <option>{translations.optionYard}</option>
                  <option>{translations.optionOther}</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-bold mb-2">{translations.formMessage}</label>
                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffa500]" required></textarea>
              </div>
              <button type="submit" className="w-full gradient-bg text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform">{translations.formSubmit}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
