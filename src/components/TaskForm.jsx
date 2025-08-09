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
    if (!text) return;
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
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Task..."
      />
      <button>{editingTask ? "Update" : "Add"}</button>
    </form>
  );
}

export default TaskForm;
