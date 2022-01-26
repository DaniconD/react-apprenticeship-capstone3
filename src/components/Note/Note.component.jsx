import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../StyledComponents/StyledComponentsList';

function Note() {
  return (
    <Container>
      <Link to="/notes">this is a note</Link>
    </Container>
  );
}

export default Note;
