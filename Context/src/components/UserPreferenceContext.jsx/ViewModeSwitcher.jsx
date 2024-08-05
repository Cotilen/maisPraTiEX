import React, { useContext } from 'react';
import { UserPreferencesContext } from './UserPreferenceContext';


const ViewModeSwitcher = () => {
  const { viewMode, toggleViewMode } = useContext(UserPreferencesContext);

  return (
    <button onClick={toggleViewMode}>
      Mudar para modo {viewMode === 'list' ? 'grade' : 'lista'}
    </button>
  );
};

export default ViewModeSwitcher;
