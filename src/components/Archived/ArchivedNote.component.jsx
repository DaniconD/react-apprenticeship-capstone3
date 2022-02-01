import React, { useState } from 'react';
import { BsTrash2 } from 'react-icons/bs';
import {
  NoteContainer,
  NoteFooter,
  StyledButton,
} from '../StyledComponents/StyledComponentsList';

function ArchivedNote({
  id,
  text,
  color,
  handleRestoreNote,
  handleDeleteNote,
}) {
  const [colorPicker] = useState(color);
  return (
    <NoteContainer bgColor={colorPicker}>
      <span>{text}</span>
      <NoteFooter>
        <div> </div>
        <StyledButton white onClick={() => handleRestoreNote(id)}>
          Restore
        </StyledButton>
        <BsTrash2 size="1.3em" onClick={() => handleDeleteNote(id)} />
      </NoteFooter>
    </NoteContainer>
  );
}

export default ArchivedNote;
