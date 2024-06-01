import React, { useState } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
  priority: "baja" | "media" | "alta";
}

interface TaskCardProps {
  task: Task;
  onDeleteTask: (id: number) => void;
  onUpdateTask: (task: Task) => void;
  onMoveTask: (id: number, status: "To Do" | "In Progress" | "Done") => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDeleteTask, onUpdateTask, onMoveTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);

  const handleSave = () => {
    onUpdateTask({ ...task, title, description, priority });
    setIsEditing(false);
  };

  const priorityColor = {
    baja: "text-green-500",
    media: "text-yellow-500",
    alta: "text-red-500",
  }[priority];

  return (
    <div className="task-card bg-white p-4 rounded-md shadow-md mb-4">
      {isEditing ? (
        <div>
          <label className="block text-sm font-bold mb-2">Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded w-full mb-4"
          />
          <label className="block text-sm font-bold mb-2">Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded w-full mb-4"
          />
          <label className="block text-sm font-bold mb-2">Prioridad</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as "baja" | "media" | "alta")}
            className="border p-2 rounded w-full mb-4"
          >
            <option value="baja" className="text-green-500">Baja</option>
            <option value="media" className="text-yellow-500">Media</option>
            <option value="alta" className="text-red-500">Alta</option>
          </select>
          <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">Guardar</button>
        </div>
      ) : (
        <div>
          <h3 className="font-bold text-lg mb-2">{task.title}</h3>
          <p className="text-sm mb-2">{task.description}</p>
          <p className={`font-bold mb-4 ${priorityColor}`}>Prioridad: {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</p>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Opciones</h4>
            <div className="flex gap-2 items-center">
              <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white p-2 rounded">Editar</button>
              <button onClick={() => onDeleteTask(task.id)} className="bg-red-500 text-white p-2 rounded">Eliminar</button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Mover a</h4>
            <div className="flex gap-2 items-center">
              {task.status !== "To Do" && (
                <button onClick={() => onMoveTask(task.id, "To Do")} className="bg-blue-500 text-white p-2 rounded">To Do</button>
              )}
              {task.status !== "In Progress" && (
                <button onClick={() => onMoveTask(task.id, "In Progress")} className="bg-yellow-500 text-white p-2 rounded">In Progress</button>
              )}
              {task.status !== "Done" && (
                <button onClick={() => onMoveTask(task.id, "Done")} className="bg-green-500 text-white p-2 rounded">Done</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
