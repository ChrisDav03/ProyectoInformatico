import { render, screen, fireEvent } from "@testing-library/react";
import KanbanBoard from "../adapters/primary/ui/components/KanbanBoard";
import "@testing-library/jest-dom"; // Importar el tipo JestMatchers

describe("KanbanBoard", () => {
  beforeEach(() => {
    // Restablecer el almacenamiento local antes de cada prueba
    localStorage.clear();
  });

  test("renders KanbanBoard", () => {
    render(<KanbanBoard />);
    const addButton = screen.getByText(/crear tarea/i);
    expect(addButton).toBeInTheDocument(); // Utilizar toBeInTheDocument directamente
  });

  test("adds a task", () => {
    render(<KanbanBoard />);
    const titleInput = screen.getByPlaceholderText(
      /título/i
    ) as HTMLInputElement;
    const descriptionInput = screen.getByPlaceholderText(
      /descripción/i
    ) as HTMLInputElement;
    const prioritySelect = screen.getByLabelText(
      /prioridad/i
    ) as HTMLSelectElement;
    const submitButton = screen.getByText(/crear tarea/i);

    fireEvent.change(titleInput, { target: { value: "Test Task" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Test Description" },
    });
    fireEvent.change(prioritySelect, { target: { value: "alta" } });
    fireEvent.click(submitButton);

    const taskTitle = screen.getByText(/Test Task/i);
    expect(taskTitle).toBeInTheDocument();
  });
});
