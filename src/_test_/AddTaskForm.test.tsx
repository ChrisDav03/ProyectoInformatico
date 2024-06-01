import { render, screen, fireEvent } from "@testing-library/react";
import AddTaskForm from "../adapters/primary/ui/components/AddTaskForm";

test("renders AddTaskForm and submits data", () => {
  const handleAddTask = jest.fn();
  render(<AddTaskForm onAddTask={handleAddTask} />);

  const titleInput = screen.getByPlaceholderText(/título/i);
  const descriptionInput = screen.getByPlaceholderText(/descripción/i);
  const submitButton = screen.getByText(/crear tarea/i);

  fireEvent.change(titleInput, { target: { value: "Test Task" } });
  fireEvent.change(descriptionInput, { target: { value: "Test Description" } });
  fireEvent.click(submitButton);

  expect(handleAddTask).toHaveBeenCalledWith(
    "Test Task",
    "Test Description",
    "baja"
  );
});
