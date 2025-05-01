// TodoContext.jsx
import { createContext, useReducer, useContext } from 'react';

const TodoContext = createContext();

const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, { id: Date.now(), text: action.payload }] };
    case 'REMOVE_TODO':
      return { todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}
