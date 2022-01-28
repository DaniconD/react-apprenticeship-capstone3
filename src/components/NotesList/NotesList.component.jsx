import React from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react/cjs/react.development';
import {
  Container,
  NotesListContainer,
} from '../StyledComponents/StyledComponentsList';
import Note from '../Note';
import AddNote from '../AddNote/AddNote.component';

function NotesList() {
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

  const addNewNote = (noteText) => {
    // eslint-disable-next-line no-multi-assign
    const newNote = {
      id: nanoid(),
      text: noteText,
      color: 'yellow',
    };
    const NewNotes = [...notes, newNote];
    setNotes(NewNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <h2>Add a Note!</h2>
      <NotesListContainer>
        {notes.map((note, index) => (
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
  );
}

export default NotesList;
