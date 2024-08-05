import React, { createContext, useState } from 'react';

const LayoutPreferencesContext = createContext();

const defaultPreferences = {
  spacing: 'normal',
  fontSize: 'medium',
  fontFamily: 'Arial',
};

const LayoutPreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState(defaultPreferences);

  const changePreferences = (newPreferences) => {
    setPreferences((prevPreferences) => ({ ...prevPreferences, ...newPreferences }));
  };

  return (
    <LayoutPreferencesContext.Provider value={{ preferences, changePreferences }}>
      {children}
    </LayoutPreferencesContext.Provider>
  );
};

export { LayoutPreferencesContext, LayoutPreferencesProvider };
