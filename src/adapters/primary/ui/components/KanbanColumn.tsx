import React from "react";
import TaskCard from "./TaskCard";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
  priority: "baja" | "media" | "alta";
  assignedTo: number;
  createdAt: string;
  dueDate: string;
  category: string;
}

interface KanbanColumnProps {
  status: "To Do" | "In Progress" | "Done";
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onUpdateTask: (task: Task) => void;
  onMoveTask: (id: number, status: "To Do" | "In Progress" | "Done") => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({
  status,
  tasks,
  onDeleteTask,
  onUpdateTask,
  onMoveTask,
}) => {
  const statusColor = {
    "To Do": "text-blue-500",
    "In Progress": "text-yellow-500",
    Done: "text-green-500",
  }[status];

  return (
    <div className="kanban-column bg-gray-100 p-4 rounded-md shadow-md">
      <h2 className={`font-bold text-lg mb-4 ${statusColor}`}>{status}</h2>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onUpdateTask={onUpdateTask}
          onMoveTask={onMoveTask}
        />
      ))}
    </div>
  );
};

export default KanbanColumn;
