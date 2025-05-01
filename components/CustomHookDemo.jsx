import React from 'react';
import useLocalStorage from '../hoopla/useLocalStorage';

export default function CustomHookDemo() {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div className="my-4">
      <h2>Custom Hook: useLocalStorage</h2>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>Name: {name}</p>
    </div>
  );
}
