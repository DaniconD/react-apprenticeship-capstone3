import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../StyledComponents/StyledComponentsList';

function Notes() {
  return (
    <Container>
      <Link to="/">Login</Link>
      <Link to="/note">Note</Link>
    </Container>
  );
}

export default Notes;
