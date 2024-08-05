// LocalizedContent.jsx
import React, { useContext } from 'react';
import { AdvancedLanguageContext } from './AdvancedLanguageContext';

const LocalizedContent = () => {
  const { content, language, region } = useContext(AdvancedLanguageContext);

  return (
    <div>
      <h2>Conteúdo Localizado</h2>
      <p>Idioma: {language}</p>
      <p>Região: {region}</p>
      <p>{content}</p>
    </div>
  );
};

export default LocalizedContent;
