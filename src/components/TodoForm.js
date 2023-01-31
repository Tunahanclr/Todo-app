import React,{useState} from 'react'
import { toast } from 'react-toastify';
function TodoForm({todos,setTodos}) {
    const [todo,setTodo]=useState(' ')
     
      
    const submitHandle=(e)=>{
        if(todo===''){
            toast.error('Please Enter a todo')
        }
        else if(todos.includes(todo)){
            toast.error('Todo already exitst!')
        }else if(todo.length<3){
            toast.error('Todo must be at least 3 characters long')
        }else{
            const newtodo=todo.trim()
            setTodos([...todos, newtodo])    
            toast.success('Todo Added')
        }

          e.preventDefault();
          setTodo('')
    }
  return (
    <div>
  <form action="" id='todo-form' onSubmit={submitHandle}>
            <input id='todo-input' placeholder='Please Enter Your Todo' type="text" value={todo}  onChange={(e)=>setTodo(e.target.value)}  />
            <button disabled={!todo} type="submit">ekle</button>
          </form>
    </div>
  )
}

export default TodoForm