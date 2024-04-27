import React from 'react';

interface NoteProps {
  content: string; // Propiedad para el contenido
}
export interface Note {
  title: string;
  description: string;
}

const Note: React.FC<NoteProps> = ({ content }) => {
  return <div className="note">{content}</div>; // Representación visual de la nota
};

export default Note; // Exportación por defecto del componente
