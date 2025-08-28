import React, { useState, useEffect } from 'react';

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);

  // Fixed: Added count dependency to prevent stale closure
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Current count:', count);
    }, 2000);

    return () => clearInterval(interval);
  }, [count]); // Now includes count dependency

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    // Fixed: Using functional update to avoid stale state
    setHistory(prevHistory => [...prevHistory, newCount]);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    setHistory(prevHistory => [...prevHistory, newCount]);
  };

  const reset = () => {
    setCount(initialValue);
    setHistory([initialValue]);
  };

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      margin: '20px',
      borderRadius: '8px',
      backgroundColor: '#f0f8ff'
    }}>
      <h2>Counter Component</h2>
      <div style={{ fontSize: '24px', margin: '20px 0' }}>
        Count: <strong>{count}</strong>
      </div>
      
      <div>
        <button onClick={increment} style={{ marginRight: '10px' }}>
          Increment
        </button>
        <button onClick={decrement} style={{ marginRight: '10px' }}>
          Decrement
        </button>
        <button onClick={reset}>
          Reset
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>History:</h3>
        <p>{history.join(' → ')}</p>
      </div>
    </div>
  );
};

export default Counter;
