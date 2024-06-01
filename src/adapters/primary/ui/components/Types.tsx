export interface Task {
  id: number;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
  priority: "baja" | "media" | "alta"; // Ajusta según los valores permitidos
}
