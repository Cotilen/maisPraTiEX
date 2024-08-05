import React, { useContext } from 'react';
import { UserPreferencesContext } from './UserPreferenceContext';

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

const ItemList = () => {
  const { viewMode } = useContext(UserPreferencesContext);

  return (
    <div style={{ display: viewMode === 'grid' ? 'grid' : 'block', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      {items.map((item) => (
        <div key={item.id} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
