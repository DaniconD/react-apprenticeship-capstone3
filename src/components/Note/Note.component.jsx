import React from 'react';
import { BiArchiveIn } from 'react-icons/bi';
import { useState } from 'react/cjs/react.development';
import {
  NoteContainer,
  NoteFooter,
} from '../StyledComponents/StyledComponentsList';

function Note({ id, text, color, handleDeleteNote }) {
  const [colorPicker, setColorPicker] = useState(color);

  return (
    <NoteContainer>
      <span>{text}</span>
      <NoteFooter>
        <input
          type="color"
          value={colorPicker}
          onChange={(e) => setColorPicker(e.target.value)}
        />
        <BiArchiveIn size="1.3em" onClick={() => handleDeleteNote(id)} />
      </NoteFooter>
    </NoteContainer>
  );
}

export default Note;
