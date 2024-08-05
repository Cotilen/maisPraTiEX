import React, { useState, useContext } from 'react';
import { UserProfileContext } from './UserProfileContext';

const EditProfile = () => {
  const { profile, updateProfile } = useContext(UserProfileContext);
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ name, email });
  };

  return (
    <div>
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditProfile;
