// src/App.jsx
import { useState } from 'react';
import './App.css'; // Import the CSS file for styling

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
