import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login';
import NotesList from '../NotesList';
import Note from '../Note';

function Content() {
  return (
    <Routes>
      <Route exact path="notes-list" element={<NotesList />} />
      <Route exact path="note" element={<Note />} />
      <Route exact path="/" element={<Login />} />
    </Routes>
  );
}

export default Content;
