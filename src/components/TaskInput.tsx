import React from 'react';
import { TextField } from '@mui/material';

interface TaskInputProps {
  addTask: (text: string) => void;
  taskText: string;
  setTaskText: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask, taskText, setTaskText }) => {
  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && taskText.trim().length > 0) {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <TextField
        label="New Task"
        variant="outlined"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyDown={addTodo}
        fullWidth
      />
    </div>
  );
};

export default TaskInput;
