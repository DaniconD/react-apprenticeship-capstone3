import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  StyledHeader,
  StyledInput,
} from '../StyledComponents/StyledComponentsList';

function Header() {
  return (
    <StyledHeader>
      <AiOutlineSearch />
      <StyledInput type="text" placeholder="Search..." onChange={() => {}} />
    </StyledHeader>
  );
}

export default Header;
