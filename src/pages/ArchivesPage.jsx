import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNotes } from '../contexts/NotesContext';
import NoteItem from '../components/NoteItem';

const ArchivesPage = () => {
  const { notes } = useNotes();
  const [search, setSearch] = useState('');

  const archivedNotes = notes.filter(
    note =>
      note.archived &&
      (note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.body.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="app">
      <div className="archive-header">
        <h1>Arsip Catatan</h1>
        <Link to="/" className="btn-back">Kembali</Link>
      </div>

      <input
        type="text"
        placeholder="Cari catatan arsip..."
        className="search-archive"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

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
