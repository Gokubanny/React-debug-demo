import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onAddTodo, onToggleTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      onAddTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };

  // Fixed: Correct calculation - now filters completed todos
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      margin: '20px',
      borderRadius: '8px',
      backgroundColor: '#f5f5f5'
    }}>
      <h2>Todo List</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <p>
          Progress: {completedCount} of {totalCount} completed
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new todo..."
          style={{ 
            padding: '8px', 
            marginRight: '10px', 
            width: '200px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />
        <button type="submit">Add Todo</button>
      </form>

      <div>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggleTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
