import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login';
import Notes from '../Notes';
import Note from '../Note';

function Content() {
  return (
    <Routes>
      <Route path="notes" element={<Notes />} />
      <Route path="note" element={<Note />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default Content;
