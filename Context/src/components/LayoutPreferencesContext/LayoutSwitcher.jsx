import React, { useContext } from 'react';
import { LayoutPreferencesContext } from './LayoutPreferencesContext';

const LayoutSwitcher = () => {
  const { changePreferences } = useContext(LayoutPreferencesContext);

  const handleSpacingChange = (e) => {
    changePreferences({ spacing: e.target.value });
  };

  const handleFontSizeChange = (e) => {
    changePreferences({ fontSize: e.target.value });
  };

  const handleFontFamilyChange = (e) => {
    changePreferences({ fontFamily: e.target.value });
  };

  return (
    <div>
      <h2>Alterar Preferências de Layout</h2>
      <div>
        <label>
          Espaçamento:
          <select onChange={handleSpacingChange}>
            <option value="normal">Normal</option>
            <option value="wide">Largo</option>
            <option value="narrow">Estreito</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Tamanho da Fonte:
          <select onChange={handleFontSizeChange}>
            <option value="small">Pequeno</option>
            <option value="medium">Médio</option>
            <option value="large">Grande</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Fonte:
          <select onChange={handleFontFamilyChange}>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default LayoutSwitcher;
