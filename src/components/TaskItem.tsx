import React from 'react';
import { ListItem, ListItemText, Checkbox } from '@mui/material';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export interface TaskItemProps {
  task: Task;
  toggleTaskCompletion: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskCompletion }) => {
  return (
    <ListItem style={{ width: '100%' }}>
      <Checkbox style={{marginLeft: '-5px'}} checked={task.completed} onChange={() => toggleTaskCompletion(task.id)} />
      <ListItemText
        primary={task.text}
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      />
    </ListItem>
  );
};

export default TaskItem;
