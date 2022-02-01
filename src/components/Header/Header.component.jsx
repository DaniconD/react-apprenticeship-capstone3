import React, { useState } from 'react';
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
  NavVarList,
  StyledHeaderButton,
} from '../StyledComponents/StyledComponentsList';

function Header() {
  const [display, setDisplay] = useState(false);
  const { theme, setTheme } = useTheme();
  const { setSearch } = useSearch();
  return (
    <div>
      <StyledHeader toggle={theme}>
        {/* <Link to="#" onClick={() => setDisplay(!display)}>
          <FiMenu />
        </Link> */}
        <StyledHeaderButton onClick={() => setDisplay(!display)}>
          <FiMenu />
        </StyledHeaderButton>
        <SearchBar>
          <AiOutlineSearch />
          <StyledInput
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchBar>
        <StyledButton onClick={() => setTheme(!theme)}>
          Toggle theme
        </StyledButton>
      </StyledHeader>
      <StyledHeader toggle={theme} navbar displayList={display}>
        <NavVarList>
          <Link to="/">Log In/Log Out</Link> |{' '}
          <Link to="/notes-list">Notes</Link> |{' '}
          <Link to="/archived">Archived</Link>
        </NavVarList>
      </StyledHeader>
    </div>
  );
}

export default Header;
