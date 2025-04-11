import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    border-radius: 4px;
    margin-bottom: 0.5rem;
  }
`;

const SearchButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  
  @media (max-width: 768px) {
    border-radius: 4px;
  }
`;

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = () => {
    onSearch(searchQuery);
  };
  
  return (
    <SearchContainer className="search-bar">
      <SearchInput 
        type="text" 
        placeholder="Search for jobs, skills, or companies..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;