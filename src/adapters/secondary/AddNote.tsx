import React from 'react';
import { Form, Input, Button, Space, Card, message } from 'antd';

// Definir el tipo para el objeto de nota
interface Note {
  title: string;
  description: string;
}

interface AddNoteProps {
  onAdd: (note: Note) => void;
}

const AddNote: React.FC<AddNoteProps> = ({ onAdd }) => {
  const [form] = Form.useForm();

  // Validaciones para campos requeridos
  const validateMessages = {
    required: '${label} es requerido!',
  };

  const handleFormSubmit = (values: { note: Note }) => {
    const { note } = values;

    // Validación para evitar notas vacías
    if (!note.title.trim() || !note.description.trim()) {
      message.error("Título y descripción son requeridos"); // Mostrar mensaje de error
      return;
    }

    // Agregar la nueva nota usando la función `onAdd`
    onAdd(note);

    // Reiniciar el formulario después de agregar la nota
    form.resetFields();
  };

  return (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        
      }}>
        <Space direction="vertical" size={16}>
          <Card title="Añadir Tarea" style={{ width: 300, textAlign: 'center' }}>
            <Form
              form={form}
              name="add-note"
              style={{ maxWidth: 600 }}
              validateMessages={validateMessages}
              onFinish={handleFormSubmit}
            >
              <Form.Item
                name={['note', 'title']}
                label="Título"
                rules={[{ required: true, message: 'El título es requerido' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['note', 'description']}
                label="Descripción"
                rules={[{ required: true, message: 'La descripción es requerida' }]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">Guardar</Button>
              </Form.Item>
            </Form>
          </Card>
        </Space>
      </div>
    );
    
};

export default AddNote;
