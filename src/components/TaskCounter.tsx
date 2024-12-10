import React from 'react';
import { Typography } from '@mui/material';

interface Task {
  completed: boolean;
}

interface TaskCounterProps {
  tasks: Task[];
}

const TaskCounter: React.FC<TaskCounterProps> = ({ tasks }) => {
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <Typography variant="body2" style={{display: 'flex', justifyContent: 'start', alignItems: 'center', width: '120px', marginRight: '20px'}}>
      {tasks.length - completedCount} item{tasks.length - completedCount !== 1 ? 's' : ''} left
    </Typography>
  );
};

export default TaskCounter;
