import React from 'react';
import { List } from '@mui/material';
import TaskItem from './TaskItem';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskCompletion }) => {
  
  return (
    <List style={{ width: '100%' }}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} />
      ))}
    </List>
  );
};

export default TaskList;
