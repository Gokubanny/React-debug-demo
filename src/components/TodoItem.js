import React from 'react';

const TodoItem = ({ todo, onToggle }) => {
  // Fixed: Using correct property name todo.id
  const handleClick = () => {
    onToggle(todo.id); // Now using todo.id instead of todo.key
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '10px',
        margin: '5px 0',
        backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
        border: '1px solid #ddd',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {}} // Controlled by parent click
        style={{ marginRight: '10px' }}
      />
      <span 
        style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#666' : '#000'
        }}
      >
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
