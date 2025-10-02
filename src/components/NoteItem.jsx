import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { showFormattedDate } from '../utils/showFormattedDate';

const NoteItem = ({ note }) => {
  return (
    <div className="note-item">
      <h3>
        <Link to={`/notes/${note.id}`}>{note.title}</Link>
      </h3>
      <p>{showFormattedDate(note.createdAt)}</p>
      <p>{parse(note.body)}</p>
    </div>
  );
};

export default NoteItem;