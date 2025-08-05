
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    console.log(`You have ${tasks.length} tasks`);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTask(null);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  return (
    <div className="container">
      <h1>Task Tracker</h1>
      <TaskForm onAdd={addTask} onUpdate={updateTask} editingTask={editingTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={handleEdit} onToggle={toggleComplete} />
    </div>
  );
}

export default App;
