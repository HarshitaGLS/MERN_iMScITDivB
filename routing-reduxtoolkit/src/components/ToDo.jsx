import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todoSlice';
import { ToDoList } from './ToDoList';

export const ToDo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if(input !=''){
      dispatch(addTask(input))
    }
      setInput('');
  };

  return (
    <div className="container mt-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={input}
          placeholder="Enter todo..."
          onChange={(e) =>setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>Add</button>
      </div>

      <ToDoList/>
    </div>
  )
}
