import React from 'react';
const SearchBar = ({ searchTerm }) => {
  const handleSearch = (e) => {
    searchTerm(e.target.value);
  };

  return (
    <div>
      <label>Search:</label>
      <input type="text" onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;