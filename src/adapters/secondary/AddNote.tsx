import React, { useState } from 'react';
import { Form, Input, Button, Space, Card } from 'antd';

interface AddNoteProps {
  onAdd: (note: { title: string; description: string }) => void;
}

const AddNote: React.FC<AddNoteProps> = ({ onAdd }) => {
  const [form] = Form.useForm(); // Usar el formulario de Ant Design
  const validateMessages = {
    required: '${label} es requerido!',
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = (values: any) => {
    const { note } = values;

    // Validación simple para evitar campos vacíos (opcional si usas reglas en Form.Item)
    if (!note.title.trim() || !note.description.trim()) {
      console.error("Título y descripción son requeridos");
      return;
    }

    // Llamar a la función onAdd para agregar la nota
    onAdd({ title: note.title, description: note.description });

    // Reiniciar el formulario después de agregar la nota
    form.resetFields();
  };

  return (
    <div>
      <Space direction="vertical" size={16}>
        <Card title="Añadir Nota" style={{ width: 300 }}>
          <Form
            form={form}
            name="add-note"
            style={{ maxWidth: 600 }}
            validateMessages={validateMessages}
            onFinish={handleFormSubmit} // Aquí manejamos el envío del formulario
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
