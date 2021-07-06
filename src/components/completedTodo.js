import React from 'react'
import { useSelector } from 'react-redux'

function Completedtodo(props) {
    
  const todos = useSelector(state => state.todos.filter(todo => todo.completed) )
    return (
      <h4 className='mt-3'>Completed Todo : {todos.length}</h4>
    )
}

export default Completedtodo