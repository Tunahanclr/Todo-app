import React, { useState } from 'react';
import { GiCancel } from 'react-icons/gi';

function TodoList({ todos,setTodos }) {
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='todo-container'>
      {todos.map((todo, index) => (
        <div key={index} className='todo-items'>
          <p>{todo}</p>
          <i
            className='circle bi bi-x'
            onClick={() => handleDelete(index)}
          />
        </div>
      ))}
    </div>
  );
}

export default TodoList;



