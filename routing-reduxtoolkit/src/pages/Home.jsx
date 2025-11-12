import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {
  const fetchcount =  useSelector(state=>state.counter.count)
  return (
    <div>Home
      <h1>Count:{fetchcount} </h1>

    </div>
  )
}
