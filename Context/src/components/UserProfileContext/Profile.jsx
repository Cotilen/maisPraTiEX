import React, { useContext } from 'react';
import { UserProfileContext } from './UserProfileContext';

const Profile = () => {
  const { profile } = useContext(UserProfileContext);

  return (
    <div>
      <h2>Dados do Perfil</h2>
      <p><strong>Nome:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
    </div>
  );
};

export default Profile;
