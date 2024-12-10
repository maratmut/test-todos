import React from 'react';
import { Button } from '@mui/material';

interface FiltersProps {
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  clearCompleted: () => void;
  tasks: Array<{ completed: boolean }>;
  currentFilter: 'all' | 'active' | 'completed';
}

const Filters: React.FC<FiltersProps> = ({ setFilter, clearCompleted, tasks, currentFilter }) => {
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Button
          onClick={() => setFilter('all')}
          variant={currentFilter === 'all' ? 'outlined' : 'text'}
          size="small"
        >
          All
        </Button>
        <Button
          onClick={() => setFilter('active')}
          variant={currentFilter === 'active' ? 'outlined' : 'text'}
          size="small"
        >
          Active
        </Button>
        <Button
          onClick={() => setFilter('completed')}
          variant={currentFilter === 'completed' ? 'outlined' : 'text'}
          size="small"
        >
          Completed
        </Button>
      </div>

      {completedCount > 0 && (
        <Button
          onClick={clearCompleted}
          style={{ marginLeft: 'auto' }}
          size="small"
        >
          Clear Completed
        </Button>
      )}
    </div>
  );
};

export default Filters;
