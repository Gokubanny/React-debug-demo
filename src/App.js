import React, { useState, useEffect } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import TodoList from './components/TodoList';
import Counter from './components/Counter';

function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    age: 25
  });

  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: true },
    { id: 3, text: 'Debug with DevTools', completed: false }
  ]);

  // Fixed: This effect now runs only once on mount
  useEffect(() => {
    console.log('App component rendered');
  }, []);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Bug 2: This function has the wrong parameter name
  const updateUserAge = (newAge) => {
    setUser({ ...user, age: newAge });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Debugging Demo</h1>

        <UserProfile
          user={user}
          onUpdateAge={updateUserAge}
        />

        <Counter initialValue={0} />

        <TodoList
          todos={todos}
          onAddTodo={addTodo}
          onToggleTodo={toggleTodo}
        />
      </header>
    </div>
  );
}

export default App;
