import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  NotesListContainer,
} from '../StyledComponents/StyledComponentsList';
import Note from '../Note';

function NotesList() {
  return (
    <Container>
      <h2>Add a Note!</h2>
      <Link to="/">Login</Link>
      <NotesListContainer>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </NotesListContainer>
    </Container>
  );
}

export default NotesList;
