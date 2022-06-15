import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import './app.css';
import { ViewHome } from './views/home';
import { ViewUsers } from './views/users';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<ViewHome />} />
      <Route path="users" element={<ViewUsers />} />
    </Routes>
  );
}

export default App;
