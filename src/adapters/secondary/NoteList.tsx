import React from 'react';
import Note from './Note';

interface NoteListProps {
  notes: string[];
  onDelete: (index: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDelete }) => {
  return (
    <div>
      {notes.map((note, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <Note content={note} />
          <button onClick={() => onDelete(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
