import React, { createContext, useState } from 'react';

const AdvancedLanguageContext = createContext();

const languages = {
  en: {
    region: 'US',
    content: 'Hello, world!',
  },
  es: {
    region: 'ES',
    content: '¡Hola, mundo!',
  },
  pt: {
    region: 'BR',
    content: 'Olá, mundo!',
  },
};

const AdvancedLanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [region, setRegion] = useState(languages.en.region);

  const changeLanguageAndRegion = (lang) => {
    setLanguage(lang);
    setRegion(languages[lang].region);
  };

  return (
    <AdvancedLanguageContext.Provider value={{ language, region, changeLanguageAndRegion, content: languages[language].content }}>
      {children}
    </AdvancedLanguageContext.Provider>
  );
};

export { AdvancedLanguageContext, AdvancedLanguageProvider };
