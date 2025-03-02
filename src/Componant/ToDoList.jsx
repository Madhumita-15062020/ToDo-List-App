import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, toggleTaskCompletion, deleteTask, addTask }) {
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      addTask(newTaskText);
      setNewTaskText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <ToDoItem 
            key={task.id} 
            task={task} 
            toggleTaskCompletion={toggleTaskCompletion} 
            deleteTask={deleteTask} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
