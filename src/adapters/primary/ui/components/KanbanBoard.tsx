import React, { useState, useEffect } from "react";
import KanbanColumn from "./KanbanColumn";
import AddTaskForm from "./AddTaskForm";
import { message } from "antd";

const NOTES_KEY = "notesApp_notes";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
  priority: "baja" | "media" | "alta";
}

const KanbanBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem(NOTES_KEY);
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(NOTES_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (title: string, description: string, priority: "baja" | "media" | "alta") => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      status: "To Do",
      priority,
    };

    setTasks([...tasks, newTask]);
    message.success("Tarea agregada con éxito");
  };

  const handleDeleteTask = (id: number) => {
    const confirm = window.confirm("¿Estás seguro de que quieres eliminar esta tarea?");
    if (confirm) {
      const newTasks = tasks.filter((task) => task.id !== id);
      setTasks(newTasks);
      message.success("Tarea eliminada con éxito");
    }
  };

  const handleUpdateTask = (updatedTask: Task) => {
    const newTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(newTasks);
    message.success("Tarea actualizada con éxito");
  };

  const handleMoveTask = (id: number, status: "To Do" | "In Progress" | "Done") => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, status } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="kanban-board p-4">
      <AddTaskForm onAddTask={handleAddTask} />
      <div className="kanban-columns grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {["To Do", "In Progress", "Done"].map((status) => (
          <KanbanColumn
            key={status}
            status={status as "To Do" | "In Progress" | "Done"}
            tasks={tasks.filter((task) => task.status === status)}
            onDeleteTask={handleDeleteTask}
            onUpdateTask={handleUpdateTask}
            onMoveTask={handleMoveTask}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
