import React, { useState, useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';

const AddToFavorites = () => {
  const { addToFavorites } = useContext(FavoritesContext);
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addToFavorites(item);
    setItem('');
  };

  return (
    <div>
      <h2>Adicionar aos Favoritos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Digite o item"
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddToFavorites;
