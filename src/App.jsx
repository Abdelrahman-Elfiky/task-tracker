import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const updateTask = (updated) => {
    setTasks(tasks.map((t) => (t.id === updated.id ? updated : t)));
    setEditingTask(null);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="container">
      <h1>Tasks</h1>
      <TaskForm
        onAdd={addTask}
        onUpdate={updateTask}
        editingTask={editingTask}
      />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={setEditingTask}
        onToggle={toggleComplete}
      />
    </div>
  );
}

export default App;
