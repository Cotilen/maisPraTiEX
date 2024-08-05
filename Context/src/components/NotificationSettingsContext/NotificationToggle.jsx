import React, { useContext } from 'react';
import { NotificationContext } from './NotificationSettingsContext';

const NotificationToggle = () => {
  const {toggleNotificationStatus } = useContext(NotificationContext);

  return (
    <button onClick={toggleNotificationStatus}>
        Ativar/Desativar notificações
    </button>
  );
};

export default NotificationToggle;
