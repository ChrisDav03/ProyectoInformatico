import { render, screen, fireEvent } from "@testing-library/react";
import TaskCard from "../adapters/primary/ui/components/TaskCard";
import { Task } from "../adapters/primary/ui/components/Types.tsx";

const mockTask: Task = {
  id: 1,
  title: "Test Task",
  description: "Test Description",
  status: "To Do",
  priority: "baja",
};

test("renders TaskCard and edits task", () => {
  const handleDeleteTask = jest.fn();
  const handleUpdateTask = jest.fn();
  const handleMoveTask = jest.fn();

  render(
    <TaskCard
      task={mockTask}
      onDeleteTask={handleDeleteTask}
      onUpdateTask={handleUpdateTask}
      onMoveTask={handleMoveTask}
    />
  );

  const editButton = screen.getByText(/editar/i);
  fireEvent.click(editButton);

  const titleInput = screen.getByDisplayValue(/test task/i);
  const descriptionInput = screen.getByDisplayValue(/test description/i);
  const saveButton = screen.getByText(/guardar/i);

  fireEvent.change(titleInput, { target: { value: "Updated Task" } });
  fireEvent.change(descriptionInput, {
    target: { value: "Updated Description" },
  });
  fireEvent.click(saveButton);

  expect(handleUpdateTask).toHaveBeenCalledWith({
    ...mockTask,
    title: "Updated Task",
    description: "Updated Description",
  });
});
