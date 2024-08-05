import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  // Simular dados de resultados de busca
  const data = [
    { id: 1, title: 'Result 1' },
    { id: 2, title: 'Result 2' },
    { id: 3, title: 'Result 3' },
  ];

  // Filtrar resultados com base na query
  const filteredResults = data.filter((item) =>
    item.title.toLowerCase().includes(query?.toLowerCase() || '')
  );

  return (
    <div>
      <h1>Search Results</h1>
      <p>Results for: {query}</p>
      <ul>
        {filteredResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
