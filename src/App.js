import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [todos,setTodos]=useState([])
    const deleteTodo=(id)=>{
      setTodos(todos.filter((todo,index)=>index !== id ))
    }
    return (
    <div className="App">
      <ToastContainer/>
      <h1>Todo</h1>
        <TodoForm todos={todos} setTodos={setTodos}/>
        <TodoList  todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
