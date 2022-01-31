import React, { useState } from 'react';
import { BiArchiveIn } from 'react-icons/bi';
import {
  NoteContainer,
  NoteFooter,
  StyledButton,
} from '../StyledComponents/StyledComponentsList';

function Note({ id, text, color, handleDeleteNote, handleUpdateNote }) {
  const [noteText, setNoteText] = useState(text);
  const [colorPicker, setColorPicker] = useState(color);

  return (
    <NoteContainer bgColor={colorPicker}>
      <textarea
        rows="8"
        cols="10"
        placeholder="Add some text!"
        value={noteText}
        onChange={(e) => {
          setNoteText(e.target.value);
        }}
      />
      <NoteFooter>
        <input
          type="color"
          value={colorPicker}
          onChange={(e) => setColorPicker(e.target.value)}
        />
        <StyledButton
          white
          onClick={() => handleUpdateNote(id, noteText, colorPicker)}
        >
          Update
        </StyledButton>
        <BiArchiveIn size="1.3em" onClick={() => handleDeleteNote(id)} />
      </NoteFooter>
    </NoteContainer>
  );
}

export default Note;
