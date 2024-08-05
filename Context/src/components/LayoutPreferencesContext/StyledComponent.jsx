import React, { useContext } from 'react';
import { LayoutPreferencesContext } from './LayoutPreferencesContext';

const StyledComponent = () => {
  const { preferences } = useContext(LayoutPreferencesContext);

  const style = {
    padding: preferences.spacing === 'wide' ? '20px' : preferences.spacing === 'narrow' ? '5px' : '10px',
    fontSize: preferences.fontSize === 'large' ? '20px' : preferences.fontSize === 'small' ? '12px' : '16px',
    fontFamily: preferences.fontFamily,
  };

  return (
    <div style={style}>
      <h2>Componente Estilizado</h2>
      <p>Este componente aplica as preferências de layout selecionadas.</p>
    </div>
  );
};

export default StyledComponent;
