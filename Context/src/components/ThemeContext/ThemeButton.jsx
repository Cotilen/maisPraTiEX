import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeButton = () => {
  const { theme, toggleTheme, buttonStyle } = useContext(ThemeContext);

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      Mudar para tema {theme === 'light' ? 'escuro' : 'claro'}
    </button>
  );
};

export default ThemeButton;
