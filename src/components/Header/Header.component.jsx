import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  StyledHeader,
  StyledInput,
} from '../StyledComponents/StyledComponentsList';

function Header() {
  return (
    <StyledHeader>
      <Link to="/">Login</Link>
      <AiOutlineSearch />
      <StyledInput type="text" placeholder="Search..." onChange={() => {}} />
    </StyledHeader>
  );
}

export default Header;
