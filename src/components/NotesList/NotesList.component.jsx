import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useSearch } from '../../providers/Search/Search.provider';
import { useTheme } from '../../providers/Theme/Theme.provider';
import {
  Container,
  NotesListContainer,
} from '../StyledComponents/StyledComponentsList';
import Header from '../Header';
import Note from '../Note';
import AddNote from '../AddNote/AddNote.component';

function NotesList() {
  const { theme } = useTheme();
  const { searchText } = useSearch();
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'this is my first note!',
      color: '#fef68a',
    },
    {
      id: nanoid(),
      text: 'this is my second note!',
      color: '#fef68a',
    },
    {
      id: nanoid(),
      text: 'this is my third note!',
      color: '#fef68a',
    },
    {
      id: nanoid(),
      text: 'this is my fourth note!',
      color: '#fef68a',
    },
    {
      id: nanoid(),
      text: 'this is my fifth note!',
      color: '#fef68a',
    },
  ]);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNewNote = (noteText) => {
    // eslint-disable-next-line no-multi-assign
    const newNote = {
      id: nanoid(),
      text: noteText,
      color: '#fef68a',
    };
    const NewNotes = [...notes, newNote];
    setNotes(NewNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText)
  );

  return (
    <div>
      <Header />
      <Container toggle={theme}>
        <h2>{notes.length > 0 ? 'Your Notes' : 'Add a Note!'}</h2>
        <NotesListContainer>
          {filteredNotes.map((note, index) => (
            <Note
              // eslint-disable-next-line react/no-array-index-key
              key={`note/${index}`}
              id={note.id}
              text={note.text}
              color={note.color}
              handleDeleteNote={deleteNote}
            />
          ))}
          <AddNote handleAddNote={addNewNote} />
        </NotesListContainer>
      </Container>
    </div>
  );
}

export default NotesList;
