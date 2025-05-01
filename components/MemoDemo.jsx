import React, { useState, useMemo } from 'react';

function slowFunction(num) {
  console.log('Calculating...');
  for (let i = 0; i < 1e6; i++) { Math.random(); }
  return num * 2;
}

export default function MemoDemo() {
  const [number, setNumber] = useState(0);
  const double = useMemo(() => slowFunction(number), [number]);

  return (
    <div className="my-4">
      <h2>useMemo Demo</h2>
      <input type="number" value={number} onChange={e => setNumber(+e.target.value)} />
      <p>Double: {double}</p>
    </div>
  );
}
