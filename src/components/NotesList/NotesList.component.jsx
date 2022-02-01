import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useSearch } from '../../providers/Search/Search.provider';
import { useTheme } from '../../providers/Theme/Theme.provider';
import {
  Container,
  NotesListContainer,
} from '../StyledComponents/StyledComponentsList';
import Header from '../Header';
import AddNote from '../AddNote/AddNote.component';
import Note from '../Note';

function NotesList() {
  const { theme } = useTheme();
  const { searchText } = useSearch();
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

  const addNewNote = (noteText, noteColor) => {
    const newNote = {
      id: nanoid(),
      text: noteText,
      color: noteColor,
      visible: true,
    };
    const NewNotes = [...notes, newNote];
    setNotes(NewNotes);
  };

  const updateNote = (noteId, noteText, noteColor) => {
    const noteToUpdate = notes.find((item) => item.id === noteId);
    noteToUpdate.color = noteColor;
    noteToUpdate.text = noteText;
    const newNotes = [...notes];
    setNotes(newNotes);
  };

  const addToArchive = (noteId) => {
    const noteToUpdate = notes.find((item) => item.id === noteId);
    noteToUpdate.visible = false;
    const newNotes = [...notes];
    setNotes(newNotes);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.text.toLowerCase().includes(searchText) && note.visible === true
  );

  return (
    <div>
      <Header />
      <Container toggle={theme}>
        <h2>
          {filteredNotes.length > 0
            ? 'Your Notes'
            : 'There are no notes, create a new one!'}
        </h2>
        <NotesListContainer>
          {filteredNotes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              text={note.text}
              color={note.color}
              handleUpdateNote={updateNote}
              handleAddToArchive={addToArchive}
            />
          ))}
          <AddNote handleAddNote={addNewNote} />
        </NotesListContainer>
      </Container>
    </div>
  );
}

export default NotesList;
