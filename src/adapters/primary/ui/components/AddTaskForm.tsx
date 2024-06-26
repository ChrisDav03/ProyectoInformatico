import React, { useState } from "react";

interface AddTaskFormProps {
  onAddTask: (title: string, description: string, priority: "baja" | "media" | "alta") => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"baja" | "media" | "alta">("baja");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(title, description, priority);
    setTitle("");
    setDescription("");
    setPriority("baja");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Agrega una tarea</h2>
      <div className="mb-2">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
        <input
          id="title"
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2 rounded w-full mb-2"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
        <textarea
          id="description"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border p-2 rounded w-full mb-2"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Prioridad</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value as "baja" | "media" | "alta")}
          className="border p-2 rounded w-full mb-2"
        >
          <option value="baja" className="text-green-500">Baja</option>
          <option value="media" className="text-yellow-500">Media</option>
          <option value="alta" className="text-red-500">Alta</option>
        </select>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Crear tarea</button>
      </div>
    </form>
  );
};

export default AddTaskForm;
