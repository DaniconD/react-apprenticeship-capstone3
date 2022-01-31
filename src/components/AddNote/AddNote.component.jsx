import React, { useState } from 'react';
import {
  NoteContainer,
  NoteFooter,
  StyledButton,
} from '../StyledComponents/StyledComponentsList';

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState('');
  const [colorPicker, setColorPicker] = useState('#fef68a');
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, colorPicker);
      setNoteText('');
      setColorPicker('#fef68a');
    }
  };

  return (
    <NoteContainer add>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note!"
        value={noteText}
        onChange={handleChange}
      />
      <NoteFooter>
        <input
          type="color"
          value={colorPicker}
          onChange={(e) => setColorPicker(e.target.value)}
        />
        <small>{characterLimit - noteText.length} Remaining</small>
        <StyledButton onClick={handleSaveClick}>Add</StyledButton>
      </NoteFooter>
    </NoteContainer>
  );
}

export default AddNote;
