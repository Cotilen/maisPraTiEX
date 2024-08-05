import React, { createContext, useState } from 'react';

const themes = {
  light: {
    background: '#ffffff',
    color: '#000000',
  },
  dark: {
    background: '#000000',
    color: '#ffffff',
  },
  blue: {
    background: '#0000ff',
    color: '#ffffff',
  },
};

const DynamicThemeContext = createContext();

const DynamicThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const changeTheme = (themeName) => {
    setTheme(themes[themeName]);
  };

  return (
    <DynamicThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </DynamicThemeContext.Provider>
  );
};

export { DynamicThemeContext, DynamicThemeProvider };
