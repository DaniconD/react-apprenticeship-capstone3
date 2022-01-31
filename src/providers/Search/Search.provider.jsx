import React, { useContext, useState } from 'react';

const SearchContext = React.createContext();

function SearchProvider({ children }) {
  const [searchText, setSearch] = useState('');
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { searchText, setSearch };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export { useSearch };
export default SearchProvider;
