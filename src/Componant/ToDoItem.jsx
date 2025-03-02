import React from 'react';

function ToDoItem({ task, toggleTaskCompletion, deleteTask }) {

  const taskStyle = {
    backgroundColor: task.completed ? '#d3f8e2' : 'transparent',  
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  return (
    <li style={taskStyle}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}  // Toggle completion on checkbox change
      />
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none', marginLeft: '10px' }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;
