'use client';
import { useState } from 'react';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '10px' }}>+
      </button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '10px' }}>-
      </button>
    </div>
  );
}
