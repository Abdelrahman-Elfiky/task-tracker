import React from "react";

function TaskItem({ task, onDelete, onEdit, onToggle }) {
  return (
    <div className={task.completed ? "task done" : "task"}>
      <span>{task.text}</span>
      <div>
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? "Undo" : "Done"}
        </button>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
