import React from 'react'

export default function Todo({el, deleteHandler}) {


  

const deleteTodo=()=>{
    deleteHandler(el.id)
}


    return (
        <div className='todo-container'>
            <h3>{el.text}</h3>
            <div >
            <button onClick={deleteTodo}> Del  </button>
            <button> Done  </button>
            </div>
        </div>
    )
}
