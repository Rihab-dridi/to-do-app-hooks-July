import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useState } from "react";

function App() {
  //step1: create state (table of todos)
    //function delete
    //step2: create a delete function: 
    //1- parameter( ID of the clicked elemeent)
    //2-  filter: pass all the element that their id is different from the value of the parameter 
    // step3: pass the function to the requested component and link it to an event (onClick)
const [todos, setTodos] = useState([
  {id:1, text:'save the world'  },
  {id:2, text:'walk the dog'}
])

const deleteHandler=(ID)=>{
setTodos(
  todos.filter(el=> el.id!== ID)
)
}
 

  return (
    <div className="App">
      <h1> TO DO APP !!</h1>
      <AddTodo/>
      <TodoList   todos={todos}   deleteHandler={deleteHandler}  />
    </div>
  );
}

export default App;
