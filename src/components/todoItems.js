import React from 'react'
import { useDispatch } from 'react-redux';
import { toogleCompleted } from '../redux/todoSlice'
import { deleteTodoItem } from '../redux/todoSlice'

 function Todoitems({id, title , completed}) {

    const dispatch = useDispatch()

   const handleCheckboxClick = () =>{
    dispatch(toogleCompleted({
        id : id,
        completed : !completed
    }))       
   }

   const deleteTodo = () =>{
         dispatch(deleteTodoItem({
           id : id
         }))
   }

    return (
      <li className={`list-group-item ${completed && 'list-group-item-success'}`} >
         <div className="d-flex justify-content-between">
          <span>
              <input className='mr-3' type='checkbox' onChange={handleCheckboxClick} checked={completed}></input>
              {title}
          </span>
          <button className='btn btn-danger' onClick={deleteTodo}>
            Delete
          </button>
         </div>
      </li>
    )
}

export default Todoitems
