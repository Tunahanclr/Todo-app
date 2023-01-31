import React from 'react'
import {GiCancel} from 'react-icons/gi'

function TodoList({todos,deleteTodo}) {
  return (
    <div className='todo-container'>
          
            {todos.map((todo,index)=>(
                <div key={index} className='todo-items'>
                        <p >{todo}</p>
                        <i  onClick={()=>{
                                deleteTodo()
                        }} className='circle  bi bi-x'></i>
                </div>
                    ))}
            
                 
            </div>
  )
}

export default TodoList