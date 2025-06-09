import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Portfolio from './components/Portfolio'; // Importa el nuevo componente
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import { translations } from './data/translations';
import './index.css';

function App() {
  const [lang, setLang] = useState('en');
  const currentTranslations = translations[lang];

  return (
    <div className="bg-white">
      <Header 
        lang={lang} 
        setLang={setLang} 
        translations={currentTranslations.navigation} 
      />
      <main>
        <Hero translations={currentTranslations.hero} />
        <Services translations={currentTranslations.services} />
        <Work translations={currentTranslations.work} />
        <Portfolio translations={currentTranslations.portfolio} /> {/* Añade la nueva sección */}
        <Contact translations={currentTranslations.contact} />
      </main>
      <Footer translations={currentTranslations.footer} />
      <WhatsAppButton />
    </div>
  );
}

export default App;