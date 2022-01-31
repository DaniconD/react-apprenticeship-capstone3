import React, { useState, useEffect } from 'react';
import { useTheme } from '../../providers/Theme/Theme.provider';
import {
  Container,
  NotesListContainer,
} from '../StyledComponents/StyledComponentsList';
import Header from '../Header';
import ArchivedNote from './ArchivedNote.component';

function ArchivedNotesList() {
  const { theme } = useTheme();
  const [notes, setNotes] = useState([]);

  // Carga el contenido de LocalStore en la aplicacion
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Actualiza el contenido de LocalStorage
  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const restoreNote = (noteId) => {
    const noteToUpdate = notes.find((item) => item.id === noteId);
    noteToUpdate.visible = true;
    const newNotes = [...notes];
    setNotes(newNotes);
  };

  const deleteNote = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
  };

  const filteredNotes = notes.filter((note) => note.visible === false);

  return (
    <div>
      <Header />
      <Container toggle={theme}>
        <h2>
          {filteredNotes.length > 0
            ? 'Archived notes'
            : 'There are no Archived Notes'}
        </h2>
        <NotesListContainer>
          {filteredNotes.map((note) => (
            <ArchivedNote
              key={note.id}
              id={note.id}
              text={note.text}
              color={note.color}
              handleRestoreNote={restoreNote}
              handleDeleteNote={deleteNote}
            />
          ))}
        </NotesListContainer>
      </Container>
    </div>
  );
}

export default ArchivedNotesList;
