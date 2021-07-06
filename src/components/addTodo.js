import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodos } from '../redux/todoSlice'

function Addtodo(props) {

    const [ value, setValue ] = useState('')

    const dispatch = useDispatch();

    const addTodo = (event) => {
        event.preventDefault()
        if(value){
            dispatch(addTodos({
                title : value
            }))
        }
        setValue('')
    }
    return (
        <form onSubmit={addTodo} className="form-inline mb-5">
            <label className="sr-only">Name</label>
            <input
                type='text'
                placeholder='Add todo...'
                className='form-control mr-3'
                value = {value}
                onChange={(event) => setValue(event.target.value)}
            ></input>
            <button type='submit' className='btn btn-primary'>
                Submit
    </button>
        </form>
    )
}

export default Addtodo
