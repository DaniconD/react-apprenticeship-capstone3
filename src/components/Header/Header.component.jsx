import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import {
  StyledHeader,
  StyledInput,
  SearchBar,
} from '../StyledComponents/StyledComponentsList';

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <FiMenu />
      </Link>
      <SearchBar>
        <AiOutlineSearch />
        <StyledInput type="text" placeholder="Search..." onChange={() => {}} />
      </SearchBar>
    </StyledHeader>
  );
}

export default Header;
