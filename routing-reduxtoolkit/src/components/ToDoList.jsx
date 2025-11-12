import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTask } from '../redux/todoSlice'

export const ToDoList = () => {
  const todos = useSelector(state=>state.todo.todos)
  const dispatch = useDispatch()
  return (
    <>
      <h3 className="mb-3">To Do List</h3>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          > {todo.text}
           <div>
              <button className="btn btn-success btn-sm me-2">Edit </button>
              <button className="btn btn-danger btn-sm"
              onClick={()=>dispatch(removeTask(todo.id))}> Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
