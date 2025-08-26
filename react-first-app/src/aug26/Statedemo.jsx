import React, { useState } from 'react'

const Statedemo = (props) => {
    const [isLoggedIn , setIsLoggedIn] = useState(true)
  return (
    <>
    <button type="button"
    onClick={()=>setIsLoggedIn(!isLoggedIn)}>Change State</button>
      <h1>{isLoggedIn ? <h2>Welcome {props.username}</h2> : "Please Login!!" }</h1>
    </>
  )
}

export default Statedemo
