import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const LogoutButton = () => {
  const {toggleAuthLogout } = useContext(AuthContext);

  return (
    <button onClick={toggleAuthLogout}>
        Deslogar
    </button>
  );
};

export default LogoutButton;
