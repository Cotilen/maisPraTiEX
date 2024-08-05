import React, { createContext, useState } from 'react';

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [status, setStatus] = useState('desativadas');

  const toggleNotificationStatus = () => {
    setStatus((prevStatus) => prevStatus === 'desativadas' ? 'ativadas' : 'desativadas');
  };

  return (
    <NotificationContext.Provider value={{status,toggleNotificationStatus}}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider};
