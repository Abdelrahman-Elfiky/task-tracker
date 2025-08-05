import React from 'react';

function TaskItem({ task, onDelete, onEdit, onToggle }) {
  const taskClass = task.completed ? 'task-item completed' : 'task-item pending';

  return (
    <div className={taskClass}>
      <span>{task.text}</span>
      <div>
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;