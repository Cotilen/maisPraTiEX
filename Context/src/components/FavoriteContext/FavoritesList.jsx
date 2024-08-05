import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';

const FavoritesList = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Lista de Favoritos</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>{favorite}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
