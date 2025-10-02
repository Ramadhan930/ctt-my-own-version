import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNotes } from '../contexts/NotesContext';
import NoteItem from '../components/NoteItem';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const { notes } = useNotes();
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const filteredNotes = notes
    .filter(note => !note.archived)
    .filter(note => note.title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <div className="app">
  <h1>Notes App</h1>
  <SearchBar />
  <div className="nav-links">
    <Link to="/notes/new" className="btn-link">Tambah Catatan</Link>
    <Link to="/archives" className="btn-link">Arsip</Link>
  </div>

  {filteredNotes.length > 0 ? (
    filteredNotes.map(note => (
      <NoteItem key={note.id} note={note} />
    ))
  ) : (
    <div className="empty-notes">
      <img src="/images/notfound.gif" alt="Tidak ada catatan" />
      <p>📜 Tidak ada catatan. Setiap malam butuh cerita, tapi kamu belum menuliskannya ✒️</p>
      <Link to="/notes/new" className="btn">Tulis Catatan</Link>
    </div>
  )}
</div>

  );
};

export default HomePage;