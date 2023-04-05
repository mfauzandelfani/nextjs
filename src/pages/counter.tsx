import React, { useState } from 'react'

export default function Counter() {
    const [countre, setCounter] = useState(5)
  return (
    <div>
      counter: {countre}
      <button onClick={() => setCounter(countre + 1)}>+</button>
      <button onClick={() => setCounter(countre - 1)}>-</button>
    </div>
  );
}
