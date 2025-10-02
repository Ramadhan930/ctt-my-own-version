import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotes } from '../contexts/NotesContext';

const NewNotePage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();
  const { addNote } = useNotes();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      id: `notes-${+new Date()}`,
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    addNote(newNote);
    navigate('/');
  };

  const handleBodyChange = (event) => {
    setBody(event.target.innerHTML);
  };

  return (
    <div className="app">
      <h1>Tambah Catatan Baru</h1>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul catatan"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="note-input"
        />
        <div
          contentEditable
          onInput={handleBodyChange}
          className="note-body-input"
          suppressContentEditableWarning={true}
        >
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Simpan</button>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={() => navigate('/')}
          >
            Batal
          </button>
        </div>
      </form>
    </div>

  );
};

export default NewNotePage;