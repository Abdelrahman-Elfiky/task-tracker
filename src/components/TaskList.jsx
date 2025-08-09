import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onEdit, onToggle }) {
  return (
    <div>
      {tasks.length === 0 ? <p>No tasks</p> : null}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TaskList;
