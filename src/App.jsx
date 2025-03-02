import React, { useState } from 'react';
import Header from './Componant/Header';
import ToDoList from './Componant/ToDoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Create ToDo-List App', completed: false },
    { id: 2, text: 'Create different componants', completed: false },
    { id: 3, text: 'Apply CSS', completed: false },
  ]);

  // Function to add a new task
  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Function to toggle the completion status of a task
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <ToDoList 
        tasks={tasks} 
        toggleTaskCompletion={toggleTaskCompletion} 
        deleteTask={deleteTask} 
        addTask={addTask} 
      />
    </div>
  );
}

export default App;
