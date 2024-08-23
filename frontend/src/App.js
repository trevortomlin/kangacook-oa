import React, { useState, useEffect } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/tasks/');
        if (response.ok) {
          const data = await response.json();
          setTodos(data);
          if (data.length > 0) {
            setNextId(Math.max(...data.map(task => task.id)) + 1);
          }
        } else {
          console.error('Failed to fetch tasks:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const addTodo = async (text) => {
    try {
      const response = await fetch('http://localhost:8000/api/tasks/add/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: text, completed: false }),
      });

      if (response.ok) {
        const newTodo = await response.json();
        setTodos([...todos, newTodo]);
        setNextId(nextId + 1);
      } else {
        console.error('Failed to add task:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const removeTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/tasks/delete/${id}/`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTodos(todos.filter(todo => todo.id !== id));
      } else {
        console.error('Failed to delete task:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const todoToUpdate = todos.find(todo => todo.id === id);
      if (todoToUpdate) {
        const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };
        
        const response = await fetch(`http://localhost:8000/api/tasks/check/${id}/`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ completed: updatedTodo.completed }),
        });

        if (response.ok) {
          setTodos(todos.map(todo =>
            todo.id === id ? updatedTodo : todo
          ));
        } else {
          console.error('Failed to update task:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
