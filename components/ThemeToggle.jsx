import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="my-4">
      <button onClick={toggleTheme}>
        Switch to {dark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}
