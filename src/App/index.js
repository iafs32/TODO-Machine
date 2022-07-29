import React from 'react';
import AppUI from './AppUI';
import { TodoProvider } from '../TodoContext';
// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebollas', completed: true },
//   { text: 'Tomar el curso de React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'ª', completed: false }
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
