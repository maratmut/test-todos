import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Filters from './components/Filters';
import TaskCounter from './components/TaskCounter';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [taskText, setTaskText] = useState('');

  const addTask = (text: string) => {
    const newTask: Task = { id: Date.now(), text: text, completed: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );
  };

  const markAllAsCompleted = () => {
    const allCompleted = tasks.every((task) => task.completed);
    setTasks((prevTasks) => prevTasks.map((task) => ({ ...task, completed: !allCompleted })));
  };

  const clearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '50px',
      }}>
      <Typography variant="h2" gutterBottom>
        Todos
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <ArrowDropDownIcon
          onClick={markAllAsCompleted}
          style={{ cursor: 'pointer', fontSize: '60px' }}
        />
        <TaskInput addTask={addTask} taskText={taskText} setTaskText={setTaskText} />
      </div>
      <div style={{ width: '100%' }}>
        <TaskList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '16px',
        }}>
        <TaskCounter tasks={tasks} />
        <Filters
          setFilter={setFilter}
          clearCompleted={clearCompleted}
          tasks={tasks}
          currentFilter={filter}
        />
      </div>
    </Container>
  );
};

export default App;
