import React, { useState } from 'react'

export default function AddTodo({addHandler}) {

const [input, setInput]=useState('')

const inputHandler=(e)=>{
setInput(e.target.value
)
}

const addTodo=()=>{
addHandler({
    id:Math.random(),
    text:input,
    isDone:false
})
setInput('')
}

    return (
        <div>
            <input
            id='myInput'
            type='text'
            value={input}
            placeholder='type here '
            onChange={inputHandler}
          
            />
            <button  className='btn-add'   onClick={addTodo} > Add  </button>
        </div>
    )
}
//step1: create a state in witch I will store the content in the input 
//step 2 : set the state so it will take the value of e.target.value 