import React from 'react';
import { Card, Space, Button } from 'antd'; // Importamos componentes de Ant Design
import { DeleteOutlined } from '@ant-design/icons'; // Icono para el botón de eliminar
import { Note } from './Note'; // Asegúrate de tener definida la interfaz Note

interface NoteListProps {
  notes: Note[]; // Cambia el tipo para esperar un array de notas
  onDelete: (index: number) => void; // Función para eliminar una nota
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDelete }) => {
  return (
    <Space direction="vertical" size={16}> {/* Espaciado entre las tarjetas */}
      {notes.map((note, index) => (
        <Card
          key={index}
          title={
            <div style={{ textAlign: 'center' }}>
              {note.title}
            </div>
          } 
          actions={[
            <Button
              type="text"
              icon={<DeleteOutlined />} // Usa un icono para el botón de eliminar
              onClick={() => onDelete(index)} // Llama a la función de eliminar
              danger // Cambia el color del botón a rojo para indicar peligro
            >
              Eliminar
            </Button>,
          ]}
        >
          <p className='d-flex justify-content-center'>{note.description}</p> {/* Muestra la descripción dentro de la tarjeta */}
        </Card>
      ))}
    </Space>
  );
};

export default NoteList;
