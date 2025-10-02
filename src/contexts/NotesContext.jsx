import React, { createContext, useContext, useState, useEffect } from 'react';
import { getInitialData } from '../utils/local-data';

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
const [notes, setNotes] = useState(() => {
  const storedNotes = localStorage.getItem('notes');
  return storedNotes ? JSON.parse(storedNotes) : getInitialData();
});

useEffect(() => {
  localStorage.setItem('notes', JSON.stringify(notes));
}, [notes]);


  const addNote = (note) => {
    setNotes(prev => [note, ...prev]);
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(prev => prev.map(note =>
      note.id === id ? { ...note, archived: !note.archived } : note
    ));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, toggleArchive }}>
      {children}
    </NotesContext.Provider>
  );
};