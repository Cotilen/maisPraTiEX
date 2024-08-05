import React, { useContext } from 'react';
import { DynamicThemeContext } from './DynamicThemeContext';

const ThemeComponent = () => {
  const { theme } = useContext(DynamicThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.color, padding: '20px', borderRadius: '8px' }}>
      <h2>Este é um componente com tema</h2>
    </div>
  );
};

export default ThemeComponent;
