import React from 'react'

export default function AddTodo() {
    return (
        <div>
            <input
            id='myInput'
            type='text'
            placeholder='type here '
            />
            <button  className='btn-add'> Add  </button>
        </div>
    )
}
