import React from 'react'

export default function Todo({el, deleteHandler,doneHandler}) {


    const deleteTodo=()=>{
        deleteHandler(el.id)
    }

const doneTodo=()=>{
    doneHandler(el.id)
}



    return (
        <div className='todo-container'>
            <h3 style={ el.isDone? {textDecoration:'line-through'}:{}    }    >{el.text}</h3>

            
            <div className='buttons'>
            <button onClick={deleteTodo}> Del  </button>
            <button onClick={doneTodo}  > Done  </button>
            </div>
        </div>
    )
}
