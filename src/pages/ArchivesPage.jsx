import React from 'react';
import { Link } from 'react-router-dom';
import { useNotes } from '../contexts/NotesContext';
import NoteItem from '../components/NoteItem';

const ArchivesPage = () => {
  const { notes } = useNotes();

  const archivedNotes = notes.filter(note => note.archived);

  return (
    <div className="app">
  <h1>Arsip Catatan</h1>

  {archivedNotes.length > 0 ? (
    archivedNotes.map(note => (
      <NoteItem key={note.id} note={note} />
    ))
  ) : (
    <div className="empty-archive">
      <p>✨ Arsip kosong. Malam ini masih sunyi 🌙</p>
      <img src="/images/notarchived.jpg" alt="Arsip Kosong" />
      <Link to="/" className="btn">Kembali ke Daftar</Link>
    </div>
  )}
</div>

  );
};

export default ArchivesPage;