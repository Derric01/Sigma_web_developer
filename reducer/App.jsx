// App.jsx
import React, { useState } from 'react';
import { TodoProvider, useTodo } from '../TodoContext';

function TodoInput() {
  const { dispatch } = useTodo();
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a todo"
        className="border p-2 mr-2"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-3 py-1 rounded">Add</button>
    </div>
  );
}

function TodoList() {
  const { state, dispatch } = useTodo();

  return (
    <ul className="p-4">
      {state.todos.map(todo => (
        <li key={todo.id} className="flex justify-between items-center my-2">
          <span>{todo.text}</span>
          <button
            onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <TodoProvider>
      <div className="max-w-md mx-auto mt-10 shadow p-5 rounded bg-white">
        <h1 className="text-xl font-bold mb-4">Todo List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
}
