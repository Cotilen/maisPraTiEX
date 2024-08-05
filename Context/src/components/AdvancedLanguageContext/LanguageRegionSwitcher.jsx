// LanguageRegionSwitcher.jsx
import React, { useContext } from 'react';
import { AdvancedLanguageContext } from './AdvancedLanguageContext';

const LanguageRegionSwitcher = () => {
  const { changeLanguageAndRegion } = useContext(AdvancedLanguageContext);

  return (
    <div>
      <h2>Alterar Idioma e Região</h2>
      <button onClick={() => changeLanguageAndRegion('en')}>Inglês</button>
      <button onClick={() => changeLanguageAndRegion('es')}>Espanhol</button>
      <button onClick={() => changeLanguageAndRegion('pt')}>Português</button>
    </div>
  );
};

export default LanguageRegionSwitcher;
