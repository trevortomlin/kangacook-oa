import React from 'react';

function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <span className="todo-text">{todo.title}</span>
          <span
            className="remove-icon"
            onClick={() => removeTodo(todo.id)}
          >
            &#10005;
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
