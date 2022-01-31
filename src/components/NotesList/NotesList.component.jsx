import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Data } from '../../data/data';
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
  const [notes, setNotes] = useState(Data);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNewNote = (noteText, noteColor) => {
    const newNote = {
      id: nanoid(),
      text: noteText,
      color: noteColor,
      state: 'visible',
    };
    const NewNotes = [...notes, newNote];
    setNotes(NewNotes);
  };

  const addToArchive = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const updateNote = (noteId, noteText, noteColor) => {
    const noteToUpdate = notes.find((item) => item.id === noteId);
    noteToUpdate.color = noteColor;
    noteToUpdate.text = noteText;
    const newNotes = [...notes];
    setNotes(newNotes);
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText)
  );

  return (
    <div>
      <Header />
      <Container toggle={theme}>
        <h2>
          {notes.length > 0
            ? 'Your Notes'
            : 'There are no notes; please create a new one using the creation note input.'}
        </h2>
        <NotesListContainer>
          {filteredNotes.map((note, index) => (
            <Note
              // eslint-disable-next-line react/no-array-index-key
              key={`note/${index}`}
              id={note.id}
              text={note.text}
              color={note.color}
              handleDeleteNote={deleteNote}
              handleUpdateNote={updateNote}
            />
          ))}
          <AddNote handleAddNote={addNewNote} />
        </NotesListContainer>
      </Container>
    </div>
  );
}

export default NotesList;
