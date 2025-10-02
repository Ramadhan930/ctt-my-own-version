import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { useNotes } from '../contexts/NotesContext';
import { showFormattedDate } from '../utils/showFormattedDate';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notes, deleteNote, toggleArchive } = useNotes();

  const note = notes.find(note => note.id === id);

  if (!note) {
    return (
      <div className="app">
        <h1>Catatan tidak ditemukan</h1>
        <Link to="/">Kembali ke Daftar</Link>
      </div>
    );
  }

  const handleDelete = () => {
    deleteNote(id);
    navigate('/');
  };

  const handleToggleArchive = () => {
    toggleArchive(id);
    navigate(note.archived ? '/' : '/archives');
  };

  return (
    <div className="app">
      <div className="note-detail">
        <h1>{note.title}</h1>
        <p className="note-date">{showFormattedDate(note.createdAt)}</p>
        <div className="note-body">{parse(note.body)}</div>

        <div className="detail-actions">
          <button 
            onClick={handleToggleArchive} 
            className="btn btn-keep"
          >
            {note.archived ? 'Batal Arsip' : 'Arsip'}
          </button>
          <button 
            onClick={handleDelete} 
            className="btn btn-clear"
          >
            Hapus
          </button>
          <Link to="/" className="btn btn-cancel">Kembali</Link>
        </div>
      </div>
    </div>

  );
};

export default DetailPage;