import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { useSearch } from '../../providers/Search/Search.provider';
import { useTheme } from '../../providers/Theme/Theme.provider';
import {
  StyledHeader,
  StyledInput,
  SearchBar,
  StyledButton,
} from '../StyledComponents/StyledComponentsList';

function Header() {
  const { theme, setTheme } = useTheme();
  const { setSearch } = useSearch();
  return (
    <StyledHeader toggle={theme}>
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
      <StyledButton onClick={() => setTheme(!theme)}>Toggle theme</StyledButton>
    </StyledHeader>
  );
}

export default Header;
