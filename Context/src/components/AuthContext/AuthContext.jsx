import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState('deslogado');

  const toggleAuthLogin = () => {
    setAuth('logado');
  };

  const toggleAuthLogout = () => {
    setAuth('deslogado');
  };

  return (
    <AuthContext.Provider value={{auth, toggleAuthLogin, toggleAuthLogout}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider};
