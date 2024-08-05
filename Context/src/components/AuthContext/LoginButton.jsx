import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const LoginButton = () => {
  const {toggleAuthLogin } = useContext(AuthContext);

  return (
    <button onClick={toggleAuthLogin}>
        Logar
    </button>
  );
};

export default LoginButton;
