// UserDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// usersData.js
const users = [
    { id: 1, name: 'João', email: 'joao@example.com' },
    { id: 2, name: 'Maria', email: 'maria@example.com' },
    { id: 3, name: 'Pedro', email: 'pedro@example.com' },
    // Adicione mais usuários conforme necessário
  ];
  
const UserDetail = () => {
  const { userId } = useParams();
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = users.find(user => user.id === parseInt(userId));
    setUser(user);
  }, [userId]);

  if (!user) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Detalhes do Usuário</h1>
      <p>ID: {user.id}</p>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetail;
