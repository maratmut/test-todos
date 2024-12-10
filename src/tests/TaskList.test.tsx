import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskList from '../components/TaskList';
import { TaskItemProps } from '../components/TaskItem';


jest.mock('../components/TaskItem', () => {
  return ({ task, toggleTaskCompletion }: TaskItemProps) => (
    <div onClick={() => toggleTaskCompletion(task.id)} data-testid={`task-item-${task.id}`}>
      {task.text} - {task.completed ? 'Completed' : 'Active'}
    </div>
  );
});

describe('TaskList', () => {
  const mockToggleTaskCompletion = jest.fn();

  beforeEach(() => {
    render(
      <TaskList
        tasks={[
          { id: 1, text: 'Test Task 1', completed: false },
          { id: 2, text: 'Test Task 2', completed: true },
        ]}
        toggleTaskCompletion={mockToggleTaskCompletion}
      />,
    );
  });

  test('renders correctly', () => {
    expect(screen.getByText(/test task 1/i)).toBeInTheDocument();
    expect(screen.getByText(/test task 2/i)).toBeInTheDocument();
  });

  test('calls toggleTaskCompletion when a task item is clicked', () => {
    const taskItem1 = screen.getByTestId('task-item-1');
    fireEvent.click(taskItem1);

    expect(mockToggleTaskCompletion).toHaveBeenCalledWith(1);

    const taskItem2 = screen.getByTestId('task-item-2');
    fireEvent.click(taskItem2);

    expect(mockToggleTaskCompletion).toHaveBeenCalledWith(2);
  });
});
