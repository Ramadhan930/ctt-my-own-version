import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotesProvider } from './contexts/NotesContext';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import NewNotePage from './pages/NewNotePage';
import ArchivesPage from './pages/ArchivesPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <NotesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/new" element={<NewNotePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/archives" element={<ArchivesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </NotesProvider>
  );
}

export default App;