import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login';
import NotesList from '../NotesList';
import Archived from '../Archived';

function Content() {
  return (
    <Routes>
      <Route exact path="archived" element={<Archived />} />
      <Route exact path="notes-list" element={<NotesList />} />
      <Route exact path="/" element={<Login />} />
    </Routes>
  );
}

export default Content;
