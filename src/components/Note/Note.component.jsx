import React from 'react';
import { BiArchiveIn } from 'react-icons/bi';
import {
  NoteContainer,
  NoteFooter,
} from '../StyledComponents/StyledComponentsList';

function Note() {
  return (
    <NoteContainer>
      <input type="text" placeholder="Add some text..." onChange={() => {}} />
      <NoteFooter>
        <input type="button" value="Select a color" />
        <BiArchiveIn size="1.3em" />
      </NoteFooter>
    </NoteContainer>
  );
}

export default Note;
