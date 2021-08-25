import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useState } from "react";

function App() {

const [todos, setTodos] = useState([
  {id:1, text:'save the world' , isDone:false },
  {id:2, text:'walk the dog', isDone:false }
])

const deleteHandler=(ID)=>{
setTodos(
  todos.filter(el=> el.id!== ID)
)
}
 
const doneHandler=(ID)=>{
setTodos(
  todos.map(el=> el.id === ID? {...el, isDone:!el.isDone  }: el  )
)
}

const addHandler=(newTodo)=>{
  setTodos(
    [...todos, newTodo]
  )
  }
  return (
    <div className="App">
      <h1> TO DO APP !!</h1>
      <AddTodo  addHandler={addHandler}  />
      <TodoList   todos={todos}   deleteHandler={deleteHandler} doneHandler={doneHandler}  />
    </div>
  );
}

export default App;


  //step1: create state (table of todos)

    //function delete
    //step2: create a delete function: 
    //1- parameter( ID of the clicked elemeent)
    //2-  filter: pass all the element that their id is different from the value of the parameter 
    // step3: pass the function to the requested component and link it to an event (onClick)

    //function  done 
    //step2: create a done function 
    //1- parameter( ID of the clicked elemeent)
    //2-map the table and check if the ID is the same as the one in the parameter : the value of isDone will be reversed 