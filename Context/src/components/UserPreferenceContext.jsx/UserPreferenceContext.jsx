import React, { createContext, useState } from 'react';

const UserPreferencesContext = createContext();

const UserPreferencesProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState('list');

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'list' ? 'grid' : 'list'));
  };

  return (
    <UserPreferencesContext.Provider value={{ viewMode, toggleViewMode }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export { UserPreferencesContext, UserPreferencesProvider };

