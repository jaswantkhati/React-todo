import React from 'react'
import Todoitems from './todoItems';
import { useSelector } from 'react-redux'

function Todolist(props) {

    const todos = useSelector(state => state.todos);

    return (
        <ul className='list-group'>
            { todos.map(todo => (
                <Todoitems key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
            ))}
        </ul>
    )

}

export default Todolist
