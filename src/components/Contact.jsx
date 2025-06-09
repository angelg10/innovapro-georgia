import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = ({ translations }) => {
  const whatsappNumber = "12292329136";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'm interested in your construction services.")}`;

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{translations.title}</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">{translations.subtitle}</p>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 bg-white p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">{translations.infoTitle}</h3>
            <div className="space-y-6">
              {/* Phone and WhatsApp */}
              <div className="flex items-start">
                <FaPhone className="text-[#ffa500] text-xl mt-1 mr-4" />
                <div>
                  <strong>Phone:</strong>
                  <div className="flex items-center space-x-2 mt-1">
                    <a href="tel:+12292329136" className="text-gray-700 hover:text-[#ffa500] transition-colors">(229) 232-9136</a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-3 py-1 text-xs font-bold rounded-full flex items-center space-x-1 hover:bg-[#128C7E] transition-colors">
                      <FaWhatsapp />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start">
                <FaEnvelope className="text-[#ffa500] text-xl mt-1 mr-4" />
                <div>
                  <strong>Email:</strong><br />
                  <a href="mailto:contact@innovaprogeorgia.com" className="text-gray-700 hover:text-[#ffa500] transition-colors">contact@innovaprogeorgia.com</a>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#ffa500] text-xl mt-1 mr-4" />
                <div>
                  <strong>Address:</strong><br />
                  <a href="https://www.google.com/maps/search/?api=1&query=2043+Lasalle+Dr+Valdosta+GA+31602" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#ffa500] transition-colors">
                    2043 Lasalle Dr, Valdosta, GA 31602
                  </a>
                </div>
              </div>
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