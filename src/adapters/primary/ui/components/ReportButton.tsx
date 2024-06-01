import React from "react";
import { saveAs } from "file-saver";

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

interface ReportButtonProps {
  tasks: Task[];
}

const ReportButton: React.FC<ReportButtonProps> = ({ tasks }) => {
  const generateReport = () => {
    const reportData = tasks.map((task) => ({
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority,
      assignedTo: task.assignedTo,
      createdAt: task.createdAt,
      dueDate: task.dueDate,
      category: task.category,
    }));

    const blob = new Blob([JSON.stringify(reportData, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, "report.json");
  };

  return (
    <button
      onClick={generateReport}
      className="bg-blue-500 text-white p-2 rounded mb-4"
    >
      Generar informe
    </button>
  );
};

export default ReportButton;
