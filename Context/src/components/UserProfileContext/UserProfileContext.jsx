import React, { createContext, useState } from 'react';

const UserProfileContext = createContext();

const UserProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: 'Pessoa',
    email: 'testa@gmail.com',
  });

  const updateProfile = (newProfile) => {
    setProfile(newProfile);
  };

  return (
    <UserProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export { UserProfileContext, UserProfileProvider };
