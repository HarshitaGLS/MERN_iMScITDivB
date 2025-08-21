import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './aug21/Home'
import EventDemo from './aug21/EventDemo'

function App() {

  return (
    <>
     <h1 style={{color:"red",backgroundColor:"lightblue"}}>hello React</h1>   
      {/* <h2>Have a nice Day!!</h2> */}
      <Home></Home>
      <EventDemo/>
    </>
  )
}

export default App
