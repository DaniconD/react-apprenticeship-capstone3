import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { useSearch } from '../../providers/Search/Search.provider';
import {
  StyledHeader,
  StyledInput,
  SearchBar,
  StyledButton,
} from '../StyledComponents/StyledComponentsList';

function Header() {
  const { setSearch } = useSearch();
  return (
    <StyledHeader>
      <Link to="/">
        <FiMenu />
      </Link>
      <SearchBar>
        <AiOutlineSearch />
        <StyledInput
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchBar>
      <StyledButton>Toggle theme</StyledButton>
    </StyledHeader>
  );
}

export default Header;
