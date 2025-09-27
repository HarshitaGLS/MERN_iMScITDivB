import React from 'react'
import { useDispatch } from 'react-redux'
import { DECREMENT, INCREMENT } from '../redux/counterSlice'

export const Counter = () => {
    const dispatch = useDispatch()
    const handleIncrease = ()=>{
            dispatch(INCREMENT(1))
    }
  return (
    <>
        <button type="button"  className="btn btn-primary me-3" onClick={handleIncrease}>Increase by 1</button>
        <button type="button"  className="btn btn-primary me-3" onClick={()=>dispatch(INCREMENT(5))}>Increase by 5</button>

         <button type="button"  className="btn btn-danger" onClick={()=>dispatch(DECREMENT())}>Decrease by 1</button>
        
    </>
  )
}
