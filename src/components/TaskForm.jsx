import React, { useState, useEffect } from "react";

function TaskForm({ onAdd, onUpdate, editingTask }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editingTask) {
      setText(editingTask.text);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editingTask) {
      onUpdate({ ...editingTask, text });
    } else {
      onAdd({ text });
    }
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">{editingTask ? "Update" : "Add"} Task</button>
    </form>
  );
}

export default TaskForm;
