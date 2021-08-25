import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, deleteHandler}) {
    return (
        <div className='todoList-container'>
            {todos.map(el=> <Todo    el={el}  deleteHandler={deleteHandler} />   )}
        </div>
    )
}
