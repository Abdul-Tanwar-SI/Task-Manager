import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask({
        id: Date.now(),
        text: taskText,
        completed: false,
      });
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
