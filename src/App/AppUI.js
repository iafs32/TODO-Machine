import React from 'react';
import { TodoContext } from '../TodoContext';
import TodoCounter from '../TodoCounter';
import TodoSearch from '../TodoSearch';
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';
import CreateTodoButton from '../CreateTodoButton';

export default function AppUI() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>

      <TodoContext.Consumer>
        {({loading, error, searchedTodos, completeTodo, deleteTodo}) => {
          <TodoList>
            {loading && <p>Estamos cargando...</p>}
            {error && <p>Hubo un error</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}

            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        }}
      </TodoContext.Consumer>

      <CreateTodoButton/>
    </React.Fragment>
  )
}
